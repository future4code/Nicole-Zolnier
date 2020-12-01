import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUpPage'
import FeedPage from '../screens/FeedPage'
import PostDetailsPage from '../screens/PostDetailsPage'
import ErrorPage from '../screens/ErrorPage'
import Header from '../components/Header';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <LoginPage />
                </Route>
                <Route exact path="/cadastrar">
                    <Header />
                    <SignUpPage />
                </Route>
                <Route exact path="/feed">
                    <Header />
                    <FeedPage />
                </Route>
                <Route exact path="/feed/post/:id">
                    <Header />
                    <PostDetailsPage />
                </Route>
                <Route>
                    <Header />
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;