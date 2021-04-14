import React, { Component } from 'react'
import Button from '../../components/button';
import Input from '../../components/input';
import Title from '../../components/title';
import styles from './index.module.css'
import UserContext from '../../Context'
import authenticate from '../../utils/authenticate'

class Register extends Component {
    constructor(props) {
        super(props)

        state = {
            email: "",
            username: "",
            password: "",
            rePassword: ""
        }
    }

    static contextType = UserContext

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            email,
            username,
            password
        } = this.state

        await authenticate('http://localhost:9999/api/user/register', {
            email,
            username,
            password
        }, (user) => {
            this.context.logIn(user)
            this.props.history.push('/')
        }, (e) => {
            console.log('Error', e)
        }
        )
    }

    render() {
        const {
            email,
            username,
            password,
            rePassword
        } = this.state


        return (
            <section className="register">
                <Title title="Създаване на акаунт:" />
                <form id="register" className={styles.register} onSubmit={this.handleSubmit}>>
                    <fieldset>
                        <Input
                            label="Имейл"
                            id="email"
                            value={email}
                            onChange={(e) => this.onChange(e, 'email')}
                        />
                        <Input
                            label="Име"
                            id="username"
                            value={username}
                            onChange={(e) => this.onChange(e, 'username')}
                        />
                        <Input
                            label="Парола"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                        />
                        <Input
                            label="Повторете паролата"
                            type="password"
                            id="rePassword"
                            value={rePassword}
                            onChange={(e) => this.onChange(e, 'rePassword')}
                        />
                        <Button
                            type="submit"
                            className={styles.button}
                            title="Регистрация"
                        />
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default Register