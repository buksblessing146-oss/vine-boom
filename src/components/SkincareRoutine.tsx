import React from 'react';
import { ROUTINE_STEPS } from '../data/routine';
import { Product } from '../types';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface SkincareRoutineProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onAddFullRoutine: () => void;
  routineAdded: boolean;
}

export const SkincareRoutine: React.FC<SkincareRoutineProps> = ({
  onQuickView,
  onAddToCart,
  onAddFullRoutine,
  routineAdded,
}) => {
  return (
    <section id="routine" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E8DCCB]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A67C52] font-medium block mb-3">
            The Daily Ritual
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2B2B2B] tracking-tight mb-4">
            Your Everyday Glow Routine
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/75 leading-relaxed">
            Four targeted steps designed to work in synergy, protecting your barrier and delivering enduring dewiness.
          </p>
        </div>

        {/* Horizontal 4-Step Routine */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-28 left-[12%] right-[12%] h-[1px] bg-[#E8DCCB] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {ROUTINE_STEPS.map((step, index) => (
              <div
                key={step.stepNumber}
                id={`routine-step-${step.stepNumber}`}
                className="flex flex-col items-center text-center bg-[#F8F5F1] lg:bg-transparent p-6 lg:p-4 rounded-2xl lg:rounded-none border lg:border-none border-[#E8DCCB]/60 group"
              >
                {/* Step Number Badge */}
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8DCCB] text-[#A67C52] font-serif text-sm font-medium flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 transition-transform">
                  {step.stepNumber}
                </div>

                {/* Step Image (Small Product Image) */}
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#E8DCCB]/30 mb-5 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  onClick={() => onQuickView(step.product)}
                >
                  <img
                    src={step.product.image}
                    alt={step.product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Step Name */}
                <span className="text-[11px] uppercase tracking-widest text-[#A67C52] font-semibold mb-1">
                  Step {step.stepNumber} • {step.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-[#2B2B2B] font-normal tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Product Name reference */}
                <button
                  onClick={() => onQuickView(step.product)}
                  className="text-xs font-medium text-[#2B2B2B] underline decoration-[#E8DCCB] hover:text-[#A67C52] transition-colors mb-2.5 cursor-pointer"
                >
                  {step.product.name} (${step.product.price})
                </button>

                {/* One-Line Explanation */}
                <p className="text-xs text-[#2B2B2B]/75 leading-relaxed max-w-xs font-normal mb-4">
                  {step.explanation}
                </p>

                {/* Quick Add Step button */}
                <button
                  onClick={() => onAddToCart(step.product)}
                  className="mt-auto text-[11px] uppercase tracking-wider text-[#2B2B2B] hover:text-[#A67C52] font-medium inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Add Step to Bag</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Full Routine Bundle Promotion Banner */}
        <div className="mt-16 bg-[#F8F5F1] rounded-3xl p-8 sm:p-10 border border-[#E8DCCB] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#E8DCCB] flex items-center justify-center text-[#A67C52] shrink-0">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-medium">
                  The Complete 4-Step Everyday Glow Set
                </h4>
                <span className="hidden sm:inline-block px-2.5 py-0.5 bg-[#A67C52] text-white text-[10px] uppercase tracking-wider font-semibold rounded-full">
                  Save 15%
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2B2B]/75 mt-1">
                Receive the Cleanser, Vitamin C Serum, Glow Moisturizer & Repair Cream in an organic cotton pouch.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="text-right">
              <span className="text-xs line-through text-stone-400 block">$154</span>
              <span className="text-xl font-medium text-[#2B2B2B] font-serif">$130</span>
            </div>

            <button
              id="add-full-routine-btn"
              onClick={onAddFullRoutine}
              className={`px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap inline-flex items-center gap-2 ${
                routineAdded
                  ? 'bg-[#A67C52] text-white'
                  : 'bg-[#2B2B2B] text-white hover:bg-[#A67C52]'
              }`}
            >
              {routineAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Routine in Bag</span>
                </>
              ) : (
                <>
                  <span>Add Routine Set</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
