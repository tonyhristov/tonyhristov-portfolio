import React from 'react';
import styled from 'styled-components';
import Home from '../home';
import About from '../about';
import Navbar from '../../components/navbar';
import Education from '../education';
import WorkExperience from '../work-experience';
import ScrollButton from '../../components/scrollButton';

const PageLayout = (props) => {
    return (
        <div>
            <Navbar />
            <ScrollButton />
            <Container>
                <Home />
            </Container>
            <Container id={'about'}>
                <About />
            </Container>
            <Container id={'work-experience'}>
                <WorkExperience />
            </Container>
            <Container id={'education'}>
                <Education />
            </Container>
        </div>
    );
};

const Container = styled.div`
    width: 100%;
    height: calc(100vh);

    @media screen and (max-width: 900px) {
        margin-top: 40%;
        height: auto;
    }
`;

export default PageLayout;
