import { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { useSignup } from '../hooks/useSignup';
import { planService } from '../services/planService';

function SignupForm({ onClose, onSwitchToLogin, selectedPlanId = null }) {
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);

  const { formData, handleChange, reset, setFieldValue } = useForm({
    business_name: '',
    owner_name: '',
    email: '',
    mobile: '',
    password: '',
    password_confirmation: '',
    plan_id: selectedPlanId || '',
    terms_accepted: false,
    privacy_accepted: false,
  });

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await planService.getAll();
        const plansData = response.data || response || [];
        const activePlans = plansData.filter(plan => plan.is_active !== false);
        activePlans.sort((a, b) => a.plan_price - b.plan_price);
        setPlans(activePlans);
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoadingPlans(false);
      }
    };

    fetchPlans();
  }, []);

  // I-set ang selectedPlanId kung mayroon at wala pa sa formData
  useEffect(() => {
    if (selectedPlanId && !formData.plan_id) {
      setFieldValue('plan_id', selectedPlanId.toString());
    }
  }, [selectedPlanId, formData.plan_id, setFieldValue]);

  const { signup, loading } = useSignup({
    onSuccess: (result) => {
      setTimeout(() => {
        reset(); // I-reset ang form pagkatapos ng successful signup
        onClose();
        console.log('User registered:', result);
      }, 2000);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Create Account</h2>
      <p className="text-gray-500 mb-8">Sign up to get started</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all placeholder:text-gray-400"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Owner Name</label>
          <input
            type="text"
            name="owner_name"
            value={formData.owner_name}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all placeholder:text-gray-400"
            placeholder="Juan Dela Cruz"
          />
        </div>

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
          <label className="text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all placeholder:text-gray-400"
            placeholder="09171234567"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all placeholder:text-gray-400"
            placeholder="••••••••"
          />
          <small className="text-xs text-gray-500">Must be at least 8 characters</small>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all placeholder:text-gray-400"
            placeholder="••••••••"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Select Plan</label>
          <select
            name="plan_id"
            value={formData.plan_id}
            onChange={handleChange}
            disabled={loadingPlans}
            className="p-3 border border-gray-200 rounded-xl text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
          >
            <option value="" className="bg-gray-50 text-gray-900">{loadingPlans ? 'Loading plans...' : 'Select a plan'}</option>
            {plans.map((plan) => (
              <option key={plan.id} value={plan.id} className="bg-gray-50 text-gray-900">
                {plan.plan_name} {plan.plan_price > 0 ? `(₱${plan.plan_price.toLocaleString()})` : '(Free)'}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="terms_accepted"
              checked={formData.terms_accepted}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-primary border-gray-200 rounded focus:ring-primary/50 bg-gray-50"
            />
            <span className="text-sm text-gray-700">
              I accept the <a href="#" className="text-primary hover:text-primary-light hover:underline">Terms and Conditions</a> <span className="text-red-400">*</span>
            </span>
          </label>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="privacy_accepted"
              checked={formData.privacy_accepted}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 text-primary border-white/30 rounded focus:ring-primary/50 bg-white/5 backdrop-blur-sm"
            />
            <span className="text-sm text-gray-700">
              I accept the <a href="#" className="text-primary hover:text-primary-light hover:underline">Privacy Policy</a> <span className="text-red-400">*</span>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading || !formData.terms_accepted || !formData.privacy_accepted}
          className={`w-full p-3 rounded-xl text-black font-semibold transition-all shadow-lg ${
            loading || !formData.terms_accepted || !formData.privacy_accepted
              ? 'bg-gray-500/50 cursor-not-allowed backdrop-blur-sm border border-gray-500/30'
              : 'bg-primary hover:bg-primary-light shadow-primary/30 hover:shadow-primary/40 border border-primary/30 backdrop-blur-sm'
          }`}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-6 text-center text-gray-500 text-sm">
        Already have an account?{' '}
        <button
          onClick={() => {
            onClose();
            if (onSwitchToLogin) onSwitchToLogin();
          }}
          className="text-primary hover:text-primary-light hover:underline font-medium transition-colors drop-shadow-sm"
          type="button"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default SignupForm;
