import React, { useRef } from 'react';
import styled from 'styled-components';
import logo from '../../images/home.png';
import hue from '../../constants/hue';
import { motion } from 'framer-motion';
import HomeContainer from '../homeContainer';

const HomeLogo = () => {
    const constraintsRef = useRef(null);

    return (
        <Container>
            <DragContainer ref={constraintsRef} key='drag-container'>
                <DragItem drag dragConstraints={constraintsRef} key='drag-item'>
                    <BackgroundLogo key='background-logo'>
                        <Logo />;
                    </BackgroundLogo>
                </DragItem>
            </DragContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 500px;
    height: 500px;

    @media screen and (max-width: 900px) {
        width: 75%;
        margin-top: 27vw;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }
`;

const DragContainer = styled(motion.div)`
    width: 500px;
    height: 500px;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    background: rgba(255, 255, 255);
    border-radius: 50%;

    @media screen and (max-width: 900px) {
        width: 75vw;
        height: 75vw;
    }
`;

const DragItem = styled(motion.div)`
    width: 450px;
    height: 450px;
    border-radius: inherit;

    @media screen and (max-width: 900px) {
        width: 70vw;
        height: 70vw;
    }
`;

const BackgroundLogo = styled.div`
    background-color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-animation: ${hue} 10s infinite linear;

    width: 450px;
    height: 450px;

    position: relative;
    overflow: hidden;
    border-radius: 50%;

    @media screen and (max-width: 900px) {
        width: 70vw;
        height: 70vw;
    }
`;

const Logo = styled.div`
    scale: 1;
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
