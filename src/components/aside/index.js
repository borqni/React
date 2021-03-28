import React from 'react'
import Link from '../link'

const Aside = () => {
    return (
        <aside>
            <h3>Рецепти за:</h3>
            <span>
                <Link href="#" title="Супи, салати, предястия" />
                <Link href="#" title="Основни" />
                <Link href="#" title="Десерти" />
                <Link href="#" title="Други" />
            </span>
        </aside>
    )
}

export default Aside