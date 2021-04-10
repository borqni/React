import React from 'react'
import Link from '../link'
import './index.module.css'

const Header = () => {
    return (
        <header>
            <h3 className="logo">
                <Link href="#" title="Logo Receipts" />
            </h3>
            <nav>
                <Link href="./views/user/register.html" title="Регистрация" />
                <Link href="./views/user/login.html" title="Вход" />
                <Link href="./views/recipe/all.html" title="Рецепти" />
                <Link href="./views/recipe/all.html" title="Добавете рецепта" />
                <Link href="./views/post/all.html" title="Статии" />
                <Link href="./views/post/all.html" title="Добавете статия" />
                <Link href="#" title="Профил" />
                <Link href="#" title="Изход" />
            </nav>
        </header>
    )
}

export default Header