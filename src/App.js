import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './view/login'
import NewUser from './view/newUser'
import Home from './view/home'

function App() {
  return (
    <Router>
      <Route exact path='/login'  component={Login}/>
      <Route exact path='/new-user'  component={NewUser}/>
      <Route exact path='/'  component={Home}/>
    </Router>
  );
}

export default App;
