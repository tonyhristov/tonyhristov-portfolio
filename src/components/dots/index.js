import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import spawnDots from '../../constants/dotsBackground';

const Dots = (params) => {
    const canvasRef = useRef(null);

    const [width, height] = params.size;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        spawnDots({ canvas, ctx, width, height });
    }, [width, height]);

    return (
        <Container>
            <Canvas id='stage' ref={canvasRef}></Canvas>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
`;

const Canvas = styled.canvas`
    width: 100%;
    object-fit: contain;
`;

export default Dots;
