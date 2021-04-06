import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Login from './view/login'
import NewUser from './view/new-user'
import Home from './view/home'
import LostPassword from './view/lost-password'
import NewPost from './view/new-post'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/login'  component={Login}/>
        <Route exact path='/new-user'  component={NewUser}/>
        <Route exact path='/'  component={Home}/>
        <Route path='/:my/posts'  component={Home}/>
        <Route exact path='/lost-password'  component={LostPassword}/>
        <Route exact path='/post'  component={NewPost}/>
      </Router>
    </Provider>
  );
}

export default App;
