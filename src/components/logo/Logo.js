import React from 'react'
import logo from '../../img/logo.svg'


export default class Logo extends React.Component {
    render() {
        return <img className="logo" src={logo} alt="logo portfolio JS" />
    }
}