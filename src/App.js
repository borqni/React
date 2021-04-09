import React from 'react'
import Header from './components/header'
import Recipes from './components/recipes'
import RecipeDetails from './components/recipeDetails'
import Posts from './components/posts'
import PostDetails from './components/postDetails'
import Footer from './components/footer'
import Login from './components/login'
import Register from './components/register'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Register />
        {/* <Login /> */}
        {/* <Recipes />
        <RecipeDetails />
        <Posts />
        <PostDetails /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;