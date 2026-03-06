/**
 * Pricing Section Component - Enterprise pricing tiers
 * Section na nagpapakita ng pricing plans mula sa backend API
 * 
 * ============================================================================
 * PAANO GAMITIN (HOW TO USE):
 * ============================================================================
 * 
 * 1. I-import ang component:
 *    import PricingSection from './components/landing/PricingSection';
 * 
 * 2. Gamitin sa parent component:
 *    <PricingSection onSignupClick={handleSignupClick} />
 * 
 * 3. Props:
 *    - onSignupClick: Function na tatawagin kapag nag-click ang user sa "Get Started" button
 *                      Example: onSignupClick={() => setShowSignup(true)}
 * 
 * ============================================================================
 * PAANO SIYA NAG-WOWORK (HOW IT WORKS):
 * ============================================================================
 * 
 * STEP 1: Component Mount
 *    - Kapag na-mount ang component, automatic na nag-trigger ang useEffect
 *    - Nagse-set ng loading state sa true
 * 
 * STEP 2: Data Fetching
 *    - Tumatawag sa planService.getAll() para kumuha ng plans mula sa backend
 *    - Backend endpoint: GET /api/v1/plans
 * 
 * STEP 3: Data Processing
 *    - I-filter ang active plans lang (is_active !== false)
 *    - I-sort ang plans base sa price (ascending order)
 *    - I-store sa plans state
 * 
 * STEP 4: State Updates
 *    - Loading: true → false (pagkatapos ng fetch)
 *    - Plans: [] → [plan1, plan2, plan3] (pagkatapos ng successful fetch)
 *    - Error: null → error message (kung may error)
 * 
 * STEP 5: Rendering
 *    - Loading state → <PricingLoadingState />
 *    - Error state → <PricingErrorState error={error} />
 *    - Empty state → <PricingEmptyState />
 *    - Success state → Render ng plans using <PlanCard />
 * 
 * STEP 6: User Interaction
 *    - Kapag nag-click sa "Get Started" button
 *    - Tumatawag ang onSignupClick prop function
 *    - Usually nag-o-open ng signup modal
 * 
 * ============================================================================
 * DATA FLOW:
 * ============================================================================
 * 
 * Backend API (/api/v1/plans)
 *    ↓
 * planService.getAll()
 *    ↓
 * Response: { data: [...] } o [...]
 *    ↓
 * Filter active plans
 *    ↓
 * Sort by price
 *    ↓
 * setPlans(activePlans)
 *    ↓
 * Render <PlanCard /> for each plan
 * 
 * ============================================================================
 * PERFORMANCE NOTES - Mga importanteng notes para sa performance:
 * ============================================================================
 * 
 * KUNG KAILAN DAPAT GUMAMIT NG STATE:
 * 1. ✅ Gumamit ng state kapag kailangan i-update ang UI based sa user interaction
 * 2. ✅ Gumamit ng state para sa data na nagbabago at kailangan i-render ulit
 * 3. ✅ Gumamit ng state para sa loading, error, at success states
 * 4. ✅ Gumamit ng state para sa form inputs at user selections
 * 
 * KUNG KAILAN HINDI DAPAT GUMAMIT NG STATE:
 * 1. ❌ HINDI gumamit ng state para sa derived/computed values (gamitin ang useMemo o direct computation)
 * 2. ❌ HINDI gumamit ng state para sa static data o constants (gamitin ang regular variables)
 * 3. ❌ HINDI gumamit ng state para sa data na hindi nagbabago (gamitin ang props o context)
 * 4. ❌ HINDI gumamit ng state para sa expensive calculations (gamitin ang useMemo)
 * 
 * PERFORMANCE BEST PRACTICES:
 * 1. ✅ I-minimize ang number ng states - mas kaunti, mas mabilis
 * 2. ✅ I-group ang related states sa isang state object kung possible
 * 3. ✅ Gamitin ang functional updates (prev => new) para sa state updates
 * 4. ✅ Gamitin ang useMemo para sa expensive computations
 * 5. ✅ Gamitin ang useCallback para sa functions na ipinapasa sa child components
 * 6. ✅ I-avoid ang unnecessary re-renders - gamitin ang React.memo kung kailangan
 * 7. ✅ I-avoid ang state updates sa render phase - dapat sa event handlers o useEffect lang
 * 8. ✅ I-cleanup ang side effects sa useEffect cleanup function
 */

import { useState, useEffect } from 'react';
import { planService } from '../../services/planService';
import { isFeaturedPlan } from '../../utils/planHelpers';
import PlanCard from './PlanCard';
import { PricingLoadingState, PricingErrorState, PricingEmptyState } from './PricingSectionStates';

/**
 * PricingSection Component
 * 
 * @param {Function} onSignupClick - Function na tatawagin kapag nag-click sa "Get Started" button
 *                                   Example: () => setShowSignup(true)
 * 
 * @returns {JSX.Element} - Pricing section na may plans mula sa backend
 * 
 * USAGE EXAMPLE:
 * ```jsx
 * function App() {
 *   const [showSignup, setShowSignup] = useState(false);
 *   
 *   const handleSignupClick = () => {
 *     setShowSignup(true);
 *   };
 *   
 *   return (
 *     <PricingSection onSignupClick={handleSignupClick} />
 *   );
 * }
 * ```
 */
