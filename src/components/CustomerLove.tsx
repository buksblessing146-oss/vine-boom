import React from 'react';
import { REVIEWS } from '../data/content';
import { Star, CheckCircle, Award } from 'lucide-react';

export const CustomerLove: React.FC = () => {
  return (
    <section id="customer-love" className="py-20 lg:py-28 bg-[#F8F5F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A67C52] font-medium block mb-3">
            Real Stories, Genuine Glow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2B2B2B] tracking-tight mb-4">
            Loved by Every Skin Type
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/75 leading-relaxed">
            Thousands have transformed their everyday skincare rituals into mindful moments of self-care.
          </p>
        </div>

        {/* 3 Premium Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8DCCB] shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-left"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#A67C52]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A67C52] stroke-none" />
                  ))}
                </div>

                {/* Short Testimonial */}
                <blockquote className="font-serif text-lg sm:text-xl text-[#2B2B2B] font-light italic leading-snug mb-4">
                  "{review.testimonial}"
                </blockquote>

                {/* Tagged Product */}
                <span className="inline-block text-[11px] uppercase tracking-wider text-stone-500 bg-[#F8F5F1] px-2.5 py-1 rounded-md mb-6 border border-[#E8DCCB]/60">
                  Verified Ritual: {review.productName}
                </span>
              </div>

              {/* Customer Profile & Photo */}
              <div className="pt-4 border-t border-[#E8DCCB]/60 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#E8DCCB]"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-sm text-[#2B2B2B]">{review.name}</span>
                    {review.verified && (
                      <span title="Verified Purchaser" className="inline-flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 text-[#A67C52]" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500">{review.location} • {review.skinType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge Underneath */}
        <div className="max-w-md mx-auto bg-white/90 backdrop-blur-xs rounded-2xl p-6 border border-[#E8DCCB] shadow-xs flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-[#E8DCCB] flex items-center justify-center text-[#A67C52] shrink-0">
            <Award className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-[#A67C52] mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#A67C52] stroke-none" />
              ))}
              <span className="font-medium text-sm text-[#2B2B2B] ml-1.5">4.9 / 5.0</span>
            </div>
            <p className="font-serif text-lg text-[#2B2B2B] font-normal leading-tight">
              4.9/5 Average Customer Rating
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              Across 12,400+ verified customer reviews worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
