import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedCheckout: () => void;
  onShopCollection: () => void;
}

const FREE_SHIPPING_THRESHOLD = 50;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
  onShopCollection,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discountAmount = discountApplied ? subtotal * 0.1 : 0;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoInput.trim().toUpperCase() === 'AURA10') {
      setDiscountApplied(true);
      setPromoInput('');
    } else {
      setPromoError('Please enter code AURA10 for 10% off');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F5F1] shadow-2xl flex flex-col border-l border-[#E8DCCB] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#E8DCCB] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-2xl font-normal text-[#2B2B2B] tracking-tight">
                Your Bag
              </h2>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F8F5F1] text-[#2B2B2B] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#E8DCCB]/40 px-6 py-3 border-b border-[#E8DCCB]/60 text-left">
            <div className="flex items-center justify-between text-xs font-medium text-[#2B2B2B] mb-1.5">
              <span>
                {isFreeShipping ? (
                  <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    You unlocked Complimentary Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#A67C52]">${amountNeededForFreeShipping.toFixed(2)}</strong> more for free shipping
                  </span>
                )}
              </span>
              <span className="text-stone-500 font-normal">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#A67C52] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 text-left">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E8DCCB]/50 flex items-center justify-center text-[#A67C52] mb-4">
                  <Sparkles className="w-8 h-8 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-2xl text-[#2B2B2B] font-light mb-2">
                  Your bag is empty
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 max-w-xs mb-6">
                  Discover our clean, gentle formulas crafted to nourish your skin's daily glow.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onShopCollection();
                  }}
                  className="px-6 py-3 bg-[#2B2B2B] text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-[#A67C52] transition-colors cursor-pointer"
                >
                  Explore Best Sellers
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white rounded-2xl border border-[#E8DCCB]/60 shadow-2xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-xl bg-[#F8F5F1] shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-serif text-base font-normal text-[#2B2B2B] leading-snug">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] text-stone-400">{item.product.volume}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity adjuster */}
                      <div className="flex items-center border border-[#E8DCCB] rounded-full px-2 py-0.5 bg-[#F8F5F1]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="text-[#2B2B2B] hover:text-[#A67C52] p-1 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium px-2 text-[#2B2B2B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="text-[#2B2B2B] hover:text-[#A67C52] p-1 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-medium text-[#2B2B2B]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8DCCB] space-y-4">
              {/* Promo Code Box */}
              {!discountApplied ? (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code (try AURA10)"
                    className="flex-grow px-3.5 py-2 text-xs uppercase tracking-wider rounded-xl bg-[#F8F5F1] border border-[#E8DCCB] focus:outline-hidden focus:border-[#A67C52]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-xl bg-stone-200 hover:bg-[#E8DCCB] text-[#2B2B2B] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between text-xs px-3 py-2 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200">
                  <span className="flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Code AURA10 applied (10% Off)
                  </span>
                  <button
                    onClick={() => setDiscountApplied(false)}
                    className="text-[11px] underline text-stone-500 hover:text-stone-800"
                  >
                    Remove
                  </button>
                </div>
              )}

              {promoError && (
                <p className="text-[11px] text-amber-700 text-left">{promoError}</p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#2B2B2B]/75 text-left">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#2B2B2B]">${subtotal.toFixed(2)}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Inner Circle Discount (10%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-medium text-[#2B2B2B]">
                    {isFreeShipping ? 'Free (Standard)' : '$5.00'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif font-medium text-[#2B2B2B] pt-2 border-t border-[#E8DCCB]/60">
                  <span>Total</span>
                  <span>${(finalTotal + (isFreeShipping ? 0 : 5)).toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-checkout-button"
                onClick={onProceedCheckout}
                className="w-full py-4 bg-[#2B2B2B] text-white rounded-full text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#A67C52] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-stone-400 text-center">
                Taxes calculated at checkout • Carbon-neutral delivery
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
