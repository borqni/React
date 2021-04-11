import React from 'react'
import Link from '../link'
import './index.module.css'
import getCategory from './categories'

const Aside = () => {
    const links = getCategory()

    return (
        <aside>
            <h3>Рецепти за:</h3>
            <div>
                {
                    links.map(nav => {
                        return (
                            <Link href={nav.link} title={nav.title} />
                        )
                    })
                }
            </div>
            <Link href="#" title="Добави" />
        </aside>
    )
}

export default Aside