import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productItems = [
  { id: 1, type: 'rectangular', src: 'https://picsum.photos/seed/rect1/600/400', alt: 'Blank Rectangular Wool Rug', aiHint: 'wool rug' },
  { id: 2, type: 'round', src: 'https://picsum.photos/seed/round1/600/400', alt: 'Blank Circular Jute Rug', aiHint: 'jute rug' },
  { id: 3, type: 'runner', src: 'https://picsum.photos/seed/runner1/600/400', alt: 'Blank Runner Synthetic Rug', aiHint: 'runner rug' },
  { id: 4, type: 'rectangular', src: 'https://picsum.photos/seed/rect2/600/400', alt: 'Blank Square Cotton Rug', aiHint: 'cotton rug' },
  { id: 5, type: 'rectangular', src: 'https://picsum.photos/seed/large1/600/400', alt: 'Large Area Blank Rug - Customizable', aiHint: 'large rug' },
  { id: 6, type: 'shag', src: 'https://picsum.photos/seed/shag1/600/400', alt: 'Textured Blank Shag Rug', aiHint: 'shag rug' },
  { id: 7, type: 'round', src: 'https://picsum.photos/seed/round2/600/400', alt: 'Small Blank Round Accent Rug', aiHint: 'accent rug' },
  { id: 8, type: 'runner', src: 'https://picsum.photos/seed/runner2/600/400', alt: 'Narrow Blank Hallway Runner', aiHint: 'hallway runner' },
];

const categories = [
  { value: 'all', label: 'All Rugs' },
  { value: 'rectangular', label: 'Rectangular' },
  { value: 'round', label: 'Round' },
  { value: 'runner', label: 'Runners' },
  { value: 'shag', label: 'Shag Rugs'}
];

export default function ProductsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Blank Rug Products</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
        Choose the perfect blank canvas for your custom rug design. We offer a variety of shapes, sizes, and materials.
      </p>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-10 max-w-2xl mx-auto">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productItems
                .filter(item => category.value === 'all' || item.type === category.value)
                .map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 bg-card">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                      data-ai-hint={item.aiHint}
                    />
                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {item.alt}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
             {productItems.filter(item => category.value === 'all' || item.type === category.value).length === 0 && (
               <p className="text-center text-muted-foreground mt-8">No {category.label.toLowerCase()} found yet. Explore other categories!</p>
             )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
