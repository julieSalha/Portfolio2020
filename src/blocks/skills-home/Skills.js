import React from 'react'
import TitleSkills from '../../components/title-skill/TitleSkills.js'
import Integration from '../../components/skill-integration/Integration.js'
import Front from '../../components/skill-front/Front.js'
import Responsive from '../../components/skill-responsive/Responsive.js'
import Accessibility from '../../components/skill-accessibility/Accessibility.js'
import Seo from '../../components/skill-seo/Seo.js'
import Cms from '../../components/skill-cms/Cms.js'
import Version from '../../components/skill-version/Version.js'
import Basics from '../../components/skill-basics/Basics.js'

export default class Skills extends React.Component {
    render() {
        return (
            <section class="skills" id="skills">
                <TitleSkills />
            <div class="skills__content">
                <Integration />
                <Front />
                <Responsive />
                <Accessibility />
                <Seo />
                <Cms />
                <Version />
                <Basics />
            </div>
            </section>
        )
    }
}

