import React, { useRef } from 'react';
import styled from 'styled-components';
import hue from '../../utils/hue';
import WorkContent from '../../components/workContent';
import workExperienceInfo from '../../constants/workExperience';
import TimeLine from '../../components/timeline';
import useResizableHeight from '../../utils/useResizableHeight';

const WorkExperience = () => {
    const { Evolution, SoftUni, OddStorm } = workExperienceInfo;

    const container = useRef(null);

    const height = useResizableHeight(container);

    return (
        <Container>
            <Title>Work Experience</Title>

            <TimelineContainer ref={container}>
                <TimeLine height={height} type={'work'} />
                <div>
                    <WorkContent
                        companyName={Evolution.companyName}
                        title={Evolution.title}
                        positionDescription={Evolution.positionDescription}
                        companyDescription={Evolution.companyDescription}
                        timePeriod={Evolution.timePeriod}
                    />
                    <WorkContent
                        companyName={OddStorm.companyName}
                        title={OddStorm.title}
                        positionDescription={OddStorm.positionDescription}
                        companyDescription={OddStorm.companyDescription}
                        timePeriod={OddStorm.timePeriod}
                        isLeft={false}
                    />
                    <WorkContent
                        companyName={SoftUni.companyName}
                        title={SoftUni.title}
                        positionDescription={SoftUni.positionDescription}
                        companyDescription={SoftUni.companyDescription}
                        timePeriod={SoftUni.timePeriod}
                    />
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

export default WorkExperience;
