import React from 'react'
import Link from '../link'
import './index.module.css'

const Aside = () => {
    return (
        <aside>
            <h3>Рецепти за:</h3>
            <div>
                <Link href="#" title="Супи, салати, предястия" />
                <Link href="#" title="Основни" />
                <Link href="#" title="Десерти" />
                <Link href="#" title="Други" />
            </div>
        </aside>
    )
}

export default Aside