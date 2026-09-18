import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Leaf } from 'lucide-react';
import heroSkincareImage from '../assets/images/aura_hero_skincare_1789769708231.jpg';

interface HeroProps {
  onShopClick: () => void;
  onLearnMoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onLearnMoreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-center bg-[#F8F5F1] overflow-hidden pt-4 pb-16 lg:py-20"
    >
      {/* Background Soft Natural Lighting Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8DCCB]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8DCCB]/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl">
            {/* Brand Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DCCB]/60 border border-[#E8DCCB] text-[#2B2B2B] text-xs uppercase tracking-[0.2em] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] animate-pulse" />
              Mindful Clean Skincare
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#2B2B2B] tracking-tight leading-[1.1] mb-6">
              Healthy Skin Begins with <span className="italic font-normal">AURA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#2B2B2B]/80 font-normal leading-relaxed mb-8 max-w-lg">
              Clean, effective skincare designed to nourish, hydrate, and reveal your natural glow.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-shop-collection-btn"
                onClick={onShopClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2B2B2B] text-[#FFFFFF] text-xs uppercase tracking-[0.18em] font-medium rounded-full hover:bg-[#A67C52] transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-learn-more-btn"
                onClick={onLearnMoreClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#2B2B2B] border border-[#2B2B2B]/30 hover:border-[#2B2B2B] text-xs uppercase tracking-[0.18em] font-medium rounded-full hover:bg-[#E8DCCB]/40 transition-all duration-300 cursor-pointer"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-[#E8DCCB] w-full grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#A67C52] shrink-0 stroke-[1.5]" />
                <span className="text-xs text-[#2B2B2B]/75 font-normal">100% Clean Actives</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#A67C52] shrink-0 stroke-[1.5]" />
                <span className="text-xs text-[#2B2B2B]/75 font-normal">Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A67C52] shrink-0 stroke-[1.5]" />
                <span className="text-xs text-[#2B2B2B]/75 font-normal">Derm Approved</span>
              </div>
            </div>
          </div>

          {/* Right Hero Product Arrangement Visual */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Halo Soft Background Element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8DCCB]/60 to-[#F8F5F1] rounded-3xl -rotate-1 scale-95 transition-transform" />

            {/* Main Photography Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8DCCB] group">
              <img
                src={heroSkincareImage}
                alt="AURA Clean Skincare Product Arrangement with soft natural lighting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Editorial Caption Tag in Bottom Corner */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 text-[11px] uppercase tracking-wider text-[#2B2B2B]/90">
                The Morning Dew Collection
              </div>
            </div>

            {/* Subtle Floating "Best Seller" Badge beside the featured product */}
            <div className="absolute -top-4 sm:top-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#E8DCCB] flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
              <div className="w-7 h-7 rounded-full bg-[#E8DCCB] flex items-center justify-center text-[#A67C52]">
                <Sparkles className="w-3.5 h-3.5 fill-[#A67C52]" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-semibold">
                  Best Seller
                </p>
                <p className="text-xs font-serif font-medium text-[#2B2B2B]">
                  Vitamin C Serum
                </p>
              </div>
            </div>

            {/* Secondary Floating Soft Badge - Hydration Rating */}
            <div className="absolute -bottom-4 sm:bottom-6 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-[#E8DCCB] hidden sm:flex items-center gap-3">
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                  Hydration Test
                </p>
                <p className="text-xs font-medium text-[#2B2B2B]">
                  +84% Moisture Retention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
