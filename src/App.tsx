/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BestSellers } from './components/BestSellers';
import { WhyChoose } from './components/WhyChoose';
import { SkincareRoutine } from './components/SkincareRoutine';
import { CustomerLove } from './components/CustomerLove';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[1], quantity: 1 } // Preloaded with the Best Seller Vitamin C Serum for immediate delight
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);
  const [routineAdded, setRoutineAdded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setRecentlyAddedId(product.id);
    setTimeout(() => setRecentlyAddedId(null), 1400);
    showToast(`Added ${product.name} to your bag`);
  };

  const handleAddFullRoutine = () => {
    PRODUCTS.forEach((product) => {
      handleAddToCart(product, 1);
    });
    setRoutineAdded(true);
    showToast('Complete 4-Step Everyday Glow Routine added to your bag');
    setTimeout(() => {
      setRoutineAdded(false);
      setIsCartOpen(true);
    }, 1000);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    showToast('Your ritual order was successfully placed!');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#E8DCCB] selection:text-[#2B2B2B]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateTo={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1 – Hero */}
        <Hero
          onShopClick={() => scrollToSection('best-sellers')}
          onLearnMoreClick={() => scrollToSection('why-aura')}
        />

        {/* Section 2 – Best Sellers */}
        <BestSellers
          products={PRODUCTS}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onQuickView={(product) => setSelectedProduct(product)}
          recentlyAddedId={recentlyAddedId}
        />

        {/* Section 3 – Why Choose AURA */}
        <WhyChoose />

        {/* Section 4 – Skincare Routine */}
        <SkincareRoutine
          onQuickView={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onAddFullRoutine={handleAddFullRoutine}
          routineAdded={routineAdded}
        />

        {/* Section 5 – Customer Love */}
        <CustomerLove />
      </main>

      {/* Section 6 – Footer */}
      <Footer onNavigateTo={scrollToSection} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onShopCollection={() => scrollToSection('best-sellers')}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product, qty) => handleAddToCart(product, qty)}
      />

      {/* Simulated Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Delicate Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2B2B2B] text-white text-xs tracking-wider px-5 py-3 rounded-full shadow-lg border border-[#A67C52]/40 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A67C52]" />
            {toastMessage}
          </span>
        </div>
      )}
    </div>
  );
}
