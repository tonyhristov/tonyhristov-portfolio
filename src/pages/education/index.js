import React, { useRef } from 'react';
import styled from 'styled-components';
import hue from '../../utils/hue';
import EducationContent from '../../components/educationContent';
import educationInfo from '../../constants/education';
import TimeLine from '../../components/timeline';
import useResizableHeight from '../../utils/useResizableHeight';

const Education = () => {
    const { Lomonosov, SoftUni, UNWE } = educationInfo;

    const container = useRef(null);

    const height = useResizableHeight(container);

    return (
        <Container>
            <Title>Education</Title>

            <TimelineContainer ref={container}>
                <TimeLine height={height} type={'education'} />
                <div>
                    <EducationContent name={Lomonosov.name} degree={Lomonosov.degree} degreeDescription={Lomonosov.degreeDescription} timePeriod={Lomonosov.timePeriod} isLeft={false} />
                    <EducationContent name={SoftUni.name} degree={SoftUni.degree} degreeDescription={SoftUni.degreeDescription} timePeriod={SoftUni.timePeriod} />
                    <EducationContent name={UNWE.name} degree={UNWE.degree} degreeDescription={UNWE.degreeDescription} timePeriod={UNWE.timePeriod} isLeft={false} />
                </div>
            </TimelineContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const TimelineContainer = styled.div`
    position: relative;
    margin: 5%;

    @media screen and (max-width: 900px) {
        grid-gap: 20px;
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
