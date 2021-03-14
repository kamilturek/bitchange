import { Button, Pane, toaster } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/User';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useUser();

  const onLogout = () => {
    toaster.success('Logged out.');
    logout();
  };

  return (
    <Pane
      display="flex"
      justifyContent="flex-end"
      padding={10}
      background="tint2"
    >
      {isAuthenticated ? (
        <Button marginRight={16} intent="none" onClick={onLogout}>
          Logout
        </Button>
      ) : (
        <>
          <Button appearance="primary" is={Link} to="/login" marginRight={15}>
            Login
          </Button>
          <Button is={Link} to="/register">
            Register
          </Button>
        </>
      )}
    </Pane>
  );
};

export default Navbar;
