import { React } from 'react';
import './App.css';
import styled from 'styled-components';
import hue from './constants/hue';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <CompanyText>Antonio Hristov | Personal Portfolio</CompanyText>
                <AnimatedGradientText>In Development</AnimatedGradientText>
                <BlueText tagName={'h3'}>Stay tuned :)</BlueText>
            </header>
        </div>
    );
}

const AnimatedGradientText = styled.h2`
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 10s infinite linear;
    font-size: 7vh;
    text-align: center;
`;
const CompanyText = styled.h1`
    color: #02c6ff;
`;
const BlueText = styled.h3`
    color: #02c6ff;
`;

export default App;
