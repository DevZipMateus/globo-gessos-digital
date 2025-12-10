import { Button } from "@/components/ui/button";
import { ShoppingBag, Paintbrush, Hammer, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-parallax";

const services = [
  {
    icon: ShoppingBag,
    title: "Venda de materiais",
    description: "Oferecemos uma linha completa de materiais para gesso e drywall, com produtos de alta qualidade e os melhores preços do mercado.",
  },
  {
    icon: Paintbrush,
    title: "Instalação e acabamento",
    description: "Da venda ao acabamento, tudo em um só lugar. Equipe especializada para instalação de forros, divisórias e revestimentos.",
  },
  {
    icon: Hammer,
    title: "Reformas",
    description: "Transformamos ambientes com reformas completas, desde a estrutura até o acabamento final, com qualidade e agilidade.",
  },
];

export function ServicesSection() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Soluções completas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-heading">
              Nossos serviços
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Trabalhamos com prestação de serviços, venda de materiais e reformas, entregando praticidade, 
              qualidade e resultados que transformam ambientes. Nossa equipe está preparada para atender 
              desde pequenos projetos até grandes obras.
            </p>
            <Button asChild variant="default" size="lg">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Solicitar orçamento
              </a>
            </Button>
          </div>

          <div 
            ref={rightRef}
            className={`space-y-6 transition-all duration-700 delay-200 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex gap-6 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-smooth border border-border/50 hover:border-primary/30"
              >
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
