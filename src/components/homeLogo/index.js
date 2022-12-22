import React, { useRef } from 'react';
import styled from 'styled-components';
import logo from '../../images/home.png';
import hue from '../../constants/hue';
import { motion } from 'framer-motion';

const HomeLogo = () => {
    const constraintsRef = useRef(null);
    return (
        <DragContainer ref={constraintsRef} key='drag-container'>
            <DragItem drag dragConstraints={constraintsRef} key='drag-item'>
                <BackgroundLogo key='background-logo'>
                    <Logo />;
                </BackgroundLogo>
            </DragItem>
        </DragContainer>
    );
};

const DragContainer = styled(motion.div)`
    width: 55vh;
    height: 55vh;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    background: rgba(255, 255, 255);
    border-radius: 50%;
`;

const DragItem = styled(motion.div)`
    width: 50vh;
    height: 50vh;
    border-radius: inherit;
`;

const BackgroundLogo = styled.div`
    background-color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-animation: ${hue} 10s infinite linear;
    width: 50vh;
    height: 50vh;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`;

const Logo = styled.div`
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 140%;
    position: relative;
    overflow: hidden;
    height: 108%;
    width: 100%;
`;

export default HomeLogo;
