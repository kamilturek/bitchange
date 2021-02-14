import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInputField, Pane } from 'evergreen-ui';
import { emailValidation, passwordValidation, toastErrors } from '../Utils';

function Login() {
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    toastErrors(errors as { message: string }[]);
  }, [errors]);

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Pane
        elevation={1}
        width={300}
        background='tint2'
        borderRadius={3}
        padding={15}
        display='flex'
        flexDirection='column'
      >
        <TextInputField
          placeholder='E-mail'
          name='email'
          width='100%'
          label=''
          marginBottom={10}
          ref={register(emailValidation())}
        />
        <TextInputField
          placeholder='Password'
          name='password'
          type='password'
          label=''
          width='100%'
          marginBottom={10}
          ref={register(passwordValidation())}
        />
        <Button appearance='primary' width='100%' justifyContent='center'>
          Login
        </Button>
      </Pane>
    </form>
  );
}

export default Login;
