import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Feather, ShieldCheck, Droplet } from 'lucide-react';

export default function QualityPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Uncompromising Quality</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        We believe that exceptional custom prints deserve exceptional materials. Learn more about the quality and durability of our products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
          <Image
            src="https://picsum.photos/800/600?random=10"
            alt="Close up of fabric texture"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="fabric texture textile"
          />
        </div>
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold mb-4">Premium Materials</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We carefully select the base materials for our rugs, towels, and blankets. Our criteria include softness, durability, and suitability for high-resolution printing.
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
            src="https://picsum.photos/800/600?random=11"
            alt="Vibrant printed textile detail"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="printed textile color detail"
          />
        </div>
         <div>
          <h2 className="text-3xl font-semibold mb-4">Lasting Prints</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Our advanced printing process ensures that your custom designs are not just beautiful, but also durable. We use high-quality, fade-resistant inks and appropriate finishing techniques.
          </p>
           <p className="text-lg text-muted-foreground leading-relaxed">
            Prints maintain their vibrancy even after washing (following care instructions). The ink bonds effectively with the fabric, minimizing cracking or peeling over time.
          </p>
        </div>
      </div>


      <h2 className="text-3xl font-bold text-center mb-12 mt-20">Product Specifics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Rugs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our custom rugs feature a durable top layer for vibrant printing and a non-slip backing for safety. Designed for foot traffic while maintaining print quality.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Towels</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Printed on soft, absorbent materials suitable for everyday use. The prints are designed to withstand regular washing while staying soft to the touch.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Blankets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Cozy yet durable fabrics that showcase prints beautifully. Our blankets provide warmth and comfort, with prints that remain vibrant wash after wash.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
