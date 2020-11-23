import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AboutUsPage from '../pages/Public/AboutUs/AboutUsPage'
import LandingPage from '../pages/Public/LandingPage'
import ApplyPage from '../pages/Public/ApplyPage'
import LoginPage from '../pages/Private/LoginPage'
import TripsPage from '../pages/Public/TripsPage'
import ErrorPage from '../pages/Public/ErrorPage'
import AdminPage from '../pages/Private/AdminPage'
import CreateTrip from '../pages/Private/CreateTripPage'
import TripDetailPage from '../pages/Private/TripDetailPage'


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/about">
          <AboutUsPage />
        </Route>
        
        <Route exact path="/apply">
          <ApplyPage />
        </Route>
        
        <Route exact path="/trips">
          <TripsPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin">
          <AdminPage />
        </Route>

        <Route exact path="/admin/trips">
          <AdminPage />
        </Route>

        <Route exact path="/admin/trips/create-trip">
          <CreateTrip />
        </Route>         

        <Route exact path="/admin/trips/detail/:id">
          <TripDetailPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;