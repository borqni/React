import React from 'react'
import Header from './components/header'
import Recipes from './components/recipes'
// import RecipeDetails from './components/recipeDetails'
// import Posts from './components/posts'
// import PostDetails from './components/postDetails'
import Footer from './components/footer'
// import Login from './pages/login'
// import Register from './pages/register'
import './App.css'
// import Profile from './pages/profile'
// import Home from './pages/home'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        <Recipes />
        {/* <RecipeDetails /> */}
        {/* <Posts /> */}
        {/* <PostDetails /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;