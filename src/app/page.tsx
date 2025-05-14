
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getProductBySlug } from '@/services/productService';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/types/product';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Palette, Printer, Scissors, ShieldCheck, Feather, Droplet, Layers, Package, ScanEye } from 'lucide-react';

// Updated Process Steps Data
const processSteps = [
  {
    icon: ScanEye,
    title: '1. Design Preparation',
    description: "The process begins when we receive your custom designs. Our team meticulously checks each design, ensuring it's in the correct file format and optimized for the selected rug dimensions. We make any necessary adjustments to guarantee a flawless print outcome.",
    image: '/img/design_prep_image.jpg',
    aiHint: 'design review software'
  },
  {
    icon: Printer,
    title: '2. Printing',
    description: "Once designs are finalized, they are printed onto a specialized three-layer coated paper using a high-precision industrial printer. This advanced paper is crucial for achieving high-quality color transfer, ensuring vibrant and detailed visuals on the final rug.",
    image: '/img/printing_process_image.jpg',
    aiHint: 'large format printer'
  },
  {
    icon: Layers,
    title: '3. Transfer Process with Heat Press',
    description: 'The rug, initially prepared in its white base form, is carefully placed inside a heat press machine. The printed transfer paper is positioned directly on top of the rug surface. Through a controlled heat and pressure process, the design from the paper is sublimated onto the rug’s pile. This thermal transfer technique ensures that the colors are vivid, long-lasting, and deeply embedded into the fibers.',
    image: '/img/heat_press_image.jpg',
    aiHint: 'heat press rug'
  },
  {
    icon: Scissors,
    title: '4. Finishing and Edge Work',
    description: 'After the transfer is complete, the rug undergoes several finishing procedures. These include trimming the edges, reinforcing the corners, and ensuring all surface details are smooth and precise. This step ensures that the rug not only looks polished but also meets durability standards for everyday use.',
    image: '/img/finishing_edge_work_image.jpg',
    aiHint: 'rug finishing edge'
  },
  {
    icon: ShieldCheck,
    title: '5. Quality Control, Packaging, and Shipping',
    description: 'Every rug is subjected to strict quality control checks. Each piece is thoroughly inspected for print accuracy, texture consistency, and edge finishing. Once approved, the rug is vacuum-packed to reduce size and protect it during transport. This compact packaging method also allows for efficient and eco-friendly shipping to customers worldwide.',
    image: '/img/quality_control_packaging_image.jpg',
    aiHint: 'quality control rug'
  },
];

// Our Production Process Component
const OurProductionProcess = () => (
  <section className="py-16 bg-secondary">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Production Process</h2>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        From design to delivery, we follow a meticulous process to ensure the highest quality custom-printed rugs.
      </p>
      <div className="space-y-16">
        {processSteps.map((step, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md group">
              <Image
                src={step.image}
                alt={step.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={step.aiHint}
              />
            </div>
            <div className="md:w-1/2">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader className="flex flex-row items-center gap-4 p-0 pb-4">
                  <step.icon className="w-10 h-10 text-accent flex-shrink-0" />
                  <CardTitle className="text-2xl md:text-3xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center bg-background p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Commitment to Excellence</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Quality control is integrated into every step of our process. We are dedicated to delivering rug products that not only look great but also last.
        </p>
      </div>
    </div>
  </section>
);

// Our Quality Commitment Component
const OurQualityCommitment = () => (
   <section className="py-16 bg-background">
     <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Uncompromising Quality</h2>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        We believe that exceptional custom prints deserve exceptional rug materials and craftsmanship.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
          <Image
            src="/img/rug_texture_closeup.jpg"
            alt="Close up of rug texture"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="rug texture textile"
          />
        </div>
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4">Premium Rug Materials</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We carefully select the base materials for our rugs. Our criteria include softness, durability, and suitability for high-resolution printing.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><Feather className="w-5 h-5 text-accent" /> Soft and comfortable textures</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-accent" /> Durable construction for longevity</li>
            <li className="flex items-center gap-2"><Droplet className="w-5 h-5 text-accent" /> Excellent ink absorption for vibrant prints</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/img/vibrant_printed_rug.jpg"
            alt="Vibrant printed rug detail"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="printed rug color detail"
          />
        </div>
          <div>
          <h3 className="text-2xl font-semibold mb-4">Lasting Prints</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Our advanced printing process ensures that your custom designs are not just beautiful, but also durable. We use high-quality, fade-resistant inks and appropriate finishing techniques.
          </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Prints maintain their vibrancy even after normal use and cleaning (following care instructions). The ink bonds effectively with the rug fibers, minimizing fading or wear over time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-card hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl">Area Rugs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Durable top layer for vibrant printing, non-slip backing options. Designed for foot traffic and everyday use.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl">Runner Rugs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Perfect for hallways and narrow spaces. Customizable lengths and durable materials.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl">Accent Rugs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Variety of shapes (round, square, custom) to add a unique touch to any room. Prints remain vibrant.
            </p>
          </CardContent>
        </Card>
      </div>
     </div>
   </section>
);


export default async function Home() {
  const featuredProductSlugs = ['damla', 'inci', 'bambu'];
  const featuredProductsPromises = featuredProductSlugs.map(slug => getProductBySlug(slug));
  const resolvedProducts = await Promise.all(featuredProductsPromises);
  const featuredProducts = resolvedProducts.filter(product => product !== null) as Product[];

  // Duplicate products for seamless animation if there are products
  const duplicatedFeaturedProducts = featuredProducts.length > 0 ? [...featuredProducts, ...featuredProducts] : [];


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/banner.png')", // Ensure this image exists in public/img
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-5 bg-black/50 backdrop-blur-sm"></div> {/* Overlay for darkening and blur */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Custom Rugs, Crafted by EUROSER
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground mb-10 max-w-3xl mx-auto drop-shadow-sm">
            High-quality, personalized printing on a variety of blank rugs. Bring your designs to life with EUROSER.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="/products">Explore Blank Rugs</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section - Auto-scrolling Carousel */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Blank Rugs</h2>
          {featuredProducts.length > 0 ? (
            <div className="overflow-hidden w-full relative"> {/* Carousel container - clips content */}
              <div
                className="flex animate-marquee hover:animate-pause" // Inner wrapper for scrolling items
              >
                {duplicatedFeaturedProducts.map((product, index) => (
                  <div 
                    key={`${product.id}-${index}`} 
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(100%/3)] px-2" // Each item takes ~1/3 width on large screens
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Featured products are currently unavailable.
            </p>
          )}
           <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Production Process Section */}
      <OurProductionProcess />

      {/* Our Quality Commitment Section */}
      <OurQualityCommitment />

      {/* Call to Action Section */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Design Your Custom Rug?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Contact us today to discuss your ideas and get a quote for your EUROSER rug.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
