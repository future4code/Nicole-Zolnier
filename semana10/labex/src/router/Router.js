import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from '../pages/AboutUsPage'
import LandingPage from '../pages/LandingPage'
import ApplyPage from '../pages/ApplyPage'
import LoginPage from '../pages/LoginPage'
import TripsPage from '../pages/TripsPage'
import ErrorPage from '../pages/ErrorPage'
import AdminPage from '../pages/AdminPage'



function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/sobre">
          <AboutUsPage />
        </Route>
        
        <Route exact path="/inscricao">
          <ApplyPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin">
          <AdminPage />
        </Route>
        
        <Route exact path="/viagens">
          <TripsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;