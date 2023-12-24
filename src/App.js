import { React } from 'react';
import './App.css';
import styled from 'styled-components';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = (props) => (
    <AppContainer>
        {props.children}
        <SpeedInsights />
    </AppContainer>
);

const AppContainer = styled.div`
    background-color: #171717;
`;

export default App;
