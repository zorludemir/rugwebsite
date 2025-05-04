import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Search, Palette, Package, Feather, ShieldCheck, Droplet } from 'lucide-react';

// Content from original About page
const OurStory = () => (
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
        src="/test.jpg"
        alt="Factory Interior"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out hover:scale-105"
        data-ai-hint="factory interior"
      />
    </div>
  </div>
);

// Content from original Process page
const processSteps = [
  {
    icon: Palette,
    title: '1. Design Preparation',
    description: 'We work with your design files, ensuring they are optimized for high-resolution printing on your chosen textile (rug, towel, or blanket). Color matching and proofing are key parts of this stage.',
    image: 'https://picsum.photos/600/400?random=5',
    aiHint: 'design software screen'
  },
  {
    icon: CheckCircle, // Replaced Printer icon as it's used in header
    title: '2. Material Selection & Prep',
    description: 'The selected base material (rug, towel, or blanket) is carefully inspected and prepared. This may involve pre-treatment to ensure optimal ink absorption and color vibrancy.',
    image: 'https://picsum.photos/600/400?random=6',
    aiHint: 'textile roll fabric'
  },
  {
    icon: CheckCircle, // Replaced Printer icon as it's used in header
    title: '3. Digital Printing',
    description: 'Using state-of-the-art digital printing technology, your design is accurately transferred onto the material. Our machines handle intricate details and wide color gamuts.',
    image: 'https://picsum.photos/600/400?random=7',
    aiHint: 'large format printer textile'
  },
  {
    icon: Search,
    title: '4. Finishing & Quality Control',
    description: 'After printing, the product undergoes finishing processes like heat setting (if required) for durability. Each item is meticulously inspected for print quality, color accuracy, and material integrity.',
    image: 'https://picsum.photos/600/400?random=8',
    aiHint: 'quality control inspection textile'
  },
  {
    icon: Package,
    title: '5. Packaging & Shipping',
    description: 'Finally, your custom-printed product is carefully packaged to ensure it arrives in perfect condition, ready to be used or displayed.',
    image: 'https://picsum.photos/600/400?random=9',
    aiHint: 'packaging shipping box'
  },
];

const OurProcess = () => (
  <section className="mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Production Process</h2>
    <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
      From design to delivery, we follow a meticulous process to ensure the highest quality custom-printed textiles.
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
  </section>
);

// Content from original Quality page
const OurQuality = () => (
   <section>
     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Uncompromising Quality</h2>
     <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
       We believe that exceptional custom prints deserve exceptional materials and craftsmanship.
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
         <h3 className="text-2xl font-semibold mb-4">Premium Materials</h3>
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
         <h3 className="text-2xl font-semibold mb-4">Lasting Prints</h3>
         <p className="text-lg text-muted-foreground leading-relaxed mb-4">
           Our advanced printing process ensures that your custom designs are not just beautiful, but also durable. We use high-quality, fade-resistant inks and appropriate finishing techniques.
         </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
           Prints maintain their vibrancy even after washing (following care instructions). The ink bonds effectively with the fabric, minimizing cracking or peeling over time.
         </p>
       </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
         <CardHeader>
           <CardTitle className="text-xl">Rugs</CardTitle>
         </CardHeader>
         <CardContent>
           <p className="text-muted-foreground">
             Durable top layer for vibrant printing, non-slip backing. Designed for foot traffic.
           </p>
         </CardContent>
       </Card>
       <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
         <CardHeader>
           <CardTitle className="text-xl">Towels</CardTitle>
         </CardHeader>
         <CardContent>
           <p className="text-muted-foreground">
             Soft, absorbent materials suitable for everyday use. Withstand regular washing.
           </p>
         </CardContent>
       </Card>
       <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
         <CardHeader>
           <CardTitle className="text-xl">Blankets</CardTitle>
         </CardHeader>
         <CardContent>
           <p className="text-muted-foreground">
             Cozy yet durable fabrics. Provide warmth and comfort, prints remain vibrant.
           </p>
         </CardContent>
       </Card>
     </div>
   </section>
);


export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About PrintCraft Showcase</h1>

      {/* Our Story Section */}
      <OurStory />

      <Separator className="my-16 md:my-24" />

      {/* Our Process Section */}
      <OurProcess />

       <div className="mt-16 text-center bg-secondary p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Commitment to Quality</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Quality control is integrated into every step of our process. We are dedicated to delivering products that not only look great but also last.
        </p>
      </div>

      <Separator className="my-16 md:my-24" />

      {/* Our Quality Section */}
      <OurQuality />

    </div>
  );
}