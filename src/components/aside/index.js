import React from 'react'
import NavLink from '../link'
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
                            <NavLink href={nav.link} title={nav.title} key={nav.title} />
                        )
                    })
                }
            </div>
            {/* <NavLink href="#" title="Добави" /> */}
        </aside>
    )
}

export default Aside