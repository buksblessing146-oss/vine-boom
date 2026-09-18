import React from 'react';
import { WHY_CHOOSE_FEATURES } from '../data/content';
import { Sparkles, ShieldCheck, Heart, Feather } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clean':
        return <Sparkles className="w-6 h-6 stroke-[1.25] text-[#A67C52]" />;
      case 'derm':
        return <ShieldCheck className="w-6 h-6 stroke-[1.25] text-[#A67C52]" />;
      case 'cruelty':
        return <Heart className="w-6 h-6 stroke-[1.25] text-[#A67C52]" />;
      case 'allTypes':
        return <Feather className="w-6 h-6 stroke-[1.25] text-[#A67C52]" />;
      default:
        return <Sparkles className="w-6 h-6 stroke-[1.25] text-[#A67C52]" />;
    }
  };

  return (
    <section id="why-aura" className="py-20 lg:py-28 bg-[#F8F5F1] relative overflow-hidden">
      {/* Delicate background decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#E8DCCB]/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A67C52] font-medium block mb-3">
            Our Formulation Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2B2B2B] tracking-tight mb-4">
            Simple Ingredients. Real Results.
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/75 leading-relaxed">
            We formulate with intention—stripping away unnecessary fillers, parabens, and synthetic fragrances
            to let high-performance botanicals and dermatological science lead.
          </p>
        </div>

        {/* 4 Clean Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              id={`why-choose-${feature.id}`}
              className="bg-white/80 backdrop-blur-xs rounded-2xl p-8 border border-[#E8DCCB] text-center flex flex-col items-center justify-start transition-all duration-300 hover:shadow-md hover:border-[#A67C52]/40 hover:-translate-y-1 group"
            >
              {/* Minimal Icon Bubble */}
              <div className="w-14 h-14 rounded-full bg-[#F8F5F1] border border-[#E8DCCB] flex items-center justify-center mb-6 group-hover:bg-[#E8DCCB]/50 transition-colors duration-300">
                {getIcon(feature.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal tracking-tight mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2B2B2B]/70 leading-relaxed font-normal">
                {feature.description}
              </p>

              {/* Step indicator subscript */}
              <div className="mt-6 pt-4 border-t border-[#E8DCCB]/40 w-12 mx-auto">
                <span className="text-[10px] uppercase tracking-widest text-[#A67C52] font-medium">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
