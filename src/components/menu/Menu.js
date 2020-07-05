import React from 'react'

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu" className="menu">
                <ul>
                    <li><a className="menu__link" href="/">Accueil</a></li>
                    <li><a className="menu__link" href="#projects">Projets</a></li>
                    <li><a className="menu__link" href="#skills">Compétences</a></li>
                    <li><a className="menu__link" href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}