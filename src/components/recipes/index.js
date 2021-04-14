import React, { useState, useCallback, useEffect } from 'react'
import Recipe from '../../components/recipeCard'
import getRecipe from '../../utils/recipes'
import Title from '../../components/title'
import style from './index.module.css'

const Recipes = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = useCallback(async () => {
        const recipes = await getRecipe(props.length)
        setRecipes(recipes)
    }, [props.length])

    const renderRecipes = () => {
        return recipes.map(recipe => {
            return (
                <Recipe key={recipe._id} {...recipe} />
            )
        })
    }

    useEffect(() => {
        getRecipes()
    }, [props.updatedRecipe, getRecipes])

    return (
        <div className={style.inerContainer}>
            <Title title="Рецепти:" />
            <div className={style.recepts}>
                {renderRecipes()}
            </div>
        </div>
    )
}

export default Recipes