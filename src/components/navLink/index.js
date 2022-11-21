import React from 'react'
import styled from "styled-components"
import hue from "../../constants/hue";

const NavBarLink = ({props}) => (
    <NavLink href={props.link}>
        <AnimatedGradientText>{props.title}</AnimatedGradientText>
    </NavLink>
)

const NavLink = styled.a`
   padding: 14px 16px;
   text-decoration: none;
  
   &:hover {
      
    }
`
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-size: 1rem;
`

export default NavBarLink
