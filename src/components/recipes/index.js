import React, { Component } from 'react'
import Recipe from '../recipe'

class Recipes extends Component {
    render() {
        return (
            <section className="recepts">
                <h1>Рецепти:</h1>
                <Recipe />
            </section>
        )
    }
}

export default Recipes