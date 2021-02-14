import { Button, Pane } from 'evergreen-ui';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Pane
      display='flex'
      justifyContent='flex-end'
      padding={10}
      background='tint2'
    >
      <Button appearance='primary' is={Link} to='/login' marginRight={15}>
        Login
      </Button>
      <Button is={Link} to='/register'>
        Register
      </Button>
    </Pane>
  );
}

export default Navbar;
