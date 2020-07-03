import React from 'react'

export default class Translation extends React.Component {
    render() {
        return (
            <div id="translation" className="translation">
                <a className="translation__lang translation--fr" href="/">FR</a>
                <a className="translation__lang translation--en" href="/"> EN</a>
            </div>
        )
    }
}