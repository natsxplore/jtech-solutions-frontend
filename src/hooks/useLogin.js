import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { showSuccess, showError } from '../utils/notifications';
import { formatError } from '../utils/errorHelpers';
import { useBlockUIContext } from '../contexts/BlockUIContext';

export const useLogin = ({ onSuccess, onError } = {}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const blockUI = useBlockUIContext();

  const login = async (email, password) => {
    setLoading(true);
    if (blockUI) blockUI.show('Logging in...');

    try {
      const result = await authService.login(email, password);

      const welcomeName = result?.data?.user?.name || result?.data?.user?.email || 'User';
      const successMessage = `Login successful! Welcome, ${welcomeName}!`;

      showSuccess('Login Successful', successMessage);

      if (onSuccess) {
        onSuccess(result);
      }

      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);

      return result;
    } catch (err) {
      const errorMessage = formatError(err, 'Login failed. Please check your credentials.');
      showError('Login Failed', errorMessage);

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
    login,
    loading,
  };
};

export default useLogin;