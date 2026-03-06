export const formatPrice = (price) => {
  if (price === 0 || price === null || price === undefined) {
    return 'Free';
  }
  return `₱${parseFloat(price).toLocaleString('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}`;
};

export const isFeaturedPlan = (plan, index) => {
  return index === 1 || plan.plan_name?.toLowerCase() === 'enterprise';
};

export const isFreePlan = (price) => {
  return price === 0 || price === null || price === undefined;
};

export const formatBillingPeriod = (period) => {
  if (!period) return 'month';
  
  if (period.endsWith('ly')) {
    return period.slice(0, -2);
  }
  
  return period;
};
