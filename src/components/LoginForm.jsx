import { useForm } from '../hooks/useForm';
import { useLogin } from '../hooks/useLogin';

function LoginForm({ onClose, onSwitchToSignup }) {
  const { formData, handleChange, reset } = useForm({
    email: '',
    password: '',
  });

  const { login, loading } = useLogin({
    onSuccess: (result) => {
      setTimeout(() => {
        reset();
        onClose();
        console.log('User logged in:', result);
      }, 1500);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Welcome Back</h2>
      <p className="text-gray-500 mb-8">Sign in to your account</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all placeholder:text-gray-400"
            placeholder="your@email.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all placeholder:text-gray-400"
            placeholder="••••••••"
          />
        </div>

        {/* Forgot password link */}
        <div className="text-right">
          <button 
            type="button"
            className="text-sm text-primary hover:text-primary-dark hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-xl text-white font-semibold transition-all shadow-md ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary hover:bg-primary-dark shadow-primary/20 hover:shadow-primary/30'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="mt-6 text-center text-gray-500 text-sm">
        Don't have an account?{' '}
        <button
          onClick={() => {
            onClose();
            if (onSwitchToSignup) onSwitchToSignup();
          }}
          className="text-primary hover:text-primary-dark hover:underline font-medium transition-colors"
          type="button"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

export default LoginForm;