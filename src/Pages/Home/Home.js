import React from 'react';
import Header from '../../Component/Header/Header';
import ProjectsCard from '../../Component/ProjectsCard/ProjectsCard';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../../Component/Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ProjectsCard></ProjectsCard>

        </div>
    );
};

export default Home;