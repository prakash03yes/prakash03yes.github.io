import { useAppDispatch } from '@/store/hooks';
import { setScreenSize } from '@/store/reducers/appReducer';
import { useEffect } from 'react';

function useScreenWidth() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.log(window.innerWidth);
                dispatch(setScreenSize({
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight
                }));
            }, 250);
        };


        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeout);
        };
    }, [dispatch]);
}

export default useScreenWidth;
