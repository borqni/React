import React from 'react'
// import style from './index.module.css'

const Register = () => {
    return (
        <section class="register">
            <h2>Създаване на акаунт:</h2>
            <form id="register">
                <fieldset>
                    <p class="field">
                        <label for="email">Имейл:</label>
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </p>
                    <p class="field">
                        <label for="username">Име:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your Username" />
                    </p>
                    <p class="field">
                        <label for="password">Парола:</label>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </p>
                    <p class="field">
                        <label for="rePassword">Повторете паролата:</label>
                        <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                    </p>
                    <input type="submit" class="register" value="Регистрация" />
                </fieldset>
            </form>
        </section>
    )
}

export default Register