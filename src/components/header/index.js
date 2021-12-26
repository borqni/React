import React, { Component } from 'react'
import NavLink from '../link'
import './index.module.css'
import getNavigation from './navigation'
import UserContext from '../../Context'


class Header extends Component {

    static contextType = UserContext

    render() {
        const {
            user
        } = this.context

        const navigations = getNavigation()

        return (
            <header>
                <h3 className="logo">
                    <NavLink href="/" title="Logo Recipеs" />
                </h3>
                <nav>
                    {
                        navigations.map(nav => {
                            return (
                                <NavLink href={nav.link} title={nav.title} key={nav.title} />
                            )
                        })
                    }
                </nav>
            </header>
        )
    }
}

export default Header