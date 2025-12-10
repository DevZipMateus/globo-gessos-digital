import { useState, useEffect, useCallback } from "react";
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

const galleryImages = [
  { src: midia1, alt: "Forro de gesso moderno em ambiente comercial" },
  { src: midia2, alt: "Forro modular com iluminação embutida" },
  { src: midia3, alt: "Instalação de divisórias drywall" },
  { src: midia4, alt: "Trabalho de isolamento térmico com steel frame" },
  { src: midia5, alt: "Obra em andamento com estrutura de gesso" },
  { src: midia6, alt: "Instalação de forro de gesso em residência" },
  { src: midia7, alt: "Fachada da empresa Globo Gesso" },
];

export function GallerySection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, scrollNext]);

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
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card 
                    className="overflow-hidden cursor-pointer group border-border/50 hover:border-primary/30 transition-smooth"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <CardContent className="p-0 aspect-square relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
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

        {/* Dialog para imagem expandida */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagem ampliada do projeto"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
