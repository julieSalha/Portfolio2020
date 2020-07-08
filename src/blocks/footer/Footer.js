import React from 'react'
import icon_facebook from '../../img/picto/icon_facebook.svg'
import icon_github from '../../img/picto/icon_github.svg'
import icon_instagram from '../../img/picto/icon_instagram.svg'
import icon_linkedin from '../../img/picto/icon_linkedin.svg'

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="socials">
                    <a className="socials__linkedin" href="https://www.linkedin.com/in/juliesalha/" target="_blank" rel="noopener noreferrer"><img src={icon_linkedin} alt="linkedin" /></a>
                    <a className="socials__github" href="https://github.com/julieSalha" target="_blank" rel="noopener noreferrer"><img src={icon_github} alt="github" /></a>
                    <a className="socials__instagram" href="https://www.instagram.com/julie_salha/" target="_blank" rel="noopener noreferrer"><img src={icon_instagram} alt="instagram" /></a>
                    <a className="socials__facebook" href="https://fr-fr.facebook.com/juliesalhaphotographe/" target="_blank" rel="noopener noreferrer"><img src={icon_facebook} alt="facebook" /></a>
                </div>
                <div className="footer-links">
                    <a href="/">Contact</a>
                    <a href="/">Mentions légales</a>
                    <a href="/">Politique de confidentialité</a>
                </div>
            </footer>
        )
    }
}


