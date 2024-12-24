import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import SellerProfile from './pages/SellerProfile';
import MessagesPage from './pages/messages/MessagesPage';
import LikesPage from './pages/likes/LikesPage';
import OrdersPage from './pages/orders/OrdersPage';
import SettingsPage from './pages/settings/SettingsPage';
import PromotionPage from './pages/promotion/PromotionPage';
import ReelsView from './pages/ReelsView/ReelsView';
import ReelsView2 from './pages/ReelsView2/ReelsView2';
import BrandsPage from './pages/brands/BrandsPage';
import BrandPage from './pages/brands/BrandPage';
import StaticProductPage from './pages/brands/StaticProductPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/reels" element={<ReelsView />} />
            <Route path="/reels-2" element={<ReelsView2 />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/brands/:id" element={<BrandPage />} />
            <Route path="/brands/:brandId/products/:productId" element={<StaticProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product/:id/promote" element={<PromotionPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/seller/:username" element={<SellerProfile />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/likes" element={<LikesPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}