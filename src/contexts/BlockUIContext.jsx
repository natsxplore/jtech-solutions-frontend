import { createContext, useContext, useState, useCallback } from 'react';
import BlockUI from '../components/BlockUI';

const BlockUIContext = createContext(null);

export const BlockUIProvider = ({ children }) => {
    const [blocking, setBlocking] = useState(false);
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

    const value = {
        blocking,
        message,
        show,
        hide,
        setMessage,
    };

    return (
        <BlockUIContext.Provider value={value}>
        {children}
        <BlockUI blocking={blocking} message={message} fullScreen={true} />
        </BlockUIContext.Provider>
    );
};

export const useBlockUIContext = () => {
    const context = useContext(BlockUIContext);
    return context;
};

export default BlockUIContext;
