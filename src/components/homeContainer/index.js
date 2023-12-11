import React from 'react';
import styled from 'styled-components';

const HomeContainer = (props) => <Container>{props.children}</Container>;

const Container = styled.div`
    @media screen and (max-width: 780px) {
        width: 55%;
        margin: auto;
    }
`;

export default HomeContainer;
