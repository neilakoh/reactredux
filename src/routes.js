import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Core from './components/core';
import Login from './components/login/login';
import MainPage from './components/mainPage/mainPage';
import Courses from './components/courses/coursesPage';

export default (
  <Route path="/" component={Core}>
    <IndexRoute component={MainPage} />
    <Route path="/login" component={Login} />
    <Route path="/courses" component={Courses} />
  </Route>
);
