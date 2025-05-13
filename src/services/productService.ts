
import type { Product, ProductSize } from '@/types/product';

// Prices per square meter for each product model
const pricesPerSqMeter: Record<string, number> = {
  'damla': 74.82,
  'ametis': 68.73,
  'bulut': 64.19,
  'puffy': 47.01,
  'venus': 43.70,
  'bambu': 43.70,
  'garden': 45.77,
  'sonil': 23.84, // Şönil
  'inci': 23.94,
  'goblen': 39.37,
  'elegant': 56.45,
};

// Helper function to calculate area from dimensions string "WIDTHxHEIGHT cm"
function calculateAreaInSqM(dimensions: string): number {
  const parts = dimensions.replace(/cm/gi, '').trim().split('x');
  if (parts.length !== 2) return 0;
  const widthCm = parseFloat(parts[0]);
  const heightCm = parseFloat(parts[1]);
  if (isNaN(widthCm) || isNaN(heightCm)) return 0;
  return (widthCm / 100) * (heightCm / 100); // Convert cm to m and calculate area
}

// Raw product data without pre-calculated prices
const rawProductData: Omit<Product, 'basePrice' | 'sizes'> & { sizes: Omit<ProductSize, 'priceModifier'>[] }[] = [
  {
    id: 'damla-rug',
    slug: 'damla',
    name: 'Damla',
    description: 'Damla rug featuring 980,000 loops, 8 mm pile height, and a Jute & Cotton base. Weighs 2,300 gr/m².',
    images: [
      '/img/damla1.jpg',
    ],
    sizes: [
      { id: 'damla-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'damla-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'damla-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'damla-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/ametis1.jpg',
    ],
    sizes: [
      { id: 'ametis-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'ametis-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'ametis-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'ametis-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/bulut1.jpg',
    ],
    sizes: [
      { id: 'bulut-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'bulut-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'bulut-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'bulut-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/puffy1.jpg',
    ],
    sizes: [
      { id: 'puffy-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'puffy-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'puffy-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'puffy-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/venus1.jpg',
    ],
    sizes: [
      { id: 'venus-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'venus-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'venus-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'venus-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/bambu1.jpg',
    ],
    sizes: [
      { id: 'bambu-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'bambu-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'bambu-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'bambu-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/garden1.jpg',
    ],
    sizes: [
      { id: 'garden-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'garden-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'garden-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'garden-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/sonil1.jpg',
    ],
    sizes: [
      { id: 'sonil-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'sonil-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'sonil-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'sonil-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/inci1.jpg',
    ],
    sizes: [
      { id: 'inci-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'inci-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'inci-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'inci-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/goblen1.jpg',
    ],
    sizes: [
      { id: 'goblen-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'goblen-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'goblen-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'goblen-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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
      '/img/elegant1.jpg',
    ],
    sizes: [
      { id: 'elegant-80x150', label: '80x150 cm', dimensions: '80cm x 150cm' },
      { id: 'elegant-100x200', label: '100x200 cm', dimensions: '100cm x 200cm' },
      { id: 'elegant-150x200', label: '150x200 cm', dimensions: '150cm x 200cm' },
      { id: 'elegant-160x230', label: '160x230 cm', dimensions: '160cm x 230cm' },
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

const mockProducts: Product[] = rawProductData.map(p_raw => {
  const productData = p_raw as any; // Cast to any to allow adding properties
  const pricePerSqM = pricesPerSqMeter[productData.slug];
  if (pricePerSqM === undefined) {
    console.warn(`Price per SqM not found for product ${productData.slug}. Prices will be incorrect.`);
  }

  const defaultSizeEntry = productData.sizes.find((s: any) => s.id === productData.defaultSizeId) || productData.sizes[0];
  if (!defaultSizeEntry) {
    throw new Error(`Default size not found for product ${productData.slug}`);
  }
  const defaultSizeArea = calculateAreaInSqM(defaultSizeEntry.dimensions);
  const calculatedBasePrice = defaultSizeArea * (pricePerSqM || 0);

  const calculatedSizes: ProductSize[] = productData.sizes.map((size: any) => {
    const sizeArea = calculateAreaInSqM(size.dimensions);
    const sizePrice = sizeArea * (pricePerSqM || 0);
    const priceModifier = sizePrice - calculatedBasePrice;
    return {
      ...size,
      priceModifier: priceModifier,
    };
  });

  return {
    ...productData,
    basePrice: calculatedBasePrice,
    sizes: calculatedSizes,
  } as Product;
});


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
