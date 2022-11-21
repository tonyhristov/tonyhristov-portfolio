import React from "react";
import styled from "styled-components";
import logo from "../../images/home.png"
import hue from "../../constants/hue"
import Header from "../../components/header";

const Home = () => {
    return (
        <Wrapper>
            <BackgroundLogo>
                <Logo src={logo} alt="Logo" />;
            </BackgroundLogo>

            <h1>Antonio Hristov</h1>
        </Wrapper>

    )
}

const Wrapper = styled.div`
  //   display: flex;
  // justify-content: space-between;
  display: inline-block;
  // height: 100%;
`

const BackgroundLogo = styled.div`
    background-color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-animation: ${hue} 10s infinite linear;
    width: 500px;
    height: 500px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`

const Logo = styled.img`
    width: 650px;
    height: 650px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-top: -45px;
    margin-left:-85px
`

export default Home