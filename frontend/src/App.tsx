import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pane } from 'evergreen-ui';

import Navbar from './Components/Navbar';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Pane width='100%' height='100%' display='flex' flexDirection='column'>
        <Navbar />

        <Pane
          flex={1}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Switch>
            <Route path='/' exact={true}>
              Home Page
            </Route>
            <Route path='/login'>Login Page</Route>
            <Route path='/register' component={Register} />
          </Switch>
        </Pane>
      </Pane>
    </Router>
  );
}

export default App;
