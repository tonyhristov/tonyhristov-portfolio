import React from 'react';
import getLinks from '../../utils/navigation';
import styled from 'styled-components';
import NavBarLink from '../navLink';

const Header = () => {
    const links = getLinks;

    return (
        <Nav>
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

export default Header;
