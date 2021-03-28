import React, { Component } from 'react'
import Recipe from '../recipe'
import Aside from '../aside'

class Recipes extends Component {
    render() {
        return (
            <section class="recepts-container">
                <div>
                    <h1>Рецепти:</h1>
                    <div className="recepts">
                        <Recipe />
                    </div>
                </div>
                <Aside />
            </section>
        )
    }
}

export default Recipes