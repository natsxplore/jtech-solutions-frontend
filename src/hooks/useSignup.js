import { useState } from 'react';
import { authService } from '../services/authService';
import { showSuccess, showError } from '../utils/notifications';
import { formatError } from '../utils/errorHelpers';
import { useBlockUIContext } from '../contexts/BlockUIContext';

export const useSignup = ({ onSuccess, onError } = {}) => {
    const [loading, setLoading] = useState(false);
    const blockUI = useBlockUIContext();

    const signup = async (userData) => {
        setLoading(true);
        if (blockUI) blockUI.show('Processing your registration...');

        try {
            const planId = userData.plan_id ? (userData.plan_id.toString().trim() ? parseInt(userData.plan_id, 10) : null) : null;
            
            const registerData = {
                business_name: String(userData.business_name || '').trim(),
                owner_name: String(userData.owner_name || '').trim(),
                email: String(userData.email || '').trim(),
                mobile: String(userData.mobile || '').trim(),
                password: String(userData.password || ''),
                password_confirmation: String(userData.password_confirmation || ''),
                plan_id: planId,
                terms_accepted: Boolean(userData.terms_accepted),
                privacy_accepted: Boolean(userData.privacy_accepted),
            };

            const result = await authService.register(registerData);

            const welcomeName = result.user?.owner_name || result.user?.business_name || userData.owner_name || userData.business_name || 'User';
            const successMessage = `Account created! Welcome, ${welcomeName}!`;

            showSuccess('Signup Successful', successMessage);

            if (onSuccess) {
                onSuccess(result);
            }

            return result;
        } catch (err) {
            const errorMessage = formatError(err, 'Registration failed. Please try again.');
            showError('Signup Failed', errorMessage);

            if (onError) {
                onError(err);
            }

            return null;
        } finally {
            setLoading(false);
            if (blockUI) blockUI.hide();
        }
    };

    return {
        signup,
        loading,
    };
};

export default useSignup;