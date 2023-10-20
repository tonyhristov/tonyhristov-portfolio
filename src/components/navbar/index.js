import { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import logo from '../../images/Logo-transparent.png';
import hue from '../../constants/hue';

function Navbar() {
    // adding the states
    const [isActive, setIsActive] = useState(false);

    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false);
    };

    return (
        <Nav>
            <GlobalStyle />
            <GradientLogoFiller key='background-logo'>
                <Logo src={logo} />;
            </GradientLogoFiller>

            <NavMenu opened={isActive}>
                <AnimatedGradientText onClick={removeActive}>
                    <NavLink href='#home'>Home</NavLink>
                </AnimatedGradientText>
                <AnimatedGradientText onClick={removeActive}>
                    <NavLink href='#about'>About</NavLink>
                </AnimatedGradientText>
            </NavMenu>

            <Hamburger opened={isActive} onClick={toggleActiveClass}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </Hamburger>
        </Nav>
    );
}

const GlobalStyle = createGlobalStyle`
   * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Nav = styled.nav`
    padding: 10px 20px;
    display: flex;
    /* justify-content: space-between; */
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
    min-height: 70px;
    background-color: #000000;
`;

const GradientLogoFiller = styled.div`
    background-color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-animation: ${hue} 10s infinite linear;
    width: 20vh;
    height: 5vh;
    position: relative;
    overflow: hidden;
`;

const Logo = styled.img`
    width: 20vh;
    height: 5vh;
    object-fit: fill;
`;

const AnimatedGradientText = styled.li`
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 2vh;
    margin: 16px 0;
`;

const NavLink = styled.a`
    text-decoration: none;
    font-size: 18px;
`;

const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    list-style: none;

    @media screen and (max-width: 780px) {
        position: absolute;
        flex-direction: column;
        gap: 0;
        top: 70px;
        left: ${(props) => (props.opened ? '0' : '-100%')};
        text-align: start;
        width: 100%;
        transition: 0.7s ease-in-out;
        background-color: #000000;
        padding: 10px;
    }
`;

const Bar = styled.span`
    @media screen and (max-width: 780px) {
        background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
        width: 20px;
        height: 3px;
        display: block;
        margin: 5px;
        -webkit-transition: 0.3s ease-in-out;
        -webkit-text-fill-color: transparent;
        -webkit-animation: ${hue} 10s infinite linear;
        transition: 0.3s ease-in-out;
    }
`;

const Hamburger = styled.div`
    @media screen and (max-width: 780px) {
        display: block;
        cursor: pointer;

        ${Bar}:nth-child(1) {
            transform: ${(props) => (props.opened ? 'translateY(8px) rotate(45deg)' : '')};
        }
        ${Bar}:nth-child(2) {
            opacity: ${(props) => (props.opened ? 0 : 100)};
        }
        ${Bar}:nth-child(3) {
            transform: ${(props) => (props.opened ? 'translateY(-8px) rotate(-45deg)' : '')};
        }
    }
`;

export default Navbar;
