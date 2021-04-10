import React from 'react'
import Link from '../link'
import './index.module.css'

const Aside = () => {
    return (
        <aside>
            <h3>Рецепти за:</h3>
            <div>
                <Link href="/recipes/starter" title="Супи, салати, предястия" />
                <Link href="/recipes/mainDishes" title="Основни" />
                <Link href="/recipes/desserts" title="Десерти" />
                <Link href="/recipes/others" title="Други" />
            </div>
            <Link href="#" title="Добави" />
        </aside>
    )
}

export default Aside