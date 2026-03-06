export const formatError = (err, defaultMessage = 'An error occurred. Please try again.') => {
    if (err.response?.status === 500 || err.status === 500) {
        return 'Internal Server Error';
    }

    if (err.errors) {
        const errorMessages = Object.values(err.errors)
        .flat()
        .map(msg => {
            const message = typeof msg === 'string' ? msg : String(msg);
            return `• ${message}`;
        })
        .join('\n');
        
        return errorMessages;
    }

    if (err.message) {
        return typeof err.message === 'string' ? err.message : String(err.message);
    }

    return defaultMessage;
};

export const getErrorMessage = (err, defaultMessage = 'An error occurred. Please try again.') => {
    if (err.response?.status === 500 || err.status === 500) {
        return 'Internal Server Error';
    }

    if (err.errors) {
        return Object.values(err.errors)
            .flat()
            .map(msg => typeof msg === 'string' ? msg : String(msg))
            .join(', ');
    }

    if (err.message) {
        return typeof err.message === 'string' ? err.message : String(err.message);
    }

    return defaultMessage;
};

export default {
    formatError,
    getErrorMessage,
};
