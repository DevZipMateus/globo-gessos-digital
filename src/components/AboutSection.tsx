import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-parallax";

const values = [
  "Compromisso e excelência em produtos e serviços",
  "Busca constante por melhorias e inovações",
  "Respeito ao meio ambiente em todas as etapas",
  "Transparência e honestidade em todas as relações",
  "Cliente em primeiro lugar",
];

export function AboutSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [historyRef, historyVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Quem somos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-heading">
            Sobre a Globo Gessos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Desde 2009 transformando espaços com dedicação, qualidade e inovação contínua.
          </p>
        </div>

        {/* História */}
        <div 
          ref={historyRef}
          className={`max-w-4xl mx-auto mb-20 transition-all duration-700 delay-200 ${
            historyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">Nossa história</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa empresa foi fundada em 2009 com o objetivo de crescer e se destacar no mercado de trabalho. 
              Desde o início, nossa missão tem como objetivo em crescimento sustentável, dedicação e melhoria contínua. 
              Ao longo desses anos, buscamos constantemente inovações e soluções que atendam às necessidades dos nossos clientes, 
              mantendo sempre o compromisso com a qualidade e a excelência. Nosso foco em melhorias nos permitiu evoluir e 
              adaptar às mudanças do mercado, garantindo sempre a satisfação dos nossos clientes.
            </p>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-300 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4 font-heading">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proporcionar produtos e serviços de alta qualidade em gesso que atendam às necessidades dos nossos clientes, 
              com foco em sustentabilidade, inovação, excelência no atendimento e prestação de serviços personalizados.
            </p>
          </div>

          <div className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border/50">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-smooth">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4 font-heading">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a principal fornecedora e prestadora de serviços e soluções em gesso e serviços relacionados, 
              oferecendo inovação e qualidade para transformar espaços.
            </p>
          </div>

          <div className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4 font-heading">Valores</h3>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
