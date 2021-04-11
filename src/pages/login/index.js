import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Title from '../../components/title'
import styles from './index.module.css'

const Login = (username, password) => {
    return (
        <section className="login">
            <Title title="Вход:" />
            <form className={styles.login} onSubmit='onSubmit'>
                <fieldset>
                    <Input
                        label="Имейл"
                        id="email"
                        value="email"
                        onChange="onChange"
                    />
                    <Input
                        label="Парола"
                        type="password"
                        id="password"
                        value="password"
                        onChange="onChange"
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