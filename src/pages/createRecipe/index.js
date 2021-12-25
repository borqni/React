import React, { useState } from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Textarea from '../../components/textarea'
import Title from '../../components/title'
import './index.module.css'
import getCookie from '../../utils/cookie'

const CreateRecipe = () => {

    const [recipe, setRecipe] = useState('')
    const [updatedRecipe, setUpdatedRecipe] = useState([])

    const handleSubmit = async () => {
        await fetch('http://localhost:9999/api/recipe', {
            method: 'POST',
            body: JSON.stringify({
                description: recipe
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setRecipe('')
        setUpdatedRecipe([...updatedRecipe, 1])
    }

    return (
        <section className="createRecept">
            <Title title='Добавете рецепта' />
            <form id="createRecept">
                <fieldset>
                    <Input
                        label="Име на рецептата"
                        id="recipeTitle"
                        // value={recipeTitle}
                        onChange={e => setRecipe(e.target.value)}
                    />
                    <Input
                        label="Категория"
                        id="category"
                        // value={category}
                        onChange={e => setRecipe(e.target.value)}
                    />
                    <Textarea
                        label="Необходими продукти"
                        id="products"
                        // value={products}
                        onChange={e => setRecipe(e.target.value)}
                        placeholder="Въведете необходимите продукти"
                    />
                    <Textarea
                        label="Начин на приготвяне"
                        id="made"
                        // value={made}
                        onChange={e => setRecipe(e.target.value)}
                        placeholder="Въведете начина на приготвяне"
                    />
                    <Input
                        id="recipeImg"
                        label="Снимка"
                        type="image/jpeg"
                        onChange={e => setRecipe(e.target.value)}
                        // value={recipeImg}
                    />
                    <Button
                        type="submit"
                        title="Добави"
                        onClick={handleSubmit}
                    />
                </fieldset>
            </form>
        </section >
    )
}

export default CreateRecipe;