import React from 'react'
import style from './index.module.css'
import Recipes from '../../components/recipes'
import Aside from '../../components/aside'
// import Recipe from '../../components/recipeCard'
// import Title from '../../components/title'
// import renderRecipes from '../../components/recipes'

const RecipesPage = () => {

    return (
        <section className="recipes">
            <span className="search">
                <input type="search" />
                <button>Search</button>
            </span>
            <div className={style.receptsContainer}>
                <Recipes />
                <Aside />
            </div>
        </section>
    )
}

export default RecipesPage