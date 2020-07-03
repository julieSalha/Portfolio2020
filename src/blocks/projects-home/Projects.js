import React from 'react'
import TitleProject from '../../components/title-project/TitleProject.js'
import Nature from '../../components/project-demo-one/Nature.js'
import SNCF from '../../components/project-demo-two/SNCF.js'
import Monoprix from '../../components/project-demo-three/Monoprix.js'
import Dinh from '../../components/project-demo-four/Dinh.js'
import Barbara from '../../components/project-demo-five/Barbara.js'


export default class Projects extends React.Component {
    render() {
        return (
            <section class="projects" id="projets">
                <TitleProject />
                <div class="projects__content">
                    <Nature />
                    <SNCF />
                    <Monoprix />
                    <Dinh />
                    <Barbara />
                </div>
            </section>
        )
    }
}
