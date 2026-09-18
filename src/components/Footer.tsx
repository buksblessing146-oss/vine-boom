import React, { useState } from 'react';
import { Instagram, ArrowRight, Check, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="footer-newsletter" className="bg-[#F8F5F1] border-t border-[#E8DCCB] pt-20 pb-12 text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DCCB] mb-16 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A67C52] font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Inner Circle</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B2B2B] font-light tracking-tight mb-2">
                Subscribe for 10% off your first ritual.
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2B2B]/70 max-w-md font-normal">
                Receive private access to new formulation drops, seasonal skincare guides, and mindful wellness rituals.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="bg-[#F8F5F1] p-5 rounded-2xl border border-[#E8DCCB] flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-[#A67C52] text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#2B2B2B]">Welcome to AURA</p>
                    <p className="text-xs text-stone-500">Your 10% gift code <span className="font-semibold text-[#A67C52]">AURA10</span> is ready to use at checkout.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-grow px-5 py-3.5 rounded-full bg-[#F8F5F1] border border-[#E8DCCB] text-sm text-[#2B2B2B] placeholder:text-stone-400 focus:outline-hidden focus:border-[#A67C52] transition-colors"
                  />
                  <button
                    type="submit"
                    id="newsletter-subscribe-btn"
                    className="px-8 py-3.5 bg-[#2B2B2B] text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-[#A67C52] transition-colors duration-200 cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8 pb-16 border-b border-[#E8DCCB]/60 text-left">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl tracking-[0.2em] font-medium text-[#2B2B2B] uppercase block mb-4">
              AURA
            </span>
            <p className="text-xs sm:text-sm text-[#2B2B2B]/70 max-w-sm leading-relaxed mb-6 font-normal">
              Clean, biocompatible skincare developed to restore your skin's natural vitality, luminosity, and balance.
            </p>
            {/* Social Links (Instagram & TikTok) */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-white border border-[#E8DCCB] flex items-center justify-center text-[#2B2B2B] hover:text-[#A67C52] hover:border-[#A67C52] transition-colors"
                aria-label="Follow AURA on Instagram"
              >
                <Instagram className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-white border border-[#E8DCCB] flex items-center justify-center text-[#2B2B2B] hover:text-[#A67C52] hover:border-[#A67C52] transition-colors"
                aria-label="Follow AURA on TikTok"
              >
                {/* Minimal TikTok Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-6.19 6.32 6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.87-4.48V8.75a8.17 8.17 0 0 0 4.75 1.51V6.8a4.83 4.83 0 0 1-1.99-.11z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#2B2B2B] mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2B2B2B]/75">
              <li>
                <button
                  onClick={() => onNavigateTo('best-sellers')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('best-sellers')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Hydrating Cleanser
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('best-sellers')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Vitamin C Serum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('best-sellers')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Glow Moisturizer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('best-sellers')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Overnight Repair Cream
                </button>
              </li>
            </ul>
          </div>

          {/* About Col */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#2B2B2B] mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2B2B2B]/75">
              <li>
                <button
                  onClick={() => onNavigateTo('why-aura')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('why-aura')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Clean Formulation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('routine')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Everyday Ritual
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('customer-love')}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Clinical Results
                </button>
              </li>
              <li>
                <span className="text-stone-400">Sustainability & Glass</span>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#2B2B2B] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2B2B2B]/75">
              <li>
                <a href="mailto:care@auraskincare.co" className="hover:text-[#A67C52] transition-colors">
                  care@auraskincare.co
                </a>
              </li>
              <li>
                <span className="text-stone-400">Concierge: Mon–Fri 9am–6pm EST</span>
              </li>
              <li>
                <span className="text-stone-400">Press: press@auraskincare.co</span>
              </li>
              <li>
                <span className="text-stone-400">Complimentary 30-Day Returns</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ending Slogan as requested: "Glow Naturally with AURA." */}
        <div className="pt-12 text-center">
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2B2B2B] tracking-tight mb-4">
            "Glow Naturally with AURA."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 pt-8 border-t border-[#E8DCCB]/40 max-w-4xl mx-auto">
            <p>© {new Date().getFullYear()} AURA Skincare Laboratories Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
