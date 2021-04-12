import React from 'react'
import Post from '../../components/postCard'
import Recipe from '../../components/recipeCard'
import Recipes from '../../pages/recipes'
// import style from './index.module.css'

const Home = () => {
    return (
        <main>
            {/* <section > */}
                <Recipe/>
                
            {/* </section> */}
            <section >
                <Post />
                <Post />
                <Post />
            </section>
        </main >
    )
}

export default Home