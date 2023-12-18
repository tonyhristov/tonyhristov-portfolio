import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import spawnDots from '../../constants/dotsBackground';

const Dots = () => {
    const canvasRef = useRef(null);
    const container = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        window.addEventListener('resize', () => {
            setWidth(container.current.parentElement.offsetWidth);
            setHeight(container.current.parentElement.offsetHeight);
        });

        spawnDots({ canvas, ctx, width, height });
    }, [width, height]);

    return (
        <Container ref={container}>
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
