import React from 'react'
import arrow from '../../public/img/arrow.svg'

export default class BackToTop extends React.Component {
    render() {
        return (
            <div id="back-to-top">
                <img src={arrow} alt="arrow"></img>
            </div>
        )
    }
}