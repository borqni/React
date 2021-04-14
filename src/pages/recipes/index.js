import React, { Component } from 'react'
import Aside from '../../components/aside'
import Recipe from '../../components/recipeCard'
import Recipes from '../../components/recipes'
import Title from '../../components/title'
import style from './index.module.css'
// import renderRecipes from '../../components/recipes'

const RecipesPage = () => {


    // console.log(this.state.recipes);

    return (
        <section className="recipes">
            {/* if isAuth */}
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