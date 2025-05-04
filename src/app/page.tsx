import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
  {/* Blur ve karartmalı arka plan */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/banner1.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(8px) brightness(0.4)",
    }}
  />

  {/* İçerik */}
  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
      Custom Printing, Crafted for You
    </h1>
    <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
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
                src="/rug.jpeg"
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
                src="/towel.jpeg"
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
                src="/floormat.png"
                alt="Printed Floormat"
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="printed floormat"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Adorable Floormat</h3>
                <p className="text-muted-foreground text-sm">Custom-printed floormats for comfort.</p>
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
