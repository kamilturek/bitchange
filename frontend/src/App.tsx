import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>

      <Switch>
        <Route path='/' exact={true}>Home Page</Route>
        <Route path='/login'>Login Page</Route>
        <Route path='/register'>Register Page</Route>
      </Switch>
    </Router>
  );
}

export default App;
