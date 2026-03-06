/**
 * Loading State Component - Nagpapakita habang naglo-load ang plans
 */
export function PricingLoadingState() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark-light to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Pricing Plans</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that scales with your business. All plans include enterprise security and support.
          </p>
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-400">Loading plans...</div>
        </div>
      </div>
    </section>
  );
}

/**
 * Error State Component - Nagpapakita kapag may error sa pag-fetch ng plans
 * @param {string} error - Error message na ipapakita
 */
export function PricingErrorState({ error }) {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark-light to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Pricing Plans</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that scales with your business. All plans include enterprise security and support.
          </p>
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="text-red-400 bg-red-900/20 border border-red-800 rounded-lg p-4">
            {error || 'Failed to load pricing plans. Please try again later.'}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Empty State Component - Nagpapakita kapag walang plans available
 */
export function PricingEmptyState() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark-light to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Pricing Plans</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that scales with your business. All plans include enterprise security and support.
          </p>
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-400">No pricing plans available at the moment.</div>
        </div>
      </div>
    </section>
  );
}
