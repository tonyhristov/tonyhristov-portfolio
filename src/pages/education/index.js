import React from 'react';
import styled from 'styled-components';
import hue from '../../constants/hue';
import EducationContent from '../../components/educationContent';
import educationInfo from '../../utils/education';

const Education = () => {
    const { Lomonosov, SoftUni, UNWE } = educationInfo;

    return (
        <Container>
            <Title>Education</Title>

            <Timeline>
                <EducationContent name={Lomonosov.name} degree={Lomonosov.degree} timePeriod={Lomonosov.timePeriod} />
                <EducationContent name={SoftUni.name} degree={SoftUni.degree} timePeriod={SoftUni.timePeriod} isLeft={false} />
                <EducationContent name={UNWE.name} degree={UNWE.degree} timePeriod={UNWE.timePeriod} />
            </Timeline>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const Timeline = styled.div`
    position: relative;
    /* max-width: 1200px; */
    margin: 5%;

    &:after {
        content: '';
        position: absolute;
        width: 7px;
        background-color: cyan;
        top: 0;
        bottom: 0;
        left: 50%;
    }

    @media screen and (max-width: 600px) {
        &:after {
            left: 0px;
        }
    }
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

export default Education;
