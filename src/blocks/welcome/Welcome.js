import React from 'react'
import beach2 from '../../img/beach2.jpg'
import Translation from '../../components/translation/Translation.js'


export default class Welcome extends React.Component {
    render() {
        return (
            <section id="welcome" className="welcome">
                <img className="welcome__image" src={beach2} alt="ocean" />
                <Translation />
                <div class="welcome__description">
                    <h1 className="welcome__title">Bonjour !</h1>
                    <p className="welcome__text">Je suis Julie SALHA, développeuse front-end basée à Paris.
                        Que puis-je pour vous ?
                    </p>
                </div>

            </section>
        )
    }
}