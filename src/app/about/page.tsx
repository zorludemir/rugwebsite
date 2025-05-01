import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Factory, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About PrintCraft Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Founded with a passion for quality and creativity, PrintCraft Showcase started as a small workshop dedicated to bringing custom designs to life on everyday textiles. Over the years, we've grown into a state-of-the-art facility, but our core commitment to craftsmanship and customer satisfaction remains unchanged.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that personalization adds a unique touch to homes and lives. Our mission is to provide businesses and individuals with high-quality, custom-printed rugs, towels, and blankets that stand out.
          </p>
        </div>
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://picsum.photos/800/600?random=4"
            alt="Factory Interior"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="factory interior"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="items-center">
            <Factory className="w-12 h-12 text-accent mb-4" />
            <CardTitle className="text-2xl">Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              With years of experience, our team utilizes advanced printing technology and techniques to ensure vibrant, lasting prints on various textiles.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="items-center">
            <BadgeCheck className="w-12 h-12 text-accent mb-4" />
            <CardTitle className="text-2xl">Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We source high-quality materials and implement rigorous quality control to deliver products that meet the highest standards of durability and aesthetics.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="items-center">
            <Heart className="w-12 h-12 text-accent mb-4" />
            <CardTitle className="text-2xl">Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We value creativity, collaboration, and customer satisfaction. We strive to build lasting relationships based on trust and exceptional service.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
