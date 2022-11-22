import React from "react";
import styled from "styled-components";
import logo from "../../images/home.png"
import hue from "../../constants/hue"

const HomeLogo = () => (
    <BackgroundLogo>
        <Logo src={logo} alt="Logo"/>;
    </BackgroundLogo>
)

const BackgroundLogo = styled.div`
    background-color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-animation: ${hue} 10s infinite linear;
    width: 50vh;
    height: 50vh;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`

const Logo = styled.img`
    width: 125%;
    height: 125%;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-top: -9vh;
    margin-left:-7vh
`

export default HomeLogo