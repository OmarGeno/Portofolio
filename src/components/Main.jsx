import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';

function Main() {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/src/App.js' component={Home}></Route>
        <Route exact path='./Resume Body/Projects/ResumeProjectComponent.jsx' component={Signup}></Route>
    </Switch>
  )
}

export default Main