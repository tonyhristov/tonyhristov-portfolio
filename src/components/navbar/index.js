import { useState } from 'react';
import styles from './styles.module.css';
import styled from 'styled-components';
import logo from '../../images/Logo-transparent.png';
import hue from '../../constants/hue';
// import NavBarLink from '../navLink';

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
        <Nav className={`${styles.navbar}`}>
            <GradientLogoFiller key='background-logo'>
                <Logo src={logo} />;
            </GradientLogoFiller>

            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                <AnimatedGradientText onClick={removeActive}>
                    <NavLink href='#home' className={`${styles.navLink}`}>
                        Home
                    </NavLink>
                </AnimatedGradientText>
                <AnimatedGradientText onClick={removeActive}>
                    <NavLink href='#about' className={`${styles.navLink}`}>
                        About
                    </NavLink>
                </AnimatedGradientText>
            </ul>

            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                <Bar />
                <Bar />
                <Bar />
            </div>
        </Nav>
    );
}

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

// const navMenu = styled.ul`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 60px;
// `;

// const Hamburger = styled.div`
//     display: block;
//     cursor: pointer;
// `;

const Bar = styled.span`
    @media screen and (max-width: 780px) {
        background-color: white;
        width: 20px;
        height: 3px;
        display: block;
        margin: 5px;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
    }
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

const NavLink = styled.a`
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
    }
`;
const AnimatedGradientText = styled.h1`
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 2vh;
    margin: 16px 0;
`;

export default Navbar;
