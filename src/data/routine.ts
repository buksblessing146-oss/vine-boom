import { RoutineStep } from '../types';
import { PRODUCTS } from './products';

export const ROUTINE_STEPS: RoutineStep[] = [
  {
    stepNumber: '01',
    title: 'Cleanse',
    subtitle: 'Morning & Night',
    explanation: 'Wash away impurities and makeup with our pH-balanced amino acid cleanser without stripping your moisture barrier.',
    product: PRODUCTS[0]
  },
  {
    stepNumber: '02',
    title: 'Treat',
    subtitle: 'Morning Glow',
    explanation: 'Infuse potent 15% Vitamin C to visibly brighten, smooth texture, and defend against daily environmental stressors.',
    product: PRODUCTS[1]
  },
  {
    stepNumber: '03',
    title: 'Moisturize',
    subtitle: 'Morning & Night',
    explanation: 'Lock in weightless peptide hydration and ceramides for a cushiony, supple, and plump moisture reservoir.',
    product: PRODUCTS[2]
  },
  {
    stepNumber: '04',
    title: 'Glow',
    subtitle: 'Night Restoration',
    explanation: 'Seal in barrier-repairing lipids and gentle bakuchiol to wake up with visibly luminous, rested skin.',
    product: PRODUCTS[3]
  }
];
