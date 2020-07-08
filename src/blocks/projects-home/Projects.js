import React from 'react'
import TitleProject from '../../components/title-project/TitleProject.js'
//import data from '../../components/project-type/DataProjects.js'

//import ProjectView from '../../components/project-type/ProjectView.js'
//import NatureBlock from '../../components/project-demo-one/NatureBlock.js'
import Nature from '../../components/project-demo-one/Nature.js'

import SNCF from '../../components/project-demo-two/SNCF.js'
import Monoprix from '../../components/project-demo-three/Monoprix.js'
import Dinh from '../../components/project-demo-four/Dinh.js'
import Barbara from '../../components/project-demo-five/Barbara.js'
import Havea from '../../components/project-demo-six/Havea.js'

export default class Projects extends React.Component {
    render() {
        return (
            <section className="projects" id="projects">
                <TitleProject />
                <div className="projects__content">
                    <Dinh />
                    <Barbara />
                    <Nature />
                    <SNCF />
                    <Havea />
                    <Monoprix />
                </div>
            </section>
        )
    }
}