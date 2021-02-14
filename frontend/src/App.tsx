import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pane } from 'evergreen-ui';

import Navbar from './Components/Navbar';
import { Login, Register } from './Pages';

const App: React.FC = () => (
  <Router>
    <Pane width="100%" height="100%" display="flex" flexDirection="column">
      <Navbar />

      <Pane flex={1} display="flex" justifyContent="center" alignItems="center">
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
);

export default App;
