import React from 'react';
import { Product } from '../types';
import { Star, Plus, Eye, Check } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  recentlyAddedId: string | null;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  onAddToCart,
  onQuickView,
  recentlyAddedId,
}) => {
  return (
    <section id="best-sellers" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A67C52] font-medium block mb-3">
              Formulated for Daily Radiance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2B2B2B] tracking-tight">
              Our Best Sellers
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#2B2B2B]/70 max-w-sm font-normal">
            Essential skincare staples developed with biocompatible actives to nurture, strengthen, and illuminate.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => {
            const isAdded = recentlyAddedId === product.id;

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group relative flex flex-col bg-[#F8F5F1] rounded-2xl overflow-hidden border border-[#E8DCCB]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#E8DCCB]"
              >
                {/* Product Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-xs text-[#2B2B2B] text-[11px] uppercase tracking-wider font-medium rounded-full border border-[#E8DCCB]/60 shadow-2xs">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick View Button on Card Hover */}
                <button
                  onClick={() => onQuickView(product)}
                  className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full bg-white/90 backdrop-blur-xs text-[#2B2B2B] hover:text-[#A67C52] shadow-2xs cursor-pointer"
                  title="Quick View Details"
                  aria-label={`Quick view ${product.name}`}
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Large Product Image Container with Image Zoom Hover Effect */}
                <div
                  className="relative w-full aspect-[3/4] bg-[#EFE9E0] overflow-hidden cursor-pointer"
                  onClick={() => onQuickView(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Product Content Details */}
                <div className="flex flex-col flex-grow p-5 sm:p-6 text-left">
                  {/* Rating & Volume */}
                  <div className="flex items-center justify-between text-xs text-[#2B2B2B]/60 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#A67C52] text-[#A67C52]" />
                      <span className="font-medium text-[#2B2B2B]">{product.rating}</span>
                      <span>({product.reviewCount.toLocaleString()})</span>
                    </div>
                    <span className="text-[11px] tracking-wide">{product.volume}</span>
                  </div>

                  {/* Product Name */}
                  <h3
                    onClick={() => onQuickView(product)}
                    className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal tracking-tight mb-1.5 hover:text-[#A67C52] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  {/* Short Benefit */}
                  <p className="text-xs text-[#2B2B2B]/75 leading-relaxed line-clamp-2 mb-4 flex-grow font-normal">
                    {product.shortBenefit}
                  </p>

                  {/* Price and Shop Now Action */}
                  <div className="pt-3 border-t border-[#E8DCCB]/60 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-stone-400">Price</span>
                      <span className="text-lg font-medium text-[#2B2B2B]">${product.price}</span>
                    </div>

                    <button
                      id={`shop-now-${product.id}`}
                      onClick={() => onAddToCart(product)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? 'bg-[#A67C52] text-white shadow-xs'
                          : 'bg-[#2B2B2B] text-white hover:bg-[#A67C52]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Shop Now</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
