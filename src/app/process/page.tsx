import Image from 'next/image';
import { CheckCircle, Search, Palette, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function ProcessPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Production Process</h1>
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

      <div className="mt-20 text-center bg-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Commitment to Quality</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Quality control is integrated into every step of our process. We are dedicated to delivering products that not only look great but also last.
        </p>
      </div>
    </div>
  );
}
