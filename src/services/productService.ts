import type { Product, ProductSize } from '@/types/product';

// Prices per square meter for each product model
const pricesPerSqMeter: Record<string, number> = {
  'damla': 74.82,
  'bukle': 68.73,
  'bulut': 64.19,
  'puffy': 47.01,
  'okyanus': 43.70,
  'bambu': 43.70,
  'garden': 45.77,
  'sonil': 23.84,
  'inci': 23.94,
  'goblen': 39.37,
  'elegant': 56.45,
  'eco-bamboo': 45.00,
  'rubber-mat': 20.00, // Example price for rubber mat
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
const rawProductData: (Omit<Product, 'basePrice'> & { id: string; sizes: Omit<ProductSize, 'priceModifier'>[] })[] = [
  {
    id: 'damla-rug',
    slug: 'damla',
    name: 'Damla',
    description: 'Damla rug featuring 980,000 loops, 8 mm pile height, and a Jute & Cotton base. Weighs 2,300 gr/m².',
    images: [
      '/img/damla/damla1.jpg',
      '/img/damla/damla2.jpg',
      '/img/damla/damla3.jpg',
    ],
    sizes: [
      { id: 'damla-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'damla-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'damla-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'damla-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
    id: 'bulut-rug',
    slug: 'bulut',
    name: 'Bulut',
    description: 'Bulut rug featuring 480,000 loops, 8 mm pile height, and a Jute & Cotton base. Weighs 2,100 gr/m².',
    images: [
      '/img/bulut/bulut1.jpg',
      '/img/bulut/bulut2.jpg',
      '/img/bulut/bulut3.jpg',
    ],
    sizes: [
      { id: 'bulut-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'bulut-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'bulut-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'bulut-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
      '/img/puffy/puffy1.jpg',
      '/img/puffy/puffy2.jpg',
      '/img/puffy/puffy3.jpg',
    ],
    sizes: [
      { id: 'puffy-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'puffy-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'puffy-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'puffy-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
    id: 'bambu-rug',
    slug: 'bambu',
    name: 'Bambu',
    description: 'Bambu rug with a 4 mm pile height and a Non-slip Polyester base. Weighs 830 gr/m².',
    images: [
      '/img/bambu/bambu1.jpg',
      '/img/bambu/bambu2.jpg',
      '/img/bambu/bambu3.jpg',
    ],
    sizes: [
      { id: 'bambu-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'bambu-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'bambu-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'bambu-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
      '/img/garden/garden1.jpg',
      '/img/garden/garden2.jpg',
      '/img/garden/garden3.jpg',
    ],
    sizes: [
      { id: 'garden-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'garden-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'garden-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'garden-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
      '/img/sonil/sonil1.jpg',
      '/img/sonil/sonil2.jpg',
      '/img/sonil/sonil3.jpg',
    ],
    sizes: [
      { id: 'sonil-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'sonil-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'sonil-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'sonil-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
      '/img/inci/inci1.jpg',
      '/img/inci/inci2.jpg',
      '/img/inci/inci3.jpg',
    ],
    sizes: [
      { id: 'inci-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'inci-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'inci-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'inci-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
      '/img/goblen/goblen1.jpg',
      '/img/goblen/goblen2.jpg',
      '/img/goblen/goblen3.jpg',
    ],
    sizes: [
      { id: 'goblen-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'goblen-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'goblen-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'goblen-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
      '/img/elegant/elegant1.jpg',
      '/img/elegant/elegant2.jpg',
      '/img/elegant/elegant3.jpg',
    ],
    sizes: [
      { id: 'elegant-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'elegant-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'elegant-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'elegant-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
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
  {
    id: 'bukle-rug',
    slug: 'bukle',
    name: 'Bukle',
    description: 'Bukle rug featuring 750,000 loops, 7 mm pile height, and a Jute & Cotton base. Weighs 2,000 gr/m².',
    images: [
      '/img/bukle/bukle1.jpg',
      '/img/bukle/bukle2.jpg',
      '/img/bukle/bukle3.jpg',
    ],
    sizes: [
      { id: 'bukle-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'bukle-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'bukle-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'bukle-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
    ],
    defaultSizeId: 'bukle-80x150',
    material: 'Jute & Cotton Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '750,000 Loops',
      '7 mm Pile Height',
      '2,000 gr/m² Weight',
      'Jute & Cotton Base',
    ],
    careInstructions: 'Vacuum regularly. Professional cleaning recommended for deep stains.',
    aiHint: 'Bukle rug',
  },
  {
    id: 'eco-bamboo-rug',
    slug: 'eco-bamboo',
    name: 'Eco Bamboo',
    description: 'Eco Bamboo rug with a 5 mm pile height and a Non-slip Polyester base. Weighs 900 gr/m².',
    images: [
      '/img/ekobambu/ekobambu1.jpg',
      '/img/ekobambu/ekobambu2.jpg',
      '/img/ekobambu/ekobambu3.jpg',
    ],
    sizes: [
      { id: 'eco-bamboo-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'eco-bamboo-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'eco-bamboo-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'eco-bamboo-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
    ],
    defaultSizeId: 'eco-bamboo-80x150',
    material: 'Non-slip Polyester Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      '5 mm Pile Height',
      '900 gr/m² Weight',
      'Non-slip Polyester Base',
    ],
    careInstructions: 'Vacuum regularly. Spot clean with mild detergent.',
    aiHint: 'Eco Bamboo rug',
  },
  {
    id: 'rubber-mat',
    slug: 'rubber-mat',
    name: 'Rubber Mat',
    description: 'Rubber Mat with a PVC base, non-slip features, durable and easy to clean.',
    images: [
      '/img/rubbermat/rubbermat1.jpg',
      '/img/rubbermat/rubbermat2.jpg',
      '/img/rubbermat/rubbermat3.jpg',
    ],
    sizes: [
      { id: 'rubber-mat-50x80', label: '50x80 cm', dimensions: '50cm x 80cm', priceModifier: 1.0 },
      { id: 'rubber-mat-60x90', label: '60x90 cm', dimensions: '60cm x 90cm', priceModifier: 1.2 },
      { id: 'rubber-mat-80x120', label: '80x120 cm', dimensions: '80cm x 120cm', priceModifier: 1.5 },
    ],
    defaultSizeId: 'rubber-mat-50x80',
    material: 'PVC Base',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      'Non-slip PVC Base',
      'Easy to Clean',
      'Durable Material',
    ],
    careInstructions: 'Wipe with a damp cloth. Avoid using harsh chemicals.',
    aiHint: 'Rubber Mat PVC base',
  },
  {
    id: 'okyanus-rug',
    slug: 'okyanus',
    name: 'Okyanus',
    description: 'Okyanus rug featuring 480,000 loops, 8 mm pile height, and a Jute & Cotton base. Weighs 2,100 gr/m².',
    images: [
      '/img/okyanus/okyanus1.jpg',
      '/img/okyanus/okyanus2.jpg',
      '/img/okyanus/okyanus3.jpg',
    ],
    sizes: [
      { id: 'okyanus-80x150', label: '80x150 cm', dimensions: '80cm x 150cm', priceModifier: 1.0 },
      { id: 'okyanus-100x200', label: '100x200 cm', dimensions: '100cm x 200cm', priceModifier: 1.2 },
      { id: 'okyanus-150x200', label: '150x200 cm', dimensions: '150cm x 200cm', priceModifier: 1.5 },
      { id: 'okyanus-160x230', label: '160x230 cm', dimensions: '160cm x 230cm', priceModifier: 1.8 },
    ],
    defaultSizeId: 'okyanus-80x150',
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
    aiHint: 'Okyanus rug',
  },
  {
    id: 'towel-rug',
    slug: 'towel',
    name: 'Towel',
    description: 'Towel rug featuring soft and absorbent material, perfect for bathrooms and kitchens.',
    images: [
      '/img/towel/towel1.jpg',
      '/img/towel/towel2.jpg',
      '/img/towel/towel3.jpg',
      '/img/towel/towel4.jpg',
    ],
    sizes: [
      { id: 'towel-50x80', label: '50x80 cm', dimensions: '50cm x 80cm', priceModifier: 1.0 },
      { id: 'towel-60x90', label: '60x90 cm', dimensions: '60cm x 90cm', priceModifier: 1.2 },
      { id: 'towel-80x120', label: '80x120 cm', dimensions: '80cm x 120cm', priceModifier: 1.5 },
    ],
    defaultSizeId: 'towel-50x80',
    material: 'Soft Absorbent Material',
    shape: 'Rectangular',
    category: 'rectangular',
    features: [
      'Soft and Absorbent',
      'Perfect for Bathrooms and Kitchens',
      'Durable Material',
    ],
    careInstructions: 'Machine washable. Avoid using bleach.',
    aiHint: 'Towel rug soft absorbent',
  },
];

// Adding the getProductBySlug function
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts('all');
  return products.find(product => product.slug === slug) || null;
}

// Adding the getProducts function
export async function getProducts(category: string): Promise<Product[]> {
  const allProducts: Product[] = rawProductData.map((rawProduct) => {
    const basePrice = pricesPerSqMeter[rawProduct.slug] * calculateAreaInSqM(rawProduct.sizes[0].dimensions);
    return {
      ...rawProduct,
      basePrice,
      sizes: rawProduct.sizes.map((size) => ({
        ...size,
        priceModifier: size.priceModifier || 0,
      })),
    };
  });

  if (category === 'all') {
    return allProducts;
  }

  return allProducts.filter((product) => product.category === category);
}

// Adding the productCategories export
export const productCategories = [
  { value: 'rectangular', label: 'Rectangular Rugs' },
  { value: 'round', label: 'Round Rugs' },
  { value: 'runner', label: 'Runner Rugs' },
  { value: 'shag', label: 'Shag Rugs' },
  { value: 'all', label: 'All Rugs' },
];

// Adding the getAllProductSlugs function
export async function getAllProductSlugs(): Promise<string[]> {
  const products = await getProducts('all');
  return products.map(product => product.slug);
}

