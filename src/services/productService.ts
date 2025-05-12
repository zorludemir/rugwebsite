
import type { Product, ProductSize } from '@/types/product';

// Mock data - in a real app, this would come from Firebase
const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'classic-rectangular-wool-rug',
    name: 'Classic Rectangular Wool Rug',
    description: 'A timeless rectangular rug crafted from 100% pure wool. Soft, durable, and naturally stain-resistant, it adds warmth and elegance to any living space or bedroom. Features a subtle textured weave.',
    images: [
      'https://picsum.photos/seed/rect1/800/600',
      'https://picsum.photos/seed/rectDetail1/600/400',
      'https://picsum.photos/seed/rectLifestyle1/600/400',
    ],
    basePrice: 199.99,
    sizes: [
      { id: 'rect1-s', label: 'Small (4x6 ft)', dimensions: '4x6 ft', priceModifier: 0 },
      { id: 'rect1-m', label: 'Medium (5x8 ft)', dimensions: '5x8 ft', priceModifier: 60 },
      { id: 'rect1-l', label: 'Large (8x10 ft)', dimensions: '8x10 ft', priceModifier: 150 },
    ],
    defaultSizeId: 'rect1-s',
    material: 'Wool',
    shape: 'Rectangular',
    category: 'rectangular',
    features: ['100% Pure Wool', 'Hand-tufted', 'Naturally stain-resistant', 'Durable'],
    careInstructions: 'Vacuum regularly. Professional cleaning recommended for deep stains.',
    aiHint: 'wool rug classic',
  },
  {
    id: '2',
    slug: 'modern-round-jute-rug',
    name: 'Modern Round Jute Rug',
    description: 'Add a touch of natural charm with this eco-friendly round jute rug. Its robust, textured weave is perfect for high-traffic areas, bringing a bohemian or coastal vibe to your decor.',
    images: [
      'https://picsum.photos/seed/round1/800/600',
      'https://picsum.photos/seed/roundDetail1/600/400',
      'https://picsum.photos/seed/roundLifestyle1/600/400',
    ],
    basePrice: 129.99,
    sizes: [
      { id: 'round1-s', label: 'Small (4 ft Diameter)', dimensions: '4 ft Diameter', priceModifier: 0 },
      { id: 'round1-m', label: 'Medium (6 ft Diameter)', dimensions: '6 ft Diameter', priceModifier: 50 },
      { id: 'round1-l', label: 'Large (8 ft Diameter)', dimensions: '8 ft Diameter', priceModifier: 100 },
    ],
    defaultSizeId: 'round1-s',
    material: 'Jute',
    shape: 'Round',
    category: 'round',
    features: ['Eco-friendly Jute', 'Hand-woven', 'Textured feel', 'Durable for high-traffic areas'],
    careInstructions: 'Spot clean with mild soap and water. Avoid prolonged exposure to moisture.',
    aiHint: 'jute rug modern',
  },
  {
    id: '3',
    slug: 'versatile-runner-synthetic-rug',
    name: 'Versatile Runner Synthetic Rug',
    description: 'This synthetic runner rug is designed for versatility and durability. Ideal for hallways, kitchens, or entryways, it features a low pile that\'s easy to clean and maintain. Available in multiple lengths.',
    images: [
      'https://picsum.photos/seed/runner1/800/600',
      'https://picsum.photos/seed/runnerDetail1/600/400',
      'https://picsum.photos/seed/runnerLifestyle1/600/400',
    ],
    basePrice: 79.99,
    sizes: [
      { id: 'runner1-s', label: 'Short (2.5x8 ft)', dimensions: '2.5x8 ft', priceModifier: 0 },
      { id: 'runner1-m', label: 'Medium (2.5x12 ft)', dimensions: '2.5x12 ft', priceModifier: 30 },
      { id: 'runner1-l', label: 'Long (2.5x16 ft)', dimensions: '2.5x16 ft', priceModifier: 60 },
    ],
    defaultSizeId: 'runner1-s',
    material: 'Synthetic (Polypropylene)',
    shape: 'Runner',
    category: 'runner',
    features: ['Durable Synthetic Fibers', 'Low pile', 'Easy to clean', 'Fade-resistant'],
    careInstructions: 'Vacuum regularly. Spot clean with a damp cloth. Can be hosed down outdoors.',
    aiHint: 'runner rug synthetic',
  },
  {
    id: '4',
    slug: 'cozy-shag-area-rug',
    name: 'Cozy Shag Area Rug',
    description: 'Sink your feet into the plush comfort of this cozy shag area rug. Its deep pile adds a luxurious texture and warmth to any room, perfect for creating a relaxing and inviting atmosphere.',
    images: [
        'https://picsum.photos/seed/shag1/800/600',
        'https://picsum.photos/seed/shagDetail1/600/400',
        'https://picsum.photos/seed/shagLifestyle1/600/400',
    ],
    basePrice: 249.99,
    sizes: [
        { id: 'shag1-s', label: 'Small (4x6 ft)', dimensions: '4x6 ft', priceModifier: 0 },
        { id: 'shag1-m', label: 'Medium (5x8 ft)', dimensions: '5x8 ft', priceModifier: 70 },
        { id: 'shag1-l', label: 'Large (8x10 ft)', dimensions: '8x10 ft', priceModifier: 180 },
    ],
    defaultSizeId: 'shag1-s',
    material: 'Polyester',
    shape: 'Rectangular',
    category: 'shag',
    features: ['Plush shag pile', 'Ultra-soft texture', 'Adds warmth and comfort', 'Modern look'],
    careInstructions: 'Shake out to remove loose dirt. Vacuum with a high-pile attachment. Professional cleaning recommended.',
    aiHint: 'shag rug cozy',
  },
  {
    id: '5',
    slug: 'minimalist-cotton-flatweave-rug',
    name: 'Minimalist Cotton Flatweave Rug',
    description: 'Embrace simplicity with this minimalist cotton flatweave rug. Lightweight, reversible, and easy to clean, it\'s perfect for a Scandinavian or contemporary aesthetic. Ideal for layering or as a standalone piece.',
    images: [
      'https://picsum.photos/seed/cotton1/800/600',
      'https://picsum.photos/seed/cottonDetail1/600/400',
      'https://picsum.photos/seed/cottonLifestyle1/600/400',
    ],
    basePrice: 99.00,
    sizes: [
      { id: 'cotton1-s', label: 'Small (3x5 ft)', dimensions: '3x5 ft', priceModifier: 0 },
      { id: 'cotton1-m', label: 'Medium (5x7 ft)', dimensions: '5x7 ft', priceModifier: 40 },
      { id: 'cotton1-l', label: 'Large (6x9 ft)', dimensions: '6x9 ft', priceModifier: 80 },
    ],
    defaultSizeId: 'cotton1-s',
    material: 'Cotton',
    shape: 'Rectangular',
    category: 'rectangular',
    features: ['100% Cotton', 'Flatweave design', 'Reversible', 'Lightweight and easy to move'],
    careInstructions: 'Machine washable on gentle cycle (small sizes). Larger sizes spot clean or professional clean.',
    aiHint: 'cotton rug minimalist',
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts(category?: string): Promise<Product[]> {
  await delay(300); // Simulate network latency
  if (category && category !== 'all') {
    return mockProducts.filter(product => product.category === category);
  }
  return mockProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await delay(300); // Simulate network latency
  const product = mockProducts.find(p => p.slug === slug);
  return product || null;
}

export async function getAllProductSlugs(): Promise<string[]> {
    await delay(100);
    return mockProducts.map(p => p.slug);
}

export const productCategories = [
  { value: 'all', label: 'All Rugs' },
  { value: 'rectangular', label: 'Rectangular' },
  { value: 'round', label: 'Round' },
  { value: 'runner', label: 'Runners' },
  { value: 'shag', label: 'Shag Rugs'}
];
