import React from 'react';
import styled from 'styled-components';
import Home from '../home';
import About from '../about';
import Navbar from '../../components/navbar';

const PageLayout = (props) => {
    return (
        <div>
            <Navbar />
            <Container>
                <Home />
            </Container>
            <Container id={'about'}>
                <About />
            </Container>
        </div>
    );
};

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 10px);

    @media screen and (max-width: 900px) {
        margin-top: 120px;
        height: auto;
    }
`;

export default PageLayout;
