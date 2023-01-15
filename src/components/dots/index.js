import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import spawnDots from '../../constants/dotsBackground';

const Dots = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        spawnDots(canvas, ctx);
    }, []);

    return (
        <Container>
            <canvas id='stage' ref={canvasRef}></canvas>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
`;

export default Dots;
