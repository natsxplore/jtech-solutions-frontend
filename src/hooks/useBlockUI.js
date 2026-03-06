import { useState, useCallback } from 'react';

export const useBlockUI = (initialState = false) => {
    const [blocking, setBlocking] = useState(initialState);
    const [message, setMessage] = useState('Please wait...');

    const show = useCallback((customMessage = 'Please wait...') => {
        setMessage(customMessage);
        setBlocking(true);
    }, []);

    const hide = useCallback(() => {
        setBlocking(false);
        setTimeout(() => {
            setMessage('Please wait...');
        }, 300);
    }, []);

    const toggle = useCallback((customMessage = 'Please wait...') => {
        setBlocking(prev => {
        if (!prev) {
            setMessage(customMessage);
        }
        return !prev;
        });
    }, []);

    return {
        blocking,
        message,
        show,
        hide,
        toggle,
        setMessage,
    };
};

export default useBlockUI;
