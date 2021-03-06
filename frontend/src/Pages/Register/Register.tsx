import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { Button, TextInputField, Pane, toaster } from 'evergreen-ui';
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation,
  toastHTTPErrors,
  toastValidationErrors,
} from '../../Utils';
import { RegisterCredentials } from './types';

const Register: React.FC = () => {
  const [registered, setRegistered] = useState(false);
  const { register, getValues, handleSubmit, errors } = useForm();

  useEffect(() => {
    toastValidationErrors(errors as { message: string }[]);
  }, [errors]);

  const onSubmit = (credentials: RegisterCredentials) => {
    axios
      .post('http://localhost:8000/api/auth/registration/', credentials)
      .then(() => {
        toaster.success('Registered successfully.');
        setRegistered(true);
      })
      .catch((error) => toastHTTPErrors(error.response.data));
  };

  if (registered) {
    return <Redirect to="/login" />;
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
          width="100%"
          name="email"
          placeholder="E-mail"
          label=""
          marginBottom={10}
          ref={register(emailValidation())}
          isInvalid={!!errors.email}
        />
        <TextInputField
          type="password"
          width="100%"
          name="password1"
          placeholder="Password"
          label=""
          marginBottom={10}
          ref={register(passwordValidation())}
          isInvalid={!!errors.password1}
        />
        <TextInputField
          type="password"
          width="100%"
          name="password2"
          label=""
          placeholder="Confirm password"
          marginBottom={10}
          ref={register(
            confirmPasswordValidation({
              password1: getValues('password1'),
              password2: getValues('password2'),
            })
          )}
          isInvalid={!!errors.password2}
        />
        <Button appearance="primary" width="100%" justifyContent="center">
          Register
        </Button>
      </Pane>
    </form>
  );
};

export default Register;
