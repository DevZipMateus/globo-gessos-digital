import { Package, Layers, Grid3X3, Wrench, Building } from "lucide-react";

const products = [
  {
    icon: Building,
    title: "Steel frame",
    description: "Sistema construtivo moderno e sustentável com estrutura em aço galvanizado, ideal para construções rápidas e duráveis.",
  },
  {
    icon: Layers,
    title: "Forros",
    description: "Forros de gesso e drywall para ambientes residenciais e comerciais, com acabamento impecável e excelente isolamento acústico.",
  },
  {
    icon: Grid3X3,
    title: "Divisórias drywall",
    description: "Divisórias leves e versáteis que permitem layouts flexíveis, com ótimo isolamento térmico e acústico.",
  },
  {
    icon: Package,
    title: "Gesso comum",
    description: "Gesso de alta qualidade para revestimentos, molduras e acabamentos decorativos tradicionais.",
  },
  {
    icon: Wrench,
    title: "Ferragem em geral",
    description: "Linha completa de ferragens e materiais de fixação para todos os tipos de instalação em gesso e drywall.",
  },
];

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-heading">
            Nossos produtos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Materiais de primeira qualidade para transformar qualquer ambiente com durabilidade e beleza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <product.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
