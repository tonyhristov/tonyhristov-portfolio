import React from 'react';
import Header from '../../components/header';
import styled from 'styled-components';
import Home from '../home';
import About from '../about';

const PageLayout = (props) => {
    return (
        <div>
            <Header />
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
`;

export default PageLayout;
