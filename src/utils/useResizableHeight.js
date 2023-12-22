import { useLayoutEffect, useState } from 'react';

function useResizableHeight(container) {
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
        function updateSize() {
            setHeight(container?.current?.clientHeight);
        }

        window.addEventListener('resize', updateSize);

        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    });

    return height;
}

export default useResizableHeight;
