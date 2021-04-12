import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Textarea from '../../components/textarea'
import Title from '../../components/title'
import './index.module.css'

const CreateRecipe = () => {


    return (
        <section className="createRecept">
            <Title title='Добавете рецепта' />
            <form id="createRecept">
                <fieldset>
                    <Input
                        label="Име на рецептата"
                        id="recipeTitle"
                        value="recipeTitle"
                    // onChange="onChange"
                    />
                    <Input
                        label="Категория"
                        id="category"
                        value="category"
                    // onChange="onChange"
                    />
                    <Textarea
                        label="Необходими продукти"
                        id="products"
                        placeholder="Въведете необходимите продукти"
                    />
                    <Textarea
                        label="Начин на приготвяне"
                        id="made"
                        placeholder="Въведете начина на приготвяне"
                    />
                    <Input
                        id="recipeImg"
                        label="Снимка"
                        type="image/jpeg"
                        value="recipeImg"
                    />
                    <Button
                        type="submit"
                        title="Добави"
                        className="createRecept"
                    />

                </fieldset>
            </form>
        </section >
    )
}

export default CreateRecipe;