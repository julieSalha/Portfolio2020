import React from 'react'
import Logo from '../../components/logo/Logo.js'
import Menu from '../../components/menu/Menu.js'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <a class="go-home" href="/"><Logo /></a>
                <Menu />
            </header>
        )
    }
}


