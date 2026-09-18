import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateTo(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#E8DCCB] text-[#2B2B2B] text-xs sm:text-[13px] py-2 px-4 text-center tracking-wider font-medium flex items-center justify-center gap-2 border-b border-[#ded2bf]">
        <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
        <span>Complimentary Carbon-Neutral Shipping on all orders over $50</span>
        <span className="hidden md:inline text-[#A67C52]">•</span>
        <span className="hidden md:inline text-stone-600">Clean, Gentle & Dermatologist Tested</span>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5F1]/95 backdrop-blur-md shadow-xs border-b border-[#E8DCCB]/60 py-3.5'
            : 'bg-[#F8F5F1] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2B2B2B] hover:text-[#A67C52] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>

          {/* Desktop Left Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('best-sellers')}
              className="text-sm font-normal text-[#2B2B2B]/80 hover:text-[#2B2B2B] tracking-widest uppercase transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => handleNavClick('routine')}
              className="text-sm font-normal text-[#2B2B2B]/80 hover:text-[#2B2B2B] tracking-widest uppercase transition-colors"
            >
              The Routine
            </button>
            <button
              onClick={() => handleNavClick('why-aura')}
              className="text-sm font-normal text-[#2B2B2B]/80 hover:text-[#2B2B2B] tracking-widest uppercase transition-colors"
            >
              Why AURA
            </button>
          </div>

          {/* Center Brand Logo */}
          <div className="text-center cursor-pointer" onClick={() => handleNavClick('hero')}>
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-medium text-[#2B2B2B] uppercase select-none">
              AURA
            </span>
          </div>

          {/* Right Nav Links & Cart */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleNavClick('customer-love')}
              className="hidden md:inline-block text-sm font-normal text-[#2B2B2B]/80 hover:text-[#2B2B2B] tracking-widest uppercase transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => handleNavClick('footer-newsletter')}
              className="hidden lg:inline-block text-sm font-normal text-[#2B2B2B]/80 hover:text-[#2B2B2B] tracking-widest uppercase transition-colors"
            >
              Newsletter
            </button>

            {/* Shopping Bag Trigger */}
            <button
              id="cart-drawer-trigger"
              onClick={onOpenCart}
              className="relative p-2 text-[#2B2B2B] hover:text-[#A67C52] transition-colors flex items-center gap-2 group"
              aria-label="View shopping bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 stroke-[1.5] transition-transform group-hover:scale-105" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#A67C52] text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs tracking-wider uppercase font-medium text-[#2B2B2B]/70 group-hover:text-[#2B2B2B]">
                Bag {cartCount > 0 && `(${cartCount})`}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F8F5F1] border-b border-[#E8DCCB] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('best-sellers')}
                className="flex items-center justify-between py-2 text-left text-base uppercase tracking-widest text-[#2B2B2B] border-b border-[#E8DCCB]/40"
              >
                <span>Shop Collection</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('routine')}
                className="flex items-center justify-between py-2 text-left text-base uppercase tracking-widest text-[#2B2B2B] border-b border-[#E8DCCB]/40"
              >
                <span>The Everyday Routine</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('why-aura')}
                className="flex items-center justify-between py-2 text-left text-base uppercase tracking-widest text-[#2B2B2B] border-b border-[#E8DCCB]/40"
              >
                <span>Why Choose AURA</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('customer-love')}
                className="flex items-center justify-between py-2 text-left text-base uppercase tracking-widest text-[#2B2B2B] border-b border-[#E8DCCB]/40"
              >
                <span>Customer Reviews</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
              <button
                onClick={() => handleNavClick('footer-newsletter')}
                className="flex items-center justify-between py-2 text-left text-base uppercase tracking-widest text-[#2B2B2B]"
              >
                <span>Join The Inner Circle (10% Off)</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
