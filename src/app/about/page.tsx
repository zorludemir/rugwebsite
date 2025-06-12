"use client";
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WorldMapWithMarkers = dynamic(() => import('@/components/WorldMapWithMarkers'), { ssr: false });

// Content for Our Story
const OurStory = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Founded with a passion for quality and creativity, EUROSER started as a small workshop dedicated to bringing custom designs to life on high-quality rug canvases. Over the years, we've grown into a state-of-the-art facility, but our core commitment to craftsmanship and customer satisfaction remains unchanged.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We believe that personalization adds a unique touch to homes and lives. Our mission is to provide businesses and individuals with premium, custom-printed rugs that stand out.
      </p>
    </div>
    <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/img/factory.jpg"
        alt="EUROSER Workshop"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out hover:scale-105"
        data-ai-hint="rug workshop"
      />
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About EUROSER</h1>

      {/* Our Story Section */}
      <OurStory />

      

      

      {/* World Map Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Global Reach</h2>
        <p className="text-lg text-muted-foreground text-center mb-8">
          We have delivered rugs to customers all around the world. Explore our global presence below.
        </p>
        <WorldMapWithMarkers />
      </div>
<div className="text-center bg-card p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          At EUROSER, we are dedicated to delivering exceptional quality and innovative solutions for all your custom rug printing needs. Our focus on craftsmanship, customer satisfaction, and sustainable practices drives everything we do.
        </p>
      </div>
    </div>
  );
}

