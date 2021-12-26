import React, { useState } from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import styles from './index.module.css'
import Title from '../../components/title'
import Textarea from '../../components/textarea'
import getCookie from '../../utils/cookie'

const CreatePost = () => {

    const [post, setPost] = useState('')
    const [updatedPost, setUpdatedPost] = useState([])

    const handleSubmit = async () => {
        await fetch('http://localhost:9999/api/post', {
            method: 'POST',
            body: JSON.stringify({
                description: post
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setPost('')
        setUpdatedPost([...updatedPost, 1])
    }

    return (
        <section className={styles.create}>
            <Title title="Добавете статия" />
            <form id="createPost">
                <fieldset>
                    <Input
                        // value={postTitle}
                        label="Заглавие"
                        id="postTitle"
                        onChange={e => setPost(e.target.value)}
                    />
                    <Textarea
                        // value={postDescription}
                        label="Статия"
                        id="description"
                        placeholder="Въведете текста на статията:"
                        onChange={e => setPost(e.target.value)}
                    />
                    <Button
                        type="submit"
                        title="Добави"
                        className="createPost"
                        onClick={handleSubmit}
                    />
                </fieldset>
            </form>
        </section>
    )
}

export default CreatePost