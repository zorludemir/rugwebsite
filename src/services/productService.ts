
import type { Product, ProductSize } from '@/types/product';

// Mock data - in a real app, this would come from Firebase
const mockProducts: Product[] = [
  {
    id: 'damla-rug',
    slug: 'damla',
    name: 'Damla',
    description: 'Damla rug featuring 980,000 loops, 8 mm pile height, and a Jute & Cotton base. Weighs 2,300 gr/m².',
    images: [
      'https://picsum.photos/seed/damla1/800/600',
      'https://picsum.photos/seed/damlaDetail/800/600',
      'https://picsum.photos/seed/damlaLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'damla-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'damla-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'damla-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'damla-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'damla-80x150',
    material: 'Jute & Cotton Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '980,000 Loops',
      '8 mm Pile Height',
      '2,300 gr/m² Weight',
      'Jute & Cotton Base',
    ],
    careInstructions: 'Vacuum regularly. Professional cleaning recommended for deep stains.',
    aiHint: 'Damla rug',
  },
  {
    id: 'ametis-rug',
    slug: 'ametis',
    name: 'Ametis',
    description: 'Ametis rug featuring 680,000 loops, 7 mm pile height, and a Cotton base. Weighs 2,300 gr/m².',
    images: [
      'https://picsum.photos/seed/ametis1/800/600',
      'https://picsum.photos/seed/ametisDetail/800/600',
      'https://picsum.photos/seed/ametisLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'ametis-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'ametis-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'ametis-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'ametis-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'ametis-80x150',
    material: 'Cotton Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '680,000 Loops',
      '7 mm Pile Height',
      '2,300 gr/m² Weight',
      'Cotton Base',
    ],
    careInstructions: 'Vacuum regularly. Professional cleaning recommended for deep stains.',
    aiHint: 'Ametis rug',
  },
  {
    id: 'bulut-rug',
    slug: 'bulut',
    name: 'Bulut',
    description: 'Bulut rug featuring 480,000 loops, 8 mm pile height, and a Jute & Cotton base. Weighs 2,100 gr/m².',
    images: [
      'https://picsum.photos/seed/bulut1/800/600',
      'https://picsum.photos/seed/bulutDetail/800/600',
      'https://picsum.photos/seed/bulutLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'bulut-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'bulut-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'bulut-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'bulut-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'bulut-80x150',
    material: 'Jute & Cotton Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '480,000 Loops',
      '8 mm Pile Height',
      '2,100 gr/m² Weight',
      'Jute & Cotton Base',
    ],
    careInstructions: 'Vacuum regularly. Professional cleaning recommended for deep stains.',
    aiHint: 'Bulut rug',
  },
  {
    id: 'puffy-rug',
    slug: 'puffy',
    name: 'Puffy',
    description: 'Puffy rug with a 6 mm pile height and a Non-slip Polyester base. Weighs 850 gr/m².',
    images: [
      'https://picsum.photos/seed/puffy1/800/600',
      'https://picsum.photos/seed/puffyDetail/800/600',
      'https://picsum.photos/seed/puffyLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'puffy-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'puffy-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'puffy-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'puffy-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'puffy-80x150',
    material: 'Non-slip Polyester Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '6 mm Pile Height',
      '850 gr/m² Weight',
      'Non-slip Polyester Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean with mild detergent.',
    aiHint: 'Puffy rug',
  },
  {
    id: 'venus-rug',
    slug: 'venus',
    name: 'Venus',
    description: 'Venus rug with a 9 mm pile height and a Non-slip Cotton base. Weighs 1,200 gr/m².',
    images: [
      'https://picsum.photos/seed/venus1/800/600',
      'https://picsum.photos/seed/venusDetail/800/600',
      'https://picsum.photos/seed/venusLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'venus-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'venus-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'venus-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'venus-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'venus-80x150',
    material: 'Non-slip Cotton Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '9 mm Pile Height',
      '1,200 gr/m² Weight',
      'Non-slip Cotton Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean with mild detergent.',
    aiHint: 'Venus rug',
  },
  {
    id: 'bambu-rug',
    slug: 'bambu',
    name: 'Bambu',
    description: 'Bambu rug with a 4 mm pile height and a Non-slip Polyester base. Weighs 830 gr/m².',
    images: [
      'https://picsum.photos/seed/bambu1/800/600',
      'https://picsum.photos/seed/bambuDetail/800/600',
      'https://picsum.photos/seed/bambuLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'bambu-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'bambu-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'bambu-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'bambu-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'bambu-80x150',
    material: 'Non-slip Polyester Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '4 mm Pile Height',
      '830 gr/m² Weight',
      'Non-slip Polyester Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean with mild detergent.',
    aiHint: 'Bambu rug',
  },
  {
    id: 'garden-rug',
    slug: 'garden',
    name: 'Garden',
    description: 'Garden rug with an 8 mm total height and a Felt base. Weighs 1,700 gr/m².',
    images: [
      'https://picsum.photos/seed/garden1/800/600',
      'https://picsum.photos/seed/gardenDetail/800/600',
      'https://picsum.photos/seed/gardenLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'garden-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'garden-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'garden-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'garden-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'garden-80x150',
    material: 'Felt Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '8 mm Total Height',
      '1,700 gr/m² Weight',
      'Felt Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean with mild detergent. Suitable for outdoor use.',
    aiHint: 'Garden rug outdoor',
  },
  {
    id: 'sonil-rug',
    slug: 'sonil',
    name: 'Şönil',
    description: 'Şönil (Chenille) rug with a 5 mm pile height and a Non-slip Cotton base. Weighs 1,600 gr/m².',
    images: [
      'https://picsum.photos/seed/sonil1/800/600',
      'https://picsum.photos/seed/sonilDetail/800/600',
      'https://picsum.photos/seed/sonilLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'sonil-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'sonil-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'sonil-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'sonil-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'sonil-80x150',
    material: 'Non-slip Cotton Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '5 mm Pile Height',
      '1,600 gr/m² Weight',
      'Non-slip Cotton Base',
    ],
    careInstructions: 'Vacuum regularly. Gentle wash or professional cleaning recommended.',
    aiHint: 'Chenille rug sonil',
  },
  {
    id: 'inci-rug',
    slug: 'inci',
    name: 'İnci',
    description: 'İnci (Pearl) rug with a 6 mm pile height and a Non-slip Polyester base. Weighs 850 gr/m².',
    images: [
      'https://picsum.photos/seed/inci1/800/600',
      'https://picsum.photos/seed/inciDetail/800/600',
      'https://picsum.photos/seed/inciLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'inci-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'inci-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'inci-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'inci-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'inci-80x150',
    material: 'Non-slip Polyester Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '6 mm Pile Height',
      '850 gr/m² Weight',
      'Non-slip Polyester Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean with mild detergent.',
    aiHint: 'Inci rug pearl',
  },
  {
    id: 'goblen-rug',
    slug: 'goblen',
    name: 'Goblen',
    description: 'Goblen (Tapestry) rug with a 6 mm pile height and a Non-slip Thermo base. Weighs 1,250 gr/m².',
    images: [
      'https://picsum.photos/seed/goblen1/800/600',
      'https://picsum.photos/seed/goblenDetail/800/600',
      'https://picsum.photos/seed/goblenLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'goblen-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'goblen-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'goblen-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'goblen-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'goblen-80x150',
    material: 'Non-slip Thermo Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '6 mm Pile Height',
      '1,250 gr/m² Weight',
      'Non-slip Thermo Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean. Check manufacturer instructions for thermo base care.',
    aiHint: 'Goblen rug tapestry',
  },
  {
    id: 'elegant-rug',
    slug: 'elegant',
    name: 'Elegant',
    description: 'Elegant rug with a 7 mm pile height and a Thermo Non-slip base. Weighs 2,100 gr/m².',
    images: [
      'https://picsum.photos/seed/elegant1/800/600',
      'https://picsum.photos/seed/elegantDetail/800/600',
      'https://picsum.photos/seed/elegantLifestyle/800/600',
    ],
    basePrice: 0,
    sizes: [
      { id: 'elegant-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 0 },
      { id: 'elegant-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 0 },
      { id: 'elegant-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 0 },
      { id: 'elegant-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 0 },
    ],
    defaultSizeId: 'elegant-80x150',
    material: 'Thermo Non-slip Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '7 mm Pile Height',
      '2,100 gr/m² Weight',
      'Thermo Non-slip Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean. Check manufacturer instructions for thermo base care.',
    aiHint: 'Elegant rug thermo',
  },
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
  // Kept other categories in case they are used or data changes later
  { value: 'round', label: 'Round' },
  { value: 'runner', label: 'Runners' },
  { value: 'shag', label: 'Shag Rugs'}
];
