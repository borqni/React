import React from 'react'
import Posts from '../../pages/posts'
import Recipes from '../../components/recipes'
// import Recipes from '../../pages/recipes'
// import style from './index.module.css'

const Home = () => {
    return (
        <main>
            <section >
                <Recipes />
            </section>
            {/* <section > */}
            <Posts />
            {/* <Post /> */}
            {/* <Post /> */}
            {/* </section> */}
        </main >
    )
}

export default Home