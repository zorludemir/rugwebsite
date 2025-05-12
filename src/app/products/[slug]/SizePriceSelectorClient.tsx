
"use client";

import type { ProductSize } from '@/types/product';
import { useState, useCallback } from 'react';
import SizePriceSelector from '@/components/products/SizePriceSelector';
// import { Button } from '@/components/ui/button'; // If "Add to Cart" or similar functionality is needed

interface SizePriceSelectorClientProps {
  basePrice: number;
  sizes: ProductSize[];
  defaultSizeId?: string;
  // productId: string; // If needed for cart functionality
}

export default function SizePriceSelectorClient({
  basePrice,
  sizes,
  defaultSizeId,
}: SizePriceSelectorClientProps) {
  const [selectedSizeDetails, setSelectedSizeDetails] = useState<{size: ProductSize | null, price: number }>({
    size: sizes.find(s => s.id === defaultSizeId) || sizes[0] || null,
    price: basePrice + (sizes.find(s => s.id === defaultSizeId)?.priceModifier || sizes[0]?.priceModifier || 0)
  });

  const handleSizeChange = useCallback((newSize: ProductSize, newPrice: number) => {
    setSelectedSizeDetails({ size: newSize, price: newPrice });
  }, []);

  // Example: Add to cart function (not fully implemented)
  // const handleAddToCart = () => {
  //   if (selectedSizeDetails.size) {
  //     console.log(
  //       `Adding to cart: Product ID ${productId}, Size: ${selectedSizeDetails.size.label}, Price: ${selectedSizeDetails.price.toFixed(2)}`
  //     );
  //     // Here you would typically call an action or API to add to cart
  //     // toast({ title: "Added to cart!", description: `${productName} (${selectedSizeDetails.size.label})`});
  //   }
  // };

  return (
    <div className="space-y-6">
      <SizePriceSelector
        basePrice={basePrice}
        sizes={sizes}
        defaultSizeId={defaultSizeId}
        onSizeChange={handleSizeChange}
      />
      {/* Example "Add to Cart" button - requires further implementation 
      {selectedSizeDetails.size && (
        <Button onClick={handleAddToCart} size="lg" className="w-full">
          Add to Cart - ${selectedSizeDetails.price.toFixed(2)}
        </Button>
      )}
      */}
    </div>
  );
}
