import React from 'react';
import styled from 'styled-components';
import HomeLogo from '../../components/homeLogo';
import HomeText from '../../components/homeText';

const Home = () => {
    return (
        <Wrapper>
            <HomeLogo />
            <HomeText />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;

    justify-content: space-evenly;
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    margin-top: -5%;
`;

export default Home;