function PricingSection({ onSignupClick }) {
  // ========================================================================
  // STATE DECLARATION - Initial state values
  // ========================================================================
  // ✅ STATE USAGE - Dapat gamitin ang state para sa:
  // - Data na nagbabago at kailangan i-update ang UI (plans)
  // - Loading state na nagbabago (loading)
  // - Error state na nagbabago (error)
  // 
  // ❌ HINDI dapat gamitin ang state para sa:
  // - Static data o constants
  // - Derived values (gamitin ang useMemo o direct computation)
  // - Data na hindi nagbabago
  
  // plans: Array ng plan objects mula sa backend
  // Initial: [] (empty array)
  // Updated: Pagkatapos ng successful API call
  const [plans, setPlans] = useState([]); // ✅ State: Data na nagbabago mula sa API
  
  // loading: Boolean na nag-i-indicate kung naglo-load pa ang data
  // Initial: true (naglo-load agad kapag na-mount)
  // Updated: false pagkatapos ng API call (success o error)
  const [loading, setLoading] = useState(true); // ✅ State: Loading state na nagbabago
  
  // error: String na naglalaman ng error message kung may error
  // Initial: null (walang error)
  // Updated: Error message kapag may error sa API call
  const [error, setError] = useState(null); // ✅ State: Error state na nagbabago

  // ✅ useEffect - Dapat gamitin para sa:
  // - Side effects (API calls, subscriptions, DOM manipulation)
  // - Data fetching kapag na-mount ang component
  // - Cleanup operations (remove event listeners, cancel requests)
  //
  // ❌ HINDI dapat gamitin ang useEffect para sa:
  // - Derived state (gamitin ang useMemo)
  // - Event handlers (gamitin ang event handler functions)
  // - Synchronous operations (gawin lang directly sa render)
  //
  // PERFORMANCE TIPS:
  // - ✅ Empty dependency array [] = run once on mount (tama para sa data fetching)
  // - ✅ I-cleanup ang side effects sa return function
  // - ❌ HINDI maglagay ng dependencies na hindi kailangan (causes unnecessary re-runs)
  // - ❌ HINDI mag-update ng state na nasa dependency array (causes infinite loop)
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // ✅ State update: I-update ang loading state para ma-show ang loading UI
        setLoading(true);
        setError(null); // ✅ State update: I-clear ang previous error
        
        // ✅ API call: Dapat nasa useEffect, hindi sa render phase
        const response = await planService.getAll();
        
        // ❌ HINDI state: Derived/computed values - direct computation lang
        // I-handle ang different response formats
        const plansData = response.data || response || [];
        
        // ❌ HINDI state: Filtering at sorting - direct computation lang
        // I-filter lang ang active plans
        const activePlans = plansData.filter(plan => plan.is_active !== false);
        
        // I-sort base sa price (ascending) para sa proper order
        activePlans.sort((plan1, plan2) => plan1.plan_price - plan2.plan_price);
        
        // ✅ State update: I-update ang plans state para ma-render ang UI
        setPlans(activePlans);
      } catch (err) {
        console.error('Error fetching plans:', err);
        // ✅ State update: I-update ang error state para ma-show ang error UI
        setError('Failed to load pricing plans. Please try again later.');
      } finally {
        // ✅ State update: I-update ang loading state pagkatapos ng request
        setLoading(false);
      }
    };

    fetchPlans();
    
    // ✅ CLEANUP: Walang cleanup function dito kasi:
    // - Async function ang fetchPlans, hindi natin ma-cancel easily
    // - Pero sa planService, may request deduplication na
    // - Sa production, hindi naman double-invoke ang StrictMode
    // 
    // Kung kailangan ng cleanup (e.g., cancel request):
    // return () => {
    //   // Cancel request logic here
    // };
  }, []); // ✅ Empty array = run once on mount (tama para sa initial data fetch)

  // ✅ EARLY RETURNS - Performance best practice:
  // - I-return agad ang loading/error/empty states
  // - I-avoid ang unnecessary computations kung hindi kailangan
  // - Mas mabilis ang rendering kung maaga ang return
  //
  // ❌ HINDI dapat:
  // - Mag-compute ng expensive operations bago mag-early return
  // - Mag-render ng complex components kung simple lang ang state
  
  // Loading state - I-return agad para hindi mag-compute ng ibang values
  if (loading) {
    return <PricingLoadingState />;
  }

  // Error state - I-return agad para hindi mag-compute ng ibang values
  if (error) {
    return <PricingErrorState error={error} />;
  }

  // Empty state - I-return agad para hindi mag-render ng empty grid
  if (plans.length === 0) {
    return <PricingEmptyState />;
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark-light to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that scales with your business.
          </p>
        </div>

        {/* ✅ PERFORMANCE: Dynamic grid classes - computed sa render (okay lang kasi simple) */}
        {/* ❌ HINDI dapat: I-store sa state ang grid classes (derived value lang) */}
        {/* ✅ PERFORMANCE: map() - efficient para sa lists, pero dapat may key prop */}
        {/* ❌ HINDI dapat: Mag-create ng new functions sa map (causes re-renders) */}
        <div className={`grid ${plans.length === 1 ? 'md:grid-cols-1' : plans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 max-w-6xl mx-auto`}>
          {plans.map((plan, index) => {
            // ✅ PERFORMANCE: I-compute ang featured status sa render (simple computation)
            // ❌ HINDI dapat: I-store sa state ang featured status (derived value lang)
            // ✅ PERFORMANCE: I-compute once per render, hindi sa separate state
            const featured = isFeaturedPlan(plan, index);
            
            return (
              <PlanCard
                key={plan.id || plan.slug || index} // ✅ KEY: Dapat unique para sa efficient re-rendering
                plan={plan}
                featured={featured} // ✅ PROP: I-pass ang computed value, hindi function
                onSignupClick={onSignupClick} // ✅ PROP: Same function reference (stable)
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
