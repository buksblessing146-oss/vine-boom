import { Product } from '../types';
import cleanserImg from '../assets/images/aura_cleanser_1789769717217.jpg';
import serumImg from '../assets/images/aura_serum_1789769726935.jpg';
import moisturizerImg from '../assets/images/aura_moisturizer_1789769737415.jpg';
import repairCreamImg from '../assets/images/aura_repair_cream_1789769747220.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'hydrating-cleanser',
    name: 'Hydrating Cleanser',
    subtitle: 'Nourishing Amino Gel Cleanser',
    shortBenefit: 'Gentle foaming wash that deeply purifies without stripping essential moisture.',
    price: 28,
    rating: 4.9,
    reviewCount: 3840,
    image: cleanserImg,
    badge: 'Gentle Formula',
    volume: '150 ml / 5.1 fl. oz.',
    keyIngredients: ['Oat Amino Acids', 'Centella Asiatica', 'Sodium Hyaluronate', 'Chamomile Extract'],
    description: 'A silky, pH-balanced gel-to-foam wash engineered to lift impurities, sunscreen, and daily pollutants while maintaining your skin’s delicate lipid moisture barrier. Leaves skin supple, never tight.',
    howToUse: 'Gently massage 1–2 pumps onto damp skin with lukewarm water for 60 seconds. Rinse thoroughly and pat dry with a soft cloth. Ideal morning and night.',
    skinType: 'Normal, Sensitive, Dry, Combination'
  },
  {
    id: 'vitamin-c-serum',
    name: 'Vitamin C Serum',
    subtitle: '15% Stabilized Glow Complex',
    shortBenefit: 'Potent active blend for radiant brightness and shield against oxidation.',
    price: 42,
    rating: 5.0,
    reviewCount: 4620,
    image: serumImg,
    badge: 'Best Seller',
    volume: '30 ml / 1.0 fl. oz.',
    keyIngredients: ['15% THD Ascorbate (Vitamin C)', 'Ferulic Acid', 'Kakadu Plum', 'Hyaluronic Acid'],
    description: 'A breakthrough lipid-soluble Vitamin C elixir that penetrates deeper to fade hyperpigmentation, smooth uneven texture, and defend against daily free radical damage without stinging or irritation.',
    howToUse: 'Dispense 3–4 drops onto clean fingertips and press gently into face, neck, and décolletage after cleansing. Allow 1 minute to absorb before moisturizer and SPF.',
    skinType: 'All Skin Types, Dull or Uneven Tone'
  },
  {
    id: 'glow-moisturizer',
    name: 'Glow Moisturizer',
    subtitle: 'Peptide Cloud Dew Emulsion',
    shortBenefit: 'Dewy peptide cream that restores elasticity and seals 48hr hydration.',
    price: 38,
    rating: 4.9,
    reviewCount: 5120,
    image: moisturizerImg,
    badge: 'Award Winner',
    volume: '50 ml / 1.7 oz.',
    keyIngredients: ['Multi-Peptide Complex', 'Botanical Squalane', 'Snow Mushroom Extract', 'Niacinamide (Vitamin B3)'],
    description: 'An airy, cushioning gel-cream that melts instantaneously into skin, replenishing essential ceramides and leaving an unmistakable, lit-from-within glow without greasiness.',
    howToUse: 'Smooth a dime-sized amount across face and neck in upward circular motions. Layer over serum for a luminous glass-skin finish.',
    skinType: 'All Skin Types, Dehydrated, Combination'
  },
  {
    id: 'overnight-repair-cream',
    name: 'Overnight Repair Cream',
    subtitle: 'Barrier Lipid Restorative Balm',
    shortBenefit: 'Rich botanical lipid complex for intensive overnight barrier restoration.',
    price: 46,
    rating: 4.8,
    reviewCount: 2980,
    image: repairCreamImg,
    badge: 'Intensive Care',
    volume: '50 ml / 1.7 oz.',
    keyIngredients: ['Ceramides NP, AP & EOP', 'Bakuchiol (Retinol Alternative)', 'Organic Shea Butter', 'Evening Primrose'],
    description: 'A comforting, velvety night treatment formulated to repair micro-tears in the moisture barrier, soothe redness, and accelerate cellular renewal while you sleep.',
    howToUse: 'Warm a pea-sized amount between clean palms and press gently into skin as the final step of your evening ritual. Wake up to plump, rested skin.',
    skinType: 'Dry, Very Dry, Mature, Compromised Barrier'
  }
];
