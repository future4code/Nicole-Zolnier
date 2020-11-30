import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUpPage'
import FeedPage from '../screens/FeedPage'
import PostDetailsPage from '../screens/PostDetailsPage'
import ErrorPage from '../screens/ErrorPage'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/cadastrar">
                    <SignUpPage />
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="/feed/post/:id">
                    <PostDetailsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;