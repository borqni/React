import React from 'react'
import Link from '../link'
import './index.module.css'
import getNavigation from './navigation'

const Header = () => {
    const navigations = getNavigation()

    return (
        <header>
            <h3 className="logo">
                <Link href="#" title="Logo Receipts" />
            </h3>
            <nav>
                {
                    navigations.map(nav => {
                        return (
                            <Link href={nav.link} title={nav.title} key={nav.title} />
                        )
                    })
                }

            </nav>
        </header>
    )
}

export default Header