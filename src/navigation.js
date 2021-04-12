import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Posts from './pages/posts'
import CreatePost from './pages/createPost'
import Recipes from './pages/recipes'
import CreateRecipe from './pages/createRecipe'
import Profile from './pages/profile'

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />

                <Route path="/recipes" component={Recipes} />
                <Route path="/createRecipe" component={CreateRecipe} />

                <Route path="/posts" component={Posts} />
                <Route path="/createPost" component={CreatePost} />

                <Route path="/profile/:userid" component={Profile} />

            </Switch>
        </BrowserRouter >
    )
}

export default Navigation