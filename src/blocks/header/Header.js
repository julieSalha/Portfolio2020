import React from 'react'
import Logo from '../../components/logo/Logo.js'
import Menu from '../../components/menu/Menu.js'

/* function toggle() {
    var x = document.getElementById("menu");
    if (x.classList.contains("hidden")) {
      x.classList.remove("hidden");
      x.classList.add("active");
    } else if ( x.classList.contains("active")) {
        x.classList.remove("active");
        x.classList.add("hidden");
    }
  };
  toggle(); */

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-visuals">
                    <div className="header__burger-menu">
                        <button type="button" className="header__burger-button">
                            <span className="header__burger-icon">
                                <span className="header__burger-line"></span>
                                <span className="header__burger-line"></span>
                            </span>
                            <span className="header__burger-icon__subtitle">menu</span>
                        </button>
                    </div>
                    <div className="header__logo">
                        <a className="go-home" href="/"><Logo /></a>
                    </div>
                </div>
                <Menu />
            </header>
        )
    }
}


