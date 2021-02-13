import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInputField, Pane, toaster } from 'evergreen-ui';

function Register() {
  const { register, getValues, handleSubmit, errors } = useForm();

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
    console.log('xxx', value);
  };

  const validatePasswords = (): boolean | string => {
    const { password1, password2 } = getValues(['password1', 'password2']);
    return password1 === password2 || 'Passwords do not match.';
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
          width='100%'
          name='email'
          placeholder='E-mail'
          label=''
          marginBottom={10}
          ref={register({
            required: 'E-mail is required.',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'E-mail is not valid.',
            },
          })}
          isInvalid={!!errors.email}
        />
        <TextInputField
          type='password'
          width='100%'
          name='password1'
          placeholder='Password'
          label=''
          marginBottom={10}
          ref={register({ required: 'Password is required.' })}
          isInvalid={!!errors.password1}
        />
        <TextInputField
          type='password'
          width='100%'
          name='password2'
          label=''
          placeholder='Confirm password'
          marginBottom={10}
          ref={register({
            required: 'Password is required.',
            validate: validatePasswords,
          })}
          isInvalid={!!errors.password2}
        />
        <Button appearance='primary' width='100%' justifyContent='center'>
          Register
        </Button>
      </Pane>
    </form>
  );
}

export default Register;
