import React from 'react';
import styled from 'styled-components';
import hue from '../../utils/hue';

const HomeText = () => (
    <Wrapper>
        <div>
            <AnimatedGradientText>Antonio Hristov</AnimatedGradientText>
            <hr />
        </div>

        <TextWrapper>
            <Text>[</Text>
            <SubText>"Software Engineer", </SubText>
            <SubText>"Photography Lover",</SubText>
            <SubText>"PetrolHead",</SubText>
            <Text>]</Text>
        </TextWrapper>
    </Wrapper>
);

const Wrapper = styled.div`
    margin-top: 9vh;

    @media screen and (max-width: 900px) {
        margin-top: 5vh;

        margin: auto;
        width: 90%;
    }
`;

const TextWrapper = styled.div`
    width: 70%;
    transform: translateX(20%);
    margin-top: 10%;

    @media screen and (max-width: 900px) {
        width: 60%;
        transform: translateX(25%);
    }
`;

const AnimatedGradientText = styled.h1`
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 7vh;
    text-align: center;

    @media screen and (max-width: 900px) {
        margin-top: 20%;
        font-size: 5vh;
    }
`;

const Text = styled.h1`
    color: #00fbff;
    font-size: 3vh;

    @media screen and (max-width: 900px) {
        font-size: 2vh;
    }
`;

const SubText = styled.h1`
    color: #00fbff;
    font-size: 3vh;

    margin-left: 30px;
    margin-top: 5px;

    @media screen and (max-width: 900px) {
        font-size: 2vh;
    }
`;

export default HomeText;
