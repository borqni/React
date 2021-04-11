import React from 'react'
import Input from '../../components/input';
import Title from '../../components/title';
// import style from './index.module.css'

const Register = () => {


    return (
        <section className="register">
            <Title title="Създаване на акаунт:" />
            <form id="register">
                <fieldset>
                    <Input
                        label="Имейл"
                        id="email"
                        value="email"
                        onChange="onChange"
                    />
                    <Input
                        label="Име"
                        id="username"
                        value="username"
                        onChange="onChange"
                    />
                    <Input
                        label="Парола"
                        type="password"
                        id="password"
                        value="password"
                        onChange="onChange"
                    />
                    <Input
                        label="Повторете паролата"
                        type="password"
                        id="rePassword"
                        value="rePassword"
                        onChange="onChange"
                    />
                    <input type="submit" className="register" value="Регистрация" />
                </fieldset>
            </form>
        </section>
    )
}

export default Register