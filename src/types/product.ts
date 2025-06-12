export interface ProductSize {
  id: string;
  label: string; // e.g., "Small (4x6 ft)"
  dimensions: string; // e.g., "4x6 ft"
  priceModifier?: number; // e.g., 0 for base, 50 for +$50 from basePrice
}

export interface Product {
  id: string;
  slug: string; // for URL, e.g., "luxury-wool-rug-cream"
  name: string;
  description: string;
  images: string[]; // URLs of images. First image is primary.
  basePrice: number; // Price for the default/first size in the sizes array
  sizes: ProductSize[];
  material: string;
  shape: string;
  category: string; // e.g., 'rectangular', 'round', 'runner', 'shag', 'all'
  features?: string[];
  careInstructions?: string;
  aiHint?: string; // For placeholder images on product listing
  defaultSizeId?: string; // ID of the default size
}
