import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from '../pages/Public/AboutUsPage'
import LandingPage from '../pages/Public/LandingPage'
import ApplyPage from '../pages/Public/ApplyPage'
import LoginPage from '../pages/Private/LoginPage'
import TripsPage from '../pages/Public/TripsPage'
import ErrorPage from '../pages/ErrorPage'
import AdminPage from '../pages/Private/AdminPage'
import Candidates from '../pages/Private/CandidatesPage';
import CreateTrip from '../pages/Private/CreateTripPage';
import ListTrip from '../pages/Private/ListTripPage';



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

        <Route exact path="/admin/candidatos">
          <Candidates />
        </Route>

        <Route exact path="/admin/viagens/criar-viagem">
          <CreateTrip />
        </Route>   

        <Route exact path="/admin/viagens">
          <ListTrip />
        </Route>       

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;