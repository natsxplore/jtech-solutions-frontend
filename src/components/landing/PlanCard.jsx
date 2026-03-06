import { formatPrice, isFreePlan, formatBillingPeriod } from '../../utils/planHelpers';

function PlanCard({ plan, featured = false, onSignupClick }) {
  const isFree = isFreePlan(plan.plan_price);

  return (
    <div
      className={`${
        featured
          ? 'bg-gradient-to-br from-primary via-primary-light to-primary-dark text-black rounded-xl p-8 border-2 border-primary shadow-2xl shadow-primary/30 transform scale-105 relative'
          : 'bg-dark-lighter border border-gray-800/50 rounded-xl p-8 hover:border-gray-700 transition-all'
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
          MOST POPULAR
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan.plan_name || 'Plan'}</h3>
        {plan.plan_desc && (
          <p className={`text-sm mb-3 ${featured ? 'opacity-80' : 'text-gray-400'}`}>
            {plan.plan_desc}
          </p>
        )}
        <div className="text-4xl font-bold mb-1">
          {isFree ? 'Free' : formatPrice(plan.plan_price)}
        </div>
        {!isFree && (
          <div className={`text-sm ${featured ? 'opacity-80' : 'text-gray-400'}`}>
            /{formatBillingPeriod(plan.billing_period)}
          </div>
        )}
        {plan.trial_days > 0 && (
          <div className={`text-xs mt-1 ${featured ? 'opacity-70' : 'text-gray-500'}`}>
            {plan.trial_days} days free trial
          </div>
        )}
      </div>

      {/* Features List */}
      {plan.features && Array.isArray(plan.features) && plan.features.length > 0 && (
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <span className={featured ? 'text-black mr-3 mt-1 font-bold' : 'text-primary mr-3 mt-1'}>
                ✓
              </span>
              <span className={featured ? 'font-medium' : 'text-gray-300'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      <button
        onClick={() => onSignupClick?.(plan.id)}
        className={`w-full px-6 py-3 font-semibold rounded-lg transition-all ${
          featured
            ? 'bg-black text-white hover:bg-gray-800 shadow-lg'
            : 'border-2 border-gray-700 text-white hover:border-primary hover:text-primary'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default PlanCard;
