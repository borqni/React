import React, { Component } from 'react'
import Recipe from '../../components/recipeCard'
import Aside from '../../components/aside'
import Title from '../../components/title'
import style from './index.module.css'

class Recipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: []
        }
    }

    getRecipes = async () => {
        const promise = await fetch('http://localhost:9999/api/recipe')
        const recipes = await promise.json()

        this.setState({
            recipes
        })
    }

    renderRecipes() {
        const { recipes } = this.state

        return recipes.map(recipe => {
            return (
                <Recipe key={recipe._id} {...recipe} />
            )
        })
    }

    componentDidMount() {
        this.getRecipes()
    }

    render() {
        console.log(this.state.recipes);
        return (
            <section >
                {/* if isAuth */}
                <span className="search">
                    <input type="search" />
                    <button>Search</button>
                </span>
                <div className={style.receptsContainer}>
                    <div className={style.inerContainer}>
                        <Title title="Рецепти:" />
                        <div className={style.recepts}>
                            {this.renderRecipes()}
                        </div>
                    </div>
                    {/* if isAuth */}
                    <Aside />
                </div>
            </section>
        )
    }
}

export default Recipes