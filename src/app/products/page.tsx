import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from '@/components/products/ProductCard';
import { getProducts, productCategories } from '@/services/productService';
import type { Product } from '@/types/product';
import Link from 'next/link'; // Import Link component

export default async function ProductsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const currentCategory = searchParams?.category || 'all';
  const products = await getProducts(currentCategory);

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Blank Rug Products</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
        Choose the perfect blank canvas for your custom rug design with EuroserPOD. We offer a variety of shapes, sizes, and materials, ready for your unique print.
      </p>

      <Tabs defaultValue={currentCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-10 max-w-2xl mx-auto">
          {productCategories.map((category) => (
            <TabsTrigger key={category.value} value={category.value} asChild>
              <Link href={`/products?category=${category.value}`}>{category.label}</Link>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={currentCategory}>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {products.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground mt-8 col-span-full">
                No rugs found in the "{productCategories.find(pc => pc.value === currentCategory)?.label}" category. Explore other categories!
              </p>
            )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

