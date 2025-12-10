import { useState, useEffect, useCallback, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import midia1 from "@/assets/gallery/midia_1.jpg";
import midia2 from "@/assets/gallery/midia_2.jpg";
import midia3 from "@/assets/gallery/midia_3.jpg";
import midia4 from "@/assets/gallery/midia_4.jpg";
import midia5 from "@/assets/gallery/midia_5.jpg";
import midia6 from "@/assets/gallery/midia_6.jpg";
import midia7 from "@/assets/gallery/midia_7.jpg";

type GalleryItem = {
  src: string;
  alt: string;
  type: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  { src: midia1, alt: "Forro de gesso moderno em ambiente comercial", type: "image" },
  { src: midia2, alt: "Forro modular com iluminação embutida", type: "image" },
  { src: "/midia_6.mp4", alt: "Vídeo de instalação de gesso", type: "video" },
  { src: midia3, alt: "Instalação de divisórias drywall", type: "image" },
  { src: midia4, alt: "Trabalho de isolamento térmico com steel frame", type: "image" },
  { src: "/midia_9.mp4", alt: "Vídeo de projeto em andamento", type: "video" },
  { src: midia5, alt: "Obra em andamento com estrutura de gesso", type: "image" },
  { src: midia6, alt: "Instalação de forro de gesso em residência", type: "image" },
  { src: "/midia_11.mp4", alt: "Vídeo de acabamento de gesso", type: "video" },
  { src: midia7, alt: "Fachada da empresa Globo Gesso", type: "image" },
];

export function GallerySection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const currentItem = galleryItems[currentIndex];
    
    if (currentItem.type === "image") {
      // For images, wait 3 seconds then advance
      const timeout = setTimeout(() => {
        scrollNext();
      }, 3000);
      return () => clearTimeout(timeout);
    }
    // For videos, the onEnded handler will trigger scrollNext
  }, [api, currentIndex, scrollNext]);

  const handleVideoEnd = useCallback(() => {
    scrollNext();
  }, [scrollNext]);

  const registerVideoRef = useCallback((index: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(index, el);
    } else {
      videoRefs.current.delete(index);
    }
  }, []);

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nossos trabalhos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-heading">
            Galeria de projetos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados com excelência e dedicação.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card 
                    className="overflow-hidden cursor-pointer group border-border/50 hover:border-primary/30 transition-smooth"
                    onClick={() => setSelectedItem(item)}
                  >
                    <CardContent className="p-0 aspect-square relative">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <video
                          ref={(el) => registerVideoRef(index, el)}
                          src={item.src}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          autoPlay
                          muted
                          playsInline
                          onEnded={handleVideoEnd}
                        />
                      )}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth flex items-center justify-center">
                        <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-smooth font-medium">
                          Clique para ampliar
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Dialog para mídia expandida */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedItem && (
              selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  className="w-full h-auto rounded-lg"
                  autoPlay
                  muted
                  playsInline
                  controls={false}
                />
              )
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
