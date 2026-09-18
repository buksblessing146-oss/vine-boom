import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderCompleted,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Emma Reynolds',
    email: 'emma.reynolds@example.com',
    address: '420 Madison Avenue, Apt 6B',
    city: 'New York',
    state: 'NY',
    zip: '10017',
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const isFreeShipping = subtotal >= 50;
  const total = subtotal + (isFreeShipping ? 0 : 5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onOrderCompleted();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFFFFF] rounded-3xl max-w-xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#E8DCCB] z-10 text-left animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-[#2B2B2B] transition-colors rounded-full hover:bg-stone-100 cursor-pointer"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif text-2xl tracking-[0.2em] font-medium text-[#2B2B2B]">AURA</span>
              <span className="text-stone-300">•</span>
              <span className="text-xs uppercase tracking-widest text-[#A67C52] font-semibold">Express Checkout</span>
            </div>
            <p className="text-xs text-stone-500 mb-6">
              Review your ritual order and shipping details.
            </p>

            {/* Order Summary Pill */}
            <div className="bg-[#F8F5F1] p-4 rounded-2xl border border-[#E8DCCB] mb-6">
              <div className="flex justify-between items-center text-xs text-[#2B2B2B] mb-2">
                <span>{cartItems.length} Products in Bag</span>
                <span className="font-medium">${total.toFixed(2)} USD</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {cartItems.map((item) => (
                  <img
                    key={item.product.id}
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-lg object-cover bg-white border border-[#E8DCCB]/60 shrink-0"
                    title={`${item.product.name} (x${item.quantity})`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-medium mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCCB] bg-[#F8F5F1] text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#A67C52]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCCB] bg-[#F8F5F1] text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#A67C52]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-medium mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8DCCB] bg-[#F8F5F1] text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#A67C52]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-medium mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8DCCB] bg-[#F8F5F1] text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#A67C52]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-medium mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8DCCB] bg-[#F8F5F1] text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#A67C52]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-medium mb-1">ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8DCCB] bg-[#F8F5F1] text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#A67C52]"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5 text-stone-600">
                <ShieldCheck className="w-4 h-4 text-[#A67C52]" />
                <span className="text-[11px]">256-bit encrypted checkout with 30-day glow guarantee.</span>
              </div>

              <button
                type="submit"
                id="place-order-button"
                className="w-full py-4 bg-[#2B2B2B] text-white rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A67C52] transition-colors shadow-sm mt-4 cursor-pointer"
              >
                Place Order • ${total.toFixed(2)}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#A67C52] font-semibold block mb-1">
              Order Confirmed #AUR-{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h3 className="font-serif text-3xl text-[#2B2B2B] font-light mb-3">
              Thank you, {formData.name}!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto mb-6">
              Your clean skincare ritual has been packaged with care in our recycled glass jars and will ship to {formData.city}, {formData.state} shortly.
            </p>
            <div className="p-4 rounded-2xl bg-[#F8F5F1] border border-[#E8DCCB] inline-flex items-center gap-2 text-xs text-[#2B2B2B]">
              <Sparkles className="w-4 h-4 text-[#A67C52]" />
              <span>A confirmation email was dispatched to <strong>{formData.email}</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
