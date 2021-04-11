import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Posts from './pages/posts'
import SharePost from './pages/sharePost'
import Recipes from './pages/recipes'
import ShareRecipe from './pages/shareRecipe'
import Profile from './pages/profile'

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />

                <Route path="/recipes" component={Recipes} />
                <Route path="/shareRecipe" component={ShareRecipe} />

                <Route path="/posts" component={Posts} />
                <Route path="/sharePost" component={SharePost} />

                <Route path="/profile/:userid" component={Profile} />

            </Switch>
        </BrowserRouter >
    )
}

export default Navigation