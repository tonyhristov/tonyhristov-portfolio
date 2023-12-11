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
    object-fit: cover;
    width: 100%;

    justify-content: space-evenly;
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    margin-top: -5%;

    @media screen and (max-width: 900px) {
        display: block;
        transform: translateY(0%);
        margin-top: -5%;
    }
`;

export default Home;
