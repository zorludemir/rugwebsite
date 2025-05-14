
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  altText: string;
}

export default function ImageGallery({ images, altText }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '/img/placeholder.jpg'); // Updated placeholder

  if (!images || images.length === 0) {
    return (
      <Card>
        <CardContent className="p-2">
          <div className="aspect-w-4 aspect-h-3 bg-muted rounded-md flex items-center justify-center">
             <Image src={selectedImage} alt="Placeholder image" width={800} height={600} className="object-cover w-full h-full rounded-md" data-ai-hint="product placeholder" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={selectedImage}
              alt={`${altText} - selected view`}
              width={800}
              height={600}
              className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
              priority // Prioritize loading for the main image
              unoptimized={selectedImage.startsWith('http')} // Add this if you might still use external URLs
            />
          </div>
        </CardContent>
      </Card>
      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "block aspect-w-1 aspect-h-1 rounded-md overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                selectedImage === image ? "border-primary" : "border-transparent hover:border-muted-foreground/50"
              )}
            >
              <Image
                src={image}
                alt={`${altText} - thumbnail ${index + 1}`}
                width={150}
                height={150}
                className="object-cover w-full h-full"
                unoptimized={image.startsWith('http')} // Add this for thumbnails too
              />
              <span className="sr-only">View image {index + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

