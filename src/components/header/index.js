import React from 'react'
import Nav from '../link'
import './index.module.css'

const Header = () => {
    return (
        <header>
            <h3 class="logo">
                <Nav href="#" title="Logo Receipts" />
            </h3>
            <span class="search">
                <input type="search" />
                <button>Search</button>
            </span>
            <nav>
                <Nav href="./views/user/register.html" title="Регистрация" />
                <Nav href="./views/user/login.html" title="Вход" />
                <Nav href="./views/recipe/all.html" title="Рецепти" />
                <Nav href="./views/post/all.html" title="Статии" />
                <Nav href="#" title="Профил" />
                <Nav href="#" title="Изход" />
            </nav>
        </header>
    )
}

export default Header