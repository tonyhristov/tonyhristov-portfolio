import React from 'react';
import styled from 'styled-components';

const EducationContent = (props) => {
    const { name, degree, degreeDescription, timePeriod, isLeft = true } = props;

    return (
        <Container isLeft={isLeft}>
            <Content isLeft={isLeft}>
                <PrimaryText>{name}</PrimaryText>
                <Degree>{degree}</Degree>
                <DegreeDescription>{degreeDescription}</DegreeDescription>
                <PrimaryText>{timePeriod}</PrimaryText>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 10px 40px;
    position: relative;
    width: 50%;
    left: ${(props) => (props.isLeft ? '0' : '50%')};

    @media screen and (max-width: 600px) {
        padding-left: 40px;
        padding-right: 0px;
        width: auto;
        position: static;
    }
`;

const Content = styled.div`
    padding: 20px 30px;
    border-bottom: 4px solid cyan;
    position: relative;
    border-radius: 6px;
    border-top: 1px solid gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;

    text-align: ${(props) => (props.isLeft ? 'right' : 'left')};

    @media screen and (max-width: 900px) {
        text-align: left;
    }
`;

const PrimaryText = styled.h3`
    color: cyan;
    margin-bottom: 0;
`;

const Degree = styled.div`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
`;

const DegreeDescription = styled.div`
    color: cyan;
    margin-bottom: 1rem;
`;

export default EducationContent;
