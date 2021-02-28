import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
import React, { createContext, useContext, useEffect, useState } from 'react';
import UserPool from '../UserPool';

interface IUserContextProps {
  isAuthenticated: boolean;

  authenticate(email: string, password: string): Promise<any>;
  getSession(): Promise<CognitoUserSession>;
  logout(): void;
}

const UserContext = createContext({} as IUserContextProps);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const getSession = async () =>
    await new Promise(
      (resolve: (session: CognitoUserSession) => void, reject) => {
        const user = UserPool.getCurrentUser();
        if (user) {
          user.getSession((err: Error | null, session: CognitoUserSession) => {
            if (err) {
              reject();
            }
            resolve(session);
          });
        } else {
          reject();
        }
      }
    );

  const authenticate = async (email: string, password: string) =>
    await new Promise((resolve: (data: any) => void, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool,
      });
      const authenticationDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });

      user.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
          resolve(session);
          setAuthenticated(true);
        },
        onFailure: (err) => reject(err),
        newPasswordRequired: (attributes) => resolve(attributes),
      });
    });

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    getSession()
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false));
  });

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,

        authenticate,
        getSession,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
