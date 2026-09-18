import { Review, WhyChooseFeature } from '../types';

export const WHY_CHOOSE_FEATURES: WhyChooseFeature[] = [
  {
    id: 'clean-ingredients',
    title: 'Clean Ingredients',
    description: 'Free from parabens, sulfates, silicones, and synthetic fragrance. Formulated with biocompatible, certified botanical actives.',
    iconName: 'clean'
  },
  {
    id: 'dermatologist-tested',
    title: 'Dermatologist Tested',
    description: 'Rigorously vetted through non-comedogenic and hypoallergenic clinical safety panels for zero irritation.',
    iconName: 'derm'
  },
  {
    id: 'cruelty-free',
    title: 'Cruelty-Free',
    description: '100% Leaping Bunny certified. We never test on animals, nor do we partner with ingredient suppliers who do.',
    iconName: 'cruelty'
  },
  {
    id: 'all-skin-types',
    title: 'Suitable for All Skin Types',
    description: 'Carefully balanced to harmonize with sensitive, dry, oily, acne-prone, and barrier-compromised skin profiles.',
    iconName: 'allTypes'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Emma R.',
    location: 'New York, NY',
    rating: 5,
    verified: true,
    testimonial: 'My skin has never felt this hydrated. The cleanser and moisturizer together transformed my dull, dry winter skin into a soft, glowing canvas in just two weeks.',
    productName: 'Hydrating Cleanser & Glow Moisturizer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    skinType: 'Dry & Sensitive'
  },
  {
    id: 'rev-2',
    name: 'Chloe D.',
    location: 'Los Angeles, CA',
    rating: 5,
    verified: true,
    testimonial: 'A true holy grail. The Vitamin C serum doesn’t sting at all, absorbs like silk under sunscreen, and has visibly faded my stubborn dark spots. I get compliments on my glow constantly.',
    productName: 'Vitamin C Serum',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    skinType: 'Combination & Hyperpigmentation'
  },
  {
    id: 'rev-3',
    name: 'Sophia T.',
    location: 'Austin, TX',
    rating: 5,
    verified: true,
    testimonial: 'Minimalist skincare perfection. No overpowering perfumes, no sticky residue—just healthy, luminous skin that breathes effortlessly. The overnight repair cream saved my barrier.',
    productName: 'Overnight Repair Cream',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
    skinType: 'Normal to Reactive'
  }
];
