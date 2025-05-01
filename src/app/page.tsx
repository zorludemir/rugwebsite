import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card to-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
            Custom Printing, Crafted for You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            High-quality, personalized printing on rugs, towels, and blankets. Bring your designs to life with PrintCraft Showcase.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-card">
              <Image
                src="https://picsum.photos/600/400?random=1"
                alt="Printed Rug"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="printed rug"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Custom Rugs</h3>
                <p className="text-muted-foreground text-sm">Durable and vibrant prints for your floors.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-card">
              <Image
                src="https://picsum.photos/600/400?random=2"
                alt="Printed Towel"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="printed towel"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Personalized Towels</h3>
                <p className="text-muted-foreground text-sm">Soft and absorbent towels with your unique design.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md bg-card">
              <Image
                src="https://picsum.photos/600/400?random=3"
                alt="Printed Blanket"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="printed blanket"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Cozy Blankets</h3>
                <p className="text-muted-foreground text-sm">Warm and custom-printed blankets for comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Custom Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your ideas and get a quote.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
