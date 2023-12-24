import { useLayoutEffect, useState } from 'react';

function useWindowSize(container) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
        function updateSize() {
            setWidth(container.current.clientWidth);
            if (container.current.parentElement.offsetHeight > window.innerWidth) {
                setHeight(container.current.clientHeight);
            } else {
                setHeight(window.innerHeight);
            }
        }

        window.addEventListener('resize', updateSize);

        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    });

    return [width, height];
}

export default useWindowSize;
