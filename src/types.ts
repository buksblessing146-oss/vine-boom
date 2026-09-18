export interface Product {
  id: string;
  name: string;
  subtitle: string;
  shortBenefit: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  volume: string;
  keyIngredients: string[];
  description: string;
  howToUse: string;
  skinType: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RoutineStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  explanation: string;
  product: Product;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  verified: boolean;
  testimonial: string;
  productName: string;
  avatar: string;
  skinType: string;
}

export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  iconName: 'clean' | 'derm' | 'cruelty' | 'allTypes';
}
