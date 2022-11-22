import React from "react";
import styled from "styled-components";
import hue from "../../constants/hue"

const HomeText = () => (
    <Wrapper>
        <AnimatedGradientText>Antonio Hristov</AnimatedGradientText>
        <hr/>
        <AnimatedGradientSubText>["Software Engineer", "Photography Lover", "PetrolHead"]</AnimatedGradientSubText>
    </Wrapper>
)

const Wrapper = styled.div`
    margin-top: 9vh;
`

const AnimatedGradientText = styled.h1`
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 7vh;
    text-align: center;
`

const AnimatedGradientSubText = styled.h1`
    color: #f35626;
    background-image: 
    -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 3vh;
`


export default HomeText