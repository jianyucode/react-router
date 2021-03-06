import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About'
import NoMatch from './components/shared/NoMatch'
import Navbar from './components/shared/Navbar'
import Blog from './components/blog/Blog'


const App = () => (
  <>
  <Navbar />
  <Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/about' component={About} />
  <Route exact path='/blog' component={Blog} />

  <Route component={NoMatch} />
  </Switch>
  </>
)

export default App;
