import React from 'react'
import Header from './components/header'
import Recipes from './components/recipes'
import RecipeDetails from './components/recipeDetails'
import Posts from './components/posts'
import PostDetails from './components/postDetails'
import Footer from './components/footer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Recipes />
        <RecipeDetails />
        <Posts />
        <PostDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;