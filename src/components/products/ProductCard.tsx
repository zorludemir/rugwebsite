import type { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images && product.images.length > 0 ? product.images[0] : '/img/placeholder.jpg';
  const hoverImageUrl = product.images && product.images.length > 2 ? product.images[2] : imageUrl;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg group">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`} className="block aspect-w-4 aspect-h-3">
          <Image
            src={imageUrl}
            alt={product.name}
            width={600}
            height={450}
            className="object-cover w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            data-ai-hint={product.aiHint || product.category}
            unoptimized={imageUrl.startsWith('http')} // Add this if you might still use external URLs for some products
          />
          {product.images && product.images.length > 2 && (
            <Image
              src={hoverImageUrl}
              alt={product.name}
              width={600}
              height={450}
              className="object-cover w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0"
              data-ai-hint={product.aiHint || product.category}
              unoptimized={hoverImageUrl.startsWith('http')} // Add this if you might still use external URLs for some products
            />
          )}
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl mb-2 leading-tight">
           <Link href={`/products/${product.slug}`} className="hover:text-accent transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {product.description}
        </p>
        <p className="text-lg font-semibold text-foreground">
          From ${product.basePrice.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/products/${product.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

