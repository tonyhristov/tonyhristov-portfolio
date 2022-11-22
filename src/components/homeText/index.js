import React from "react";
import styled from "styled-components";
import logo from "../../images/home.png"
import hue from "../../constants/hue"

const HomeText = () => (
    <div>
        <AnimatedGradientText>Antonio Hristov</AnimatedGradientText>
    </div>
)

const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-size: 7vh;
`



export default HomeText