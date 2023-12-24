import React, { useRef } from 'react';
import styled from 'styled-components';
import hue from '../../utils/hue';
import about from '../../images/about.jpg';
import Dots from '../../components/dots';
import useWindowSize from '../../utils/useWindowSize';

const About = () => {
    const container = useRef(null);

    const size = useWindowSize(container);

    return (
        <Container ref={container}>
            <Dots size={size} />

            <Title>About Me</Title>
            <Summary>
                HI! My name is Antonio, but most of the people call me Tony, you can do it as well! Let me tell you my story :)
                <br />
            </Summary>
            <InnerWrapper>
                <ImageInfo>
                    My IT journey began in 2018 when I decided to enroll to study Software Engineering at Software University, also known as SoftUni. From SoftUni, I graduated as a full-stack web
                    developer with PHP and JavaScript.
                    <br />
                    <br />
                    Currently, I am working as a Front-end Game Developer for Evolution. Evolution is a leading B2B solution provider for casino operators offering a live casino, live game shows,
                    slots, and more.
                </ImageInfo>
                <ImageContainer>
                    <ImageWrapper>
                        <Image src={about} alt='about me ' />
                        <Shadow></Shadow>
                    </ImageWrapper>
                </ImageContainer>
            </InnerWrapper>
            <InnerWrapper>
                <Info>
                    My profession is also my hobby. But when I am not coding, I am driving or taking pictures. And yes, my other hobbies are photography and cars. I love to say that I am a passionate
                    software engineer, photography lover, and petrolhead. Fully dedicated to all roles
                </Info>
            </InnerWrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const ImageContainer = styled.div`
    display: inline-block;
    width: 50%;
    padding-left: 20px;
    position: relative;

    @media screen and (max-width: 900px) {
        padding-left: 0;
        width: 100%;
        margin-top: 20px;
    }
`;

const InnerWrapper = styled.div`
    max-width: 1000px;
    margin: 0% auto 0%;
`;

const ImageWrapper = styled.div`
    text-align: center;
    position: relative;
`;

const Title = styled.h1`
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 7vh;
    text-align: center;
`;

const Summary = styled.p`
    text-align: center;
    color: white;
    max-width: 1000px;
    line-height: 28px;
    font-size: 21px;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
        padding-right: 0;
        padding-top: 30px;
        width: 90%;
    }
`;

const ImageInfo = styled.div`
    color: white;
    font-size: 21px;
    line-height: 28px;
    vertical-align: top;
    text-align: center;

    display: inline-block;
    width: 47%;
    padding-top: 15vh;

    @media screen and (max-width: 900px) {
        padding-right: 0;
        padding-top: 30px;
        width: 90%;
        margin: 0px auto;
        display: block;
    }
`;

const Info = styled.div`
    color: white;
    font-size: 21px;
    line-height: 28px;
    vertical-align: top;
    text-align: center;

    @media screen and (max-width: 900px) {
        padding-right: 0;
        padding-top: 30px;
        width: 90%;
        margin: 0% auto 10%;
    }
`;

const Image = styled.img`
    width: 100%;
    border-radius: 5px;
    opacity: 0.9;
    max-width: 600px;
    scale: 0.9;
`;

const Shadow = styled.div`
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    color: inset 0px 0px 20px 5px #003365;
`;

export default About;
