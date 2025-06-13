import { getProductBySlug, getAllProductSlugs } from '@/services/productService';
import ImageGallery from '@/components/products/ImageGallery';
import SizePriceSelectorClient from './SizePriceSelectorClient'; // Client component wrapper
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata, ResolvingMetadata } from 'next';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProductBySlug((await params).slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} | EuroserPOD`,
    description: `${product.name} - ${(product.features ?? []).join(', ')}. Perfect for custom designs and high-quality printing.`,
    openGraph: {
      title: product.name,
      description: `${product.name} - ${(product.features ?? []).join(', ')}. Perfect for custom designs and high-quality printing.`,
      images: product.images.length > 0 ? [product.images[0]] : [],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug: any) => ({
    slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductBySlug((await params).slug);

  if (!product) {
    return (
      <div className="container py-12 md:py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Button asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="md:sticky md:top-28 h-max"> {/* Sticky gallery on larger screens */}
          <ImageGallery images={product.images} altText={product.name} />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold">{product.name}</h1>
          
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">{product.category}</Badge>
            <Badge variant="outline">{product.material}</Badge>
            <Badge variant="outline">{product.shape}</Badge>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Client component for size selection and price updates */}
          <SizePriceSelectorClient 
            basePrice={product.basePrice} 
            sizes={product.sizes}
            defaultSizeId={product.defaultSizeId}
          />

          <div className="pt-4">
             <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Add to Quote Request (Print Design)</Button>
             <p className="text-xs text-muted-foreground mt-2 text-center">
                This is a blank rug. Contact us to get this rug printed with your custom design.
             </p>
          </div>

        </div>
      </div>

      {/* You could add related products or more sections here */}
      <Separator className="my-12 md:my-16" />
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Need a Custom Print?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            EuroserPOD specializes in printing your unique designs on our high-quality blank rugs. Let's bring your vision to life.
        </p>
        <Button asChild variant="outline">
            <Link href="/contact">Contact Us for a Custom Quote</Link>
        </Button>
      </div>
    </div>
  );
}
