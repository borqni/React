import React from 'react'
import Post from '../../components/postCard'
import Posts from '../../components/posts'
import Recipe from '../../components/recipeCard'
import Recipes from '../../components/recipes'
// import style from './index.module.css'

const Home = () => {
    return (
        <main>
            <section >
                <Recipe />
            </section            >
            <section >
                <Post />
            </section            >
        </main >
    )
}

export default Home