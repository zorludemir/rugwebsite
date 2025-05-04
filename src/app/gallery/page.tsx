import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryItems = [
  { id: 1, category: 'rugs', src: '/dino2.png', alt: 'Custom Printed Rug 1', aiHint: 'detailed printed rug pattern' },
  { id: 2, category: 'rugs', src: '/customdoor2.png', alt: 'Custom Printed Towel 1', aiHint: 'beach towel design print' },
  { id: 3, category: 'rugs', src: '/animal3.png', alt: 'Custom Printed Blanket 1', aiHint: 'photo collage blanket print' },
  { id: 4, category: 'rugs', src: '/hugecity2.png', alt: 'Custom Printed Rug 2', aiHint: 'logo printed rug corporate' },
  { id: 5, category: 'rugs', src: '/retro14.png', alt: 'Custom Printed Towel 2', aiHint: 'sports team towel print' },
  { id: 6, category: 'rugs', src: '/retro33.png', alt: 'Custom Printed Blanket 2', aiHint: 'artistic design blanket print' },
  { id: 7, category: 'rugs', src: '/retro51.png', alt: 'Custom Printed Rug 3', aiHint: 'childrens room rug design' },
  { id: 8, category: 'rugs', src: '/winterplay1.png', alt: 'Custom Printed Towel 3', aiHint: 'monogrammed bath towel' },
  { id: 9, category: 'rugs', src: '/poker3.png', alt: 'Custom Printed Blanket 3', aiHint: 'landscape photo blanket print' },
];

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'rugs', label: 'Rugs' },
  { value: 'towels', label: 'Towels' },
  { value: 'blankets', label: 'Blankets' },
];

export default function GalleryPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Gallery</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
        Explore examples of our custom printing work on various textiles.
      </p>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-10 max-w-lg mx-auto">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems
                .filter(item => category.value === 'all' || item.category === category.value)
                .map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                      data-ai-hint={item.aiHint}
                    />
                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                        {item.alt}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
             {galleryItems.filter(item => category.value === 'all' || item.category === category.value).length === 0 && (
               <p className="text-center text-muted-foreground mt-8">No items found in this category yet.</p>
             )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// Add aspect ratio plugin styles manually if not included by default in tailwind config
// You might need a tailwind plugin like `@tailwindcss/aspect-ratio` or add custom CSS:
/*
@layer utilities {
  .aspect-w-1 { --tw-aspect-w: 1; }
  .aspect-h-1 { --tw-aspect-h: 1; }
  .aspect-w-16 { --tw-aspect-w: 16; }
  .aspect-h-9 { --tw-aspect-h: 9; }

  @supports (aspect-ratio: 1 / 1) {
    .aspect-w-1 { aspect-ratio: var(--tw-aspect-w) / var(--tw-aspect-h); }
    .aspect-h-1 { }
    .aspect-w-16 { aspect-ratio: var(--tw-aspect-w) / var(--tw-aspect-h); }
    .aspect-h-9 { }
  }
}
*/
