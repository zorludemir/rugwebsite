
"use client";

import type { ProductSize } from '@/types/product';
import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '../ui/separator';

interface SizePriceSelectorProps {
  basePrice: number;
  sizes: ProductSize[];
  defaultSizeId?: string;
  onSizeChange: (selectedSize: ProductSize, newPrice: number) => void;
}

export default function SizePriceSelector({
  basePrice,
  sizes,
  defaultSizeId,
  onSizeChange,
}: SizePriceSelectorProps) {
  const initialSize = sizes.find(s => s.id === defaultSizeId) || sizes[0];
  const [selectedSize, setSelectedSize] = useState<ProductSize>(initialSize);
  const [currentPrice, setCurrentPrice] = useState(basePrice + (initialSize?.priceModifier || 0));

  useEffect(() => {
    const newPrice = basePrice + selectedSize.priceModifier;
    setCurrentPrice(newPrice);
    onSizeChange(selectedSize, newPrice);
  }, [selectedSize, basePrice, onSizeChange]);

  const handleSizeChange = (sizeId: string) => {
    const newSelectedSize = sizes.find(s => s.id === sizeId);
    if (newSelectedSize) {
      setSelectedSize(newSelectedSize);
    }
  };

  if (!sizes || sizes.length === 0) {
    return (
        <div className="mt-6">
            <p className="text-3xl font-bold text-foreground">${basePrice.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground mt-1">Standard size</p>
        </div>
    );
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Select Size</CardTitle>
        <CardDescription>Price varies by selected size.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup
          value={selectedSize.id}
          onValueChange={handleSizeChange}
          className="space-y-2"
        >
          {sizes.map((size) => (
            <Label
              key={size.id}
              htmlFor={size.id}
              className="flex items-center justify-between p-4 border rounded-md cursor-pointer hover:bg-accent has-[input:checked]:bg-accent has-[input:checked]:border-primary transition-colors"
            >
              <div>
                <span className="font-medium">{size.label}</span>
                <span className="block text-sm text-muted-foreground">{size.dimensions}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground">
                  +${size.priceModifier.toFixed(2)}
                </span>
                <RadioGroupItem value={size.id} id={size.id} />
              </div>
            </Label>
          ))}
        </RadioGroup>
        <Separator />
        <div>
          <p className="text-sm text-muted-foreground">Selected Size: {selectedSize.label}</p>
          <p className="text-3xl font-bold text-foreground mt-1">${currentPrice.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
