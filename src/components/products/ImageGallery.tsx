"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  altText: string;
}

export default function ImageGallery({ images, altText }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '/img/placeholder.jpg'); // Updated placeholder
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [backgroundOffset, setBackgroundOffset] = useState({
  x: 0,
  y: 0,
  containerWidth: 1,
  containerHeight: 1,
});


  const handleMouseMove = (e: React.MouseEvent) => {
  const pageX = e.clientX;
  const pageY = e.clientY;
  const rect = imageContainerRef.current?.getBoundingClientRect();
  if (!rect) return;

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  setCursorPosition({
    x: pageX,
    y: pageY,
  });

  // Bu kısım zoom için kullanılacak pozisyonu da hesaplıyor:
  setBackgroundOffset({
    x: x,
    y: y,
    containerWidth: rect.width,
    containerHeight: rect.height,
  });
};


  const handleMouseEnter = () => {
    setZoomedImage(selectedImage);
  };

  const handleMouseLeave = () => {
    setZoomedImage(null);
  };

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
    <>
      <div className="grid gap-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div
              className="relative aspect-w-4 aspect-h-3"
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                  unoptimized={image.startsWith('http')} // Add this for thumbnails too
                />
                <span className="sr-only">View image {index + 1}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      {zoomedImage && (
  <div
    className="fixed w-72 h-72 border border-gray-300 overflow-hidden z-50 pointer-events-none rounded shadow-lg"
    style={{
      top: cursorPosition.y - 275,  // fareden yukarıya
      left: cursorPosition.x + 10, // fareden sağa
      backgroundImage: `url(${zoomedImage})`,
      backgroundSize: '500%', // zoom oranı
      backgroundPosition: `${(backgroundOffset.x / backgroundOffset.containerWidth) * 100}% ${(backgroundOffset.y / backgroundOffset.containerHeight) * 100}%`,
      backgroundRepeat: 'no-repeat',
    }}
  />
)}

    </>
  );
}

