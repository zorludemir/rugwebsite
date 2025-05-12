import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-card">
              <Image
                src="https://picsum.photos/seed/fpRect/600/400"
                alt="Blank Rectangular Rug"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="rectangular rug"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Blank Rectangular Rugs</h3>
                <p className="text-muted-foreground text-sm">Versatile canvas for classic and modern designs.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-card">
              <Image
                src="https://picsum.photos/seed/fpRound/600/400"
                alt="Blank Round Rug"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="round rug"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Blank Round Rugs</h3>
                <p className="text-muted-foreground text-sm">Perfect for unique focal points and creative layouts.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-card">
              <Image
                src="https://picsum.photos/seed/fpRunner/600/400"
                alt="Blank Runner Rug"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="runner rug"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Blank Runner Rugs</h3>
                <p className="text-muted-foreground text-sm">Ideal for hallways, entryways, and custom lengths.</p>
              </div>
            </div>
          </div>
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
