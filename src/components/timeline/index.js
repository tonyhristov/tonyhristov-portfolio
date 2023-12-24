import React from 'react';
import styled from 'styled-components';

const TimeLine = (params) => {
    const dotsHeightDividedByNumberOfDots = params.height / 3;
    const getPercentageEducation = window.innerWidth < 900 ? 1 : 23;
    const getPercentageWork = window.innerWidth < 900 ? 17 : 27;

    const getPercentageBasedOnType = params.type === 'work' ? getPercentageWork : getPercentageEducation;

    const percentageOfDotsHeight = (getPercentageBasedOnType / 100) * dotsHeightDividedByNumberOfDots;

    return (
        <Line heightSize={params.height}>
            <Dot pos={dotsHeightDividedByNumberOfDots - percentageOfDotsHeight} />
            <Dot pos={dotsHeightDividedByNumberOfDots} />
            <Dot pos={dotsHeightDividedByNumberOfDots - percentageOfDotsHeight} />
        </Line>
    );
};

const Line = styled.div`
    height: ${(props) => `${props.heightSize}px`};
    position: absolute;

    width: 7px;
    background-color: cyan;
    left: 50%;

    @media screen and (max-width: 900px) {
        left: 0px;
    }
`;

const Dot = styled.div`
    width: 3vh;
    height: 3vh;

    background-color: white;
    border: 4px solid cyan;
    border-radius: 50%;

    margin-bottom: ${(props) => `${props.pos}px`};
    margin-left: -1.1vh;

    @media screen and (max-width: 900px) {
    }
`;

export default TimeLine;
