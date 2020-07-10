import React from 'react';
import './App.scss';
import ReactDOM from 'react-dom';
import Header from './blocks/header/Header.js'
import Welcome from './blocks/welcome/Welcome.js'
//import DataNature from './components/project-type/Data.js'
import Projects  from './blocks/projects-home/Projects.js'
import Skills from './blocks/skills-home/Skills.js'
import Contact  from './blocks/contact/Contact.js'
import Footer from './blocks/footer/Footer';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Welcome />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('portfolio'));
