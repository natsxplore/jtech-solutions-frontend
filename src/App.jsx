import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sileo';
import { BlockUIProvider } from './contexts/BlockUIContext';
import BusinessLandingPage from './components/BusinessLandingPage';
// import Dashboard from './components/Dashboard';
// import DashboardHome from './components/dashboard/DashboardHome';
// import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <BlockUIProvider>
        <Toaster position="top-right" />
        <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <BusinessLandingPage />
            </PublicRoute>
          }
        />
        
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        > */}
          {/* <Route index element={<DashboardHome />} /> */}
          
          {/* Sales Routes */}
          {/* <Route path="sales" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">All Sales</h2><p className="text-gray-600">Sales management coming soon...</p></div>} />
          <Route path="sales/new" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">New Sale</h2><p className="text-gray-600">Create a new sale transaction...</p></div>} />
          <Route path="sales/history" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Sales History</h2><p className="text-gray-600">View all past sales transactions...</p></div>} />
          <Route path="sales/invoices" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Invoices</h2><p className="text-gray-600">Manage invoices...</p></div>} /> */}
          
          {/* Inventory Routes */}
          {/* <Route path="inventory/products" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Products</h2><p className="text-gray-600">Manage your product catalog...</p></div>} />
          <Route path="inventory/stock" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Stock Management</h2><p className="text-gray-600">Track and manage inventory stock...</p></div>} />
          <Route path="inventory/categories" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2><p className="text-gray-600">Organize products by categories...</p></div>} />
          <Route path="inventory/alerts" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Low Stock Alerts</h2><p className="text-gray-600">View products with low stock levels...</p></div>} />
          <Route path="inventory" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory</h2><p className="text-gray-600">Inventory management dashboard...</p></div>} /> */}
          
          {/* Customer Routes */}
          {/* <Route path="customers" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">All Customers</h2><p className="text-gray-600">Manage your customer database...</p></div>} />
          <Route path="customers/new" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Add Customer</h2><p className="text-gray-600">Register a new customer...</p></div>} />
          <Route path="customers/groups" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Groups</h2><p className="text-gray-600">Organize customers into groups...</p></div>} />
          <Route path="customers/loyalty" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Loyalty Program</h2><p className="text-gray-600">Manage customer loyalty programs...</p></div>} /> */}
          
          {/* Reports Routes */}
          {/* <Route path="reports" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Reports</h2><p className="text-gray-600">View and generate business reports...</p></div>} />
          <Route path="reports/sales" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Sales Reports</h2><p className="text-gray-600">Detailed sales analytics and reports...</p></div>} />
          <Route path="reports/inventory" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory Reports</h2><p className="text-gray-600">Inventory analysis and reports...</p></div>} />
          <Route path="reports/customers" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reports</h2><p className="text-gray-600">Customer analytics and insights...</p></div>} />
          <Route path="reports/financial" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Reports</h2><p className="text-gray-600">Financial statements and reports...</p></div>} /> */}
          
          {/* Settings Routes */}
          {/* <Route path="settings" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2><p className="text-gray-600">Configure your system settings...</p></div>} />
          <Route path="settings/general" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">General Settings</h2><p className="text-gray-600">Basic system configuration...</p></div>} />
          <Route path="settings/users" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Users & Roles</h2><p className="text-gray-600">Manage users and permissions...</p></div>} />
          <Route path="settings/payments" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h2><p className="text-gray-600">Configure payment options...</p></div>} />
          <Route path="settings/notifications" element={<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h2 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h2><p className="text-gray-600">Manage notification preferences...</p></div>} /> */}
        {/* </Route> */}
        </Routes>
      </BlockUIProvider>
    </BrowserRouter>
  );
}

export default App;
