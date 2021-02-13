import { Button, TextInput, Pane } from 'evergreen-ui';

function Login() {
  return (
    <Pane
      elevation={1}
      width={300}
      background='tint2'
      borderRadius={3}
      padding={15}
      display='flex'
      flexDirection='column'
    >
      <TextInput placeholder='E-mail' width='100%' marginBottom={10} required />
      <TextInput
        placeholder='Password'
        type='password'
        width='100%'
        marginBottom={10}
        required
      />
      <Button appearance='primary' width='100%' justifyContent='center'>
        Login
      </Button>
    </Pane>
  );
}

export default Login;
