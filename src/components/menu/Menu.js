import React from 'react'

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu" className="menu">
                <ul>
                    <li><a className="menu__link" href="/">À Propos</a></li>
                    <li><a className="menu__link" href="/">Projets</a></li>
                    <li><a className="menu__link" href="/">Actualités</a></li>
                    <li><a className="menu__link" href="/">Contact</a></li>
                </ul>
            </nav>
        )
    }
}