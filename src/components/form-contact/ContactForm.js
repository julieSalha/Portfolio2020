import React from 'react'
import icon_phone from '../../img/picto/icon_phone.svg'

export default class ContactForm extends React.Component {
    render() {
        return (
            <div className="form-contact">
                <div className="form-contact__header"><h2 className="form-contact__title">Contact</h2></div>
                <form action="" onsubmit="return false">
                    <div>
                        <label htmlFor="fname">Prénom <span>*</span></label>
                        <input type="text" id="fname" name="firstname" placeholder="Prénom" />
                    </div>
                    <div>
                        <label htmlFor="lname">Nom <span>*</span></label>
                        <input type="text" id="lname" name="lname" placeholder="Nom" /> 
                    </div>                       
                    <div>
                        <label htmlFor="mail">Mail <span>*</span></label>
                        <input type="text" id="mail" name="mail" placeholder="Adresse e-mail" />
                    </div>
                    <div>
                        <label htmlFor="subject">Message <span>*</span></label>
                        <textarea name="subject" id="subject" cols="30" rows="10" placeholder="Votre message..."></textarea>
                    </div>
                    <div className="form-contact__submit">
                        <button type="onSubmit" readOnly="Envoyer">Envoyer</button>
                    </div>
                    <div className="form-contact__phone"><img src={icon_phone} alt="phone"/>06.50.XX.XX.XX</div>
                </form>
            </div>
        )
    }
}