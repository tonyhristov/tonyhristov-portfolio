import React from 'react';
import styled from 'styled-components';

const WorkContent = (props) => {
    const { companyName, title, positionDescription, companyDescription, timePeriod, isLeft = true } = props;

    return (
        <Container isLeft={isLeft}>
            <Content isLeft={isLeft}>
                <PrimaryText>{companyName}</PrimaryText>
                <Title>{title}</Title>
                <CompanyDescription>{companyDescription}</CompanyDescription>
                <PositionDescription>{positionDescription}</PositionDescription>
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

const Title = styled.div`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
`;

const CompanyDescription = styled.div`
    color: cyan;
    margin-bottom: 1rem;
`;

const PositionDescription = styled.div`
    color: white;
    margin-bottom: 1rem;
`;

export default WorkContent;
