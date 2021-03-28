import React from 'react'
import Nav from '../navigation'

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
                <Nav href="./views/recipe/create.html" title="Рецепти" />
                <Nav href="./views/post/create.html" title="Статии" />
                <Nav href="#" title=" username !" />
                <Nav href="#" title="Изход" />
            </nav>
        </header>
    )
}

export default Header