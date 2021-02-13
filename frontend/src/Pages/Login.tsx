import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInputField, Pane, toaster } from 'evergreen-ui';

function Login() {
  const { register, handleSubmit, errors } = useForm();

    // MAYBE EXTRACT THIS EFFECT
    useEffect(() => {
      const TOASTER_TIMEOUT = 200;
  
      Object.values(errors as { message: string }[])
        .reverse()
        .map((error) => error.message)
        .forEach((error) =>
          setTimeout(() => toaster.danger(error, { id: error }), TOASTER_TIMEOUT)
        );
    }, [errors]);

  const onSubmit = (value: any) => {
    console.log(value);
  }

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
          ref={register({
            required: 'E-mail is required.',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'E-mail is not valid.',
            },
          })}
        />
        <TextInputField
          placeholder='Password'
          name='password'
          type='password'
          label=''
          width='100%'
          marginBottom={10}
          ref={register({
            required: 'Password is required.'
          })}
        />
        <Button appearance='primary' width='100%' justifyContent='center'>
          Login
        </Button>
      </Pane>
    </form>
  );
}

export default Login;
