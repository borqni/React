import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import Button from '../../components/button'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:9999/api/user/login', {
            email,
            password
        }, (user) => {

            console.log(user)
            context.logIn(user)
            history.push('/')
        }, (e) => {
            console.log('Error', e)
        }
        )
    }

    return (
        <section className="login">
            <Title title="Вход:" />
            <form className={styles.login} onSubmit={handleSubmit}>
                <fieldset>
                    <Input
                        label="Имейл"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        label="Парола"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        title="Вход"
                        className="login"
                    />
                </fieldset>
            </form>
        </section>
    )
}

export default Login