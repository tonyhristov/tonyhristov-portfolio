import React from 'react';
import styled from 'styled-components';
import Home from '../home';
import About from '../about';
import Navbar from '../../components/navbar';
import Education from '../education';
import WorkExperience from '../work-experience';
import ScrollButton from '../../components/scrollButton';

//100vh

const PageLayout = (props) => {
    return (
        <div>
            <Navbar />
            <ScrollButton />
            <HomeContainer id={'home'}>
                <Home />
            </HomeContainer>
            <AboutContainer id={'about'}>
                <About />
            </AboutContainer>
            <Container id={'work-experience'}>
                <WorkExperience />
            </Container>
            <Container id={'education'}>
                <Education />
            </Container>
        </div>
    );
};

const HomeContainer = styled.div`
    width: 100%;
    height: calc(100vh);

    @media screen and (max-width: 900px) {
        margin-top: 40%;
        height: auto;
    }
`;

const AboutContainer = styled.div`
    width: 100%;
    height: calc(100vh + 10vh);

    @media screen and (max-width: 900px) {
        margin-top: 40%;
        height: auto;
    }
`;

const Container = styled.div`
    width: 100%;

    @media screen and (max-width: 900px) {
        margin-top: 40%;
        height: auto;
    }
`;

export default PageLayout;
