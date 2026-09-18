import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, Plus, Minus, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#FFFFFF] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E8DCCB] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#2B2B2B] hover:text-[#A67C52] border border-[#E8DCCB]/60 shadow-xs cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-[3/4] md:aspect-auto bg-[#F8F5F1] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-xs text-[11px] uppercase tracking-wider font-medium text-[#2B2B2B] rounded-full border border-[#E8DCCB]">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between text-left max-h-[80vh] overflow-y-auto">
            <div>
              {/* Rating */}
              <div className="flex items-center gap-1.5 text-xs text-[#2B2B2B]/60 mb-2">
                <div className="flex text-[#A67C52]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#A67C52] stroke-none" />
                  ))}
                </div>
                <span className="font-medium text-[#2B2B2B]">{product.rating}</span>
                <span>({product.reviewCount.toLocaleString()} reviews)</span>
              </div>

              {/* Title & Price */}
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2B2B2B] tracking-tight mb-1">
                {product.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#A67C52] font-medium mb-3">
                {product.subtitle} • {product.volume}
              </p>
              <p className="text-2xl font-serif font-medium text-[#2B2B2B] mb-4">
                ${product.price}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed mb-6 font-normal">
                {product.description}
              </p>

              {/* Key Actives */}
              <div className="mb-6">
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
                  Key Bio-Actives
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.keyIngredients.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#F8F5F1] text-[11px] text-[#2B2B2B]/80 border border-[#E8DCCB]/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to use */}
              <div className="mb-6 p-3.5 rounded-xl bg-[#F8F5F1] border border-[#E8DCCB]/60 text-left">
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#2B2B2B] mb-1">
                  How To Apply
                </h4>
                <p className="text-xs text-[#2B2B2B]/75 leading-relaxed font-normal">
                  {product.howToUse}
                </p>
              </div>

              <div className="text-xs text-stone-500 mb-6 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A67C52]" />
                <span>Optimal for: <strong className="text-[#2B2B2B] font-medium">{product.skinType}</strong></span>
              </div>
            </div>

            {/* Quantity Selector & Add Button */}
            <div className="pt-4 border-t border-[#E8DCCB] flex items-center gap-4">
              <div className="flex items-center border border-[#E8DCCB] rounded-full p-1 bg-[#F8F5F1]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#2B2B2B] hover:bg-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-medium text-[#2B2B2B]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#2B2B2B] hover:bg-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                id="quick-view-add-to-bag-btn"
                onClick={handleAdd}
                className={`flex-grow py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  added
                    ? 'bg-[#A67C52] text-white'
                    : 'bg-[#2B2B2B] text-white hover:bg-[#A67C52]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <span>Add to Bag • ${(product.price * quantity).toFixed(2)}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
