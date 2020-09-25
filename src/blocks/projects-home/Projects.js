import React from 'react'
import TitleProject from '../../components/title-project/TitleProject.js'
import Nature from '../../components/project-demo-nature/Nature.js'
import SNCF from '../../components/project-demo-sncf/SNCF.js'
import Monoprix from '../../components/project-demo-monoprix/Monoprix.js'
import Dinh from '../../components/project-demo-dinh/Dinh.js'
import Barbara from '../../components/project-demo-barbara/Barbara.js'
import Havea from '../../components/project-demo-havea/Havea.js'

export default class Projects extends React.Component {
    render() {
        return (
            <section className="projects" id="projects">
                <TitleProject />
                <div className="projects__content">
                    <Barbara />
                    <Dinh />
                    <Nature />
                    <SNCF />
                    <Havea />
                    <Monoprix />
                </div>
            </section>
        )
    }
}