import React from 'react'
// import style from './index.module.css'

const Login = () => {
    return (
        <section className="login">
            <h2>Вход:</h2>
            <form className="login" onSubmit='onSubmit'>
                <fieldset>
                    <p className="field">
                        <label for="username">Име:</label>
                        <input value='username' id="username" type="text" name="username" placeholder="Enter your Username" />
                    </p>
                    <p className="field">
                        <label for="password">Парола:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" />
                    </p>
                    <input type="submit" className="login" value="Вход" />
                </fieldset>
            </form>
        </section>
    )
}

export default Login