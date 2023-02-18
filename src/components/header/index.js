import React from 'react';
import getLinks from '../../utils/navigation';
import styled from 'styled-components';
import NavBarLink from '../navLink';
import logo from '../../images/Logo-transparent.png';
import hue from '../../constants/hue';

const Header = () => {
    const links = getLinks;

    return (
        <Nav>
            <GradientLogoFiller key='background-logo'>
                <Logo src={logo} />;
            </GradientLogoFiller>
            {links.map((link) => (
                <NavBarLink props={link} key={link.title} />
            ))}
        </Nav>
    );
};

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
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

export default Header;
