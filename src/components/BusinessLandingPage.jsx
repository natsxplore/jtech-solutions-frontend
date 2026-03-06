/**
 * Business Landing Page - Enterprise-level landing page para sa Sales, Accounting, at Inventory Management System
 * Main component na nag-o-orchestrate ng lahat ng landing page sections
 */

import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './landing/Header';
import HeroSection from './landing/HeroSection';
import TrustedBySection from './landing/TrustedBySection';
import CoreModulesSection from './landing/CoreModulesSection';
import EnterpriseFeaturesSection from './landing/EnterpriseFeaturesSection';
import FeaturesSection from './landing/FeaturesSection';
import TestimonialsSection from './landing/TestimonialsSection';
import PricingSection from './landing/PricingSection';
import CTASection from './landing/CTASection';
import Footer from './landing/Footer';
import Modal from './landing/Modal';

function BusinessLandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const metrics = [
    { value: 'Easy', label: 'Setup in Minutes', icon: '⚡' },
    { value: 'Free', label: '7-Day Trial', icon: '🎁' },
    { value: 'All-in-One', label: 'Sales & Inventory', icon: '📦' },
    { value: '24/7', label: 'Email Support', icon: '📧' },
  ];

  const features = [
    { 
      title: 'Easy Sales Recording', 
      description: 'Record sales in seconds. Works on any device - desktop, tablet, or phone.',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      highlights: [
        'Quick checkout',
        'Multiple payment methods',
        'Receipt printing',
        'Refund handling'
      ]
    },
    { 
      title: 'Stock Alerts', 
      description: 'Never run out of best-sellers. Get notified when stock is running low.',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      highlights: [
        'Low stock warnings',
        'Product categories',
        'Bulk product import',
        'Stock history'
      ]
    },
    { 
      title: 'Customer Management', 
      description: 'Keep track of your customers and what they buy. Build better relationships.',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      highlights: [
        'Customer history',
        'Contact management',
        'Purchase tracking',
        'Birthday reminders'
      ]
    },
    { 
      title: 'Daily Reports', 
      description: 'See your sales, expenses, and profit at a glance. No complicated charts.',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      highlights: [
        'Daily sales summary',
        'Top products',
        'Expense tracking',
        'Profit calculation'
      ]
    },
    { 
      title: 'Works Offline', 
      description: 'Continue selling even without internet. Data syncs when you\'re back online.',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      highlights: [
        'Offline mode',
        'Auto-sync',
        'Mobile friendly',
        'No data loss'
      ]
    },
    { 
      title: 'Export to Excel', 
      description: 'Export your data anytime. Use it for accounting or further analysis.',
      icon: '📑',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      highlights: [
        'CSV export',
        'PDF reports',
        'Print receipts',
        'Backup data'
      ]
    },
  ];

  const coreModules = [
    { 
      title: 'Sales Management', 
      description: 'End-to-end sales pipeline management with CRM integration, order processing, and customer relationship tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    { 
      title: 'Sales Reports', 
      description: 'See what\'s selling, what\'s not, and how much you\'re making.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
    },
    { 
      title: 'Inventory Management', 
      description: 'Never run out of stock. Get alerts when items are running low.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
    }
  ];

  const testimonials = [
    { 
      name: 'Maria Santos', 
      company: 'Santos Enterprises', 
      role: 'CEO', 
      rating: 5, 
      text: 'JTech Solutions transformed our operations. The comprehensive platform streamlined our entire business process.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      logo: '🏢'
    },
    { 
      name: 'Juan Dela Cruz', 
      company: 'Dela Cruz Group', 
      role: 'CFO', 
      rating: 5, 
      text: 'The accounting module is exceptional. Automated reporting saved us countless hours and improved accuracy significantly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      logo: '💼'
    },
    { 
      name: 'Ana Garcia', 
      company: 'Garcia Retail Chain', 
      role: 'Operations Director', 
      rating: 4, 
      text: 'Multi-location inventory management made simple. Real-time visibility across all our stores improved efficiency by 40%.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      logo: '🏪'
    },
  ];

  // const integrations = [
  //   'SAP', 'Oracle', 'Microsoft', 'Salesforce', 'QuickBooks', 'Xero', 'Shopify', 'WooCommerce'
  // ];

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setSelectedPlanId(null);
  };

  const handleSignupClick = (planId = null) => {
    setSelectedPlanId(planId);
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header 
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />

      <HeroSection 
        metrics={metrics}
        onSignupClick={handleSignupClick}
      />

      {/* <TrustedBySection integrations={integrations} /> */}

      <CoreModulesSection coreModules={coreModules} />

      <FeaturesSection features={features} />

      <TestimonialsSection testimonials={testimonials} />

      <PricingSection onSignupClick={handleSignupClick} />

      <CTASection onSignupClick={handleSignupClick} />

      <Footer />

      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
        <LoginForm 
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => { setShowLogin(false); setShowSignup(true); }}
        />
      </Modal>

      <Modal isOpen={showSignup} onClose={() => { setShowSignup(false); setSelectedPlanId(null); }}>
        <SignupForm 
          onClose={() => { setShowSignup(false); setSelectedPlanId(null); }}
          onSwitchToLogin={() => { setShowSignup(false); setShowLogin(true); setSelectedPlanId(null); }}
          selectedPlanId={selectedPlanId}
        />
      </Modal>
    </div>
  );
}

export default BusinessLandingPage;
