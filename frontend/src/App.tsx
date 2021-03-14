import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pane } from 'evergreen-ui';

import Navbar from './components/Navbar';
import { Login, Register } from './pages';
import { UserProvider } from './contexts/User';

const App: React.FC = () => (
  <UserProvider>
    <Router>
      <Pane width="100%" height="100%" display="flex" flexDirection="column">
        <Navbar />

        <Pane
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Switch>
            <Route path="/" exact>
              Home Page
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Pane>
      </Pane>
    </Router>
  </UserProvider>
);

export default App;
