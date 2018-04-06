import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound.js'
import AboutPage from './AboutPage.js'
import ContactPage from './ContactPage.js'
import Home from './Home.js'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/about" component = {AboutPage} />
      <Route path="/contact" component = {ContactPage} />
      <Route component = {NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
