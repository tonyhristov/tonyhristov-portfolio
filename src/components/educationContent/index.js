import React from 'react';
import styled from 'styled-components';

const EducationContent = (props) => {
    const { name, degree, timePeriod, isLeft = true } = props;

    return (
        <Container isLeft={isLeft}>
            <Content isLeft={isLeft}>
                <PrimaryText>{name}</PrimaryText>
                <Degree>{degree}</Degree>
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

    &:after {
        content: '';
        position: absolute;
        width: 19px;
        height: 19px;

        left: ${(props) => (props.isLeft ? '' : '-10px')};
        right: ${(props) => (props.isLeft ? '-3.27%' : '')};

        background-color: white;
        border: 4px solid cyan;
        top: -3px;
        border-radius: 50%;
        z-index: 1;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        padding-left: 20px;
        padding-right: 0px;

        left: ${(props) => (props.isLeft ? '' : '0%')};

        &:before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
        }

        &:after {
            left: -10px;
        }
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

    @media screen and (max-width: 600px) {
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

export default EducationContent;
