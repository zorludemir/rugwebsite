
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getProductBySlug } from '@/services/productService';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types/product';

export default async function Home() {
  const featuredProductSlugs = ['damla', 'inci', 'bambu'];
  const featuredProductsPromises = featuredProductSlugs.map(slug => getProductBySlug(slug));
  const resolvedProducts = await Promise.all(featuredProductsPromises);
  const featuredProducts = resolvedProducts.filter(product => product !== null) as Product[];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/banner1.png')", // Assuming banner1.png is a suitable generic background
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px) brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Custom Rugs, Crafted by HALISER
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
            High-quality, personalized printing on a variety of blank rugs. Bring your designs to life with HALISER.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/products">Explore Blank Rugs</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Blank Rugs</h2>
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              Featured products are currently unavailable.
            </p>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Design Your Custom Rug?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your ideas and get a quote for your HALISER rug.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
