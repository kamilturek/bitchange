import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { Button, TextInputField, Pane, toaster } from 'evergreen-ui';
import {
  emailValidation,
  passwordValidation,
  toastValidationErrors,
} from '../../utils';
import { useUser } from '../../contexts/User';

const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { authenticate } = useUser();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    toastValidationErrors(errors as { message: string }[]);
  }, [errors]);

  const onSubmit = (credentials: { email: string; password: string }) => {
    authenticate(credentials.email, credentials.password)
      .then((data) => {
        toaster.success('Logged in successfully.');
        setLoggedIn(true);
      })
      .catch((err: { message: string }) => toaster.danger(err.message));
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Pane
        elevation={1}
        width={300}
        background="tint2"
        borderRadius={3}
        padding={15}
        display="flex"
        flexDirection="column"
      >
        <TextInputField
          placeholder="E-mail"
          name="email"
          width="100%"
          label=""
          marginBottom={10}
          ref={register(emailValidation())}
        />
        <TextInputField
          placeholder="Password"
          name="password"
          type="password"
          label=""
          width="100%"
          marginBottom={10}
          ref={register(passwordValidation())}
        />
        <Button appearance="primary" width="100%" justifyContent="center">
          Login
        </Button>
      </Pane>
    </form>
  );
};

export default Login;
