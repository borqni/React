import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import styles from './index.module.css'
import Title from '../../components/title'
import Textarea from '../../components/textarea'

const CreatePost = () => {



    return (
        <section className={styles.create}>
            <Title title="Добавете статия" />
            <form id="createPost">
                <fieldset>
                    <Input
                        value="title"
                        label="Заглавие"
                        id="title"
                    />
                    <Textarea
                        label="Статия:"
                        id="description"
                        placeholder="Въведете текста на статията:"
                    />
                    <Button
                        type="submit"
                        title="Добави"
                        className="createPost"
                    />
                </fieldset>
            </form>
        </section>
    )
}

export default CreatePost