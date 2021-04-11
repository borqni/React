import React from 'react'
import Title from '../../components/title';
// import style from './index.module.css'

const Register = (
    // {
    //     history
    // }
) => {
    //     const onRegisterSubmitHandler = (e) => {
    //         e.preventDefault();

    //         const username = e.target.username.value;
    //         const password = e.target.password.value;

    //         auth.createUserWithEmailAndPassword(username, password)
    //             .then(userCredential => {
    //                 console.log('Register');
    //                 history.push('/');
    //             });
    //     }

    return (
        <section className="register">
            <Title title="Създаване на акаунт:" />
            <form id="register">
                <fieldset>
                    <p className="field">
                        <label for="email">Имейл:</label>
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </p>
                    <p className="field">
                        <label for="username">Име:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your Username" />
                    </p>
                    <p className="field">
                        <label for="password">Парола:</label>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </p>
                    <p className="field">
                        <label for="rePassword">Повторете паролата:</label>
                        <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                    </p>
                    <input type="submit" className="register" value="Регистрация" />
                </fieldset>
            </form>
        </section>
    )
}

export default Register