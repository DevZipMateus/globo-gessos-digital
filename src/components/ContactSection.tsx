import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-parallax";

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Hilda Garcia, 16",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "Globo Gessos",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "globo.gesso@uol.com.br",
    href: "mailto:globo.gesso@uol.com.br",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a sexta das 7:30h às 18:00",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/globogesso",
  },
  {
    icon: Globe,
    label: "Website",
    href: "https://www.globogesso.com.br",
  },
];

export function ContactSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardRef, cardVisible] = useScrollReveal();

  return (
    <section id="contato" className="py-20 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 font-heading">
            Entre em contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Estamos prontos para atender você e transformar seu projeto em realidade.
          </p>
        </div>

        <div 
          ref={cardRef}
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            cardVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium border border-border/50">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground font-heading mb-6">
                  Informações de contato
                </h3>
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-primary transition-smooth"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-hero rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4 font-heading">
                    Solicite seu orçamento
                  </h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Entre em contato pelo WhatsApp e receba um atendimento personalizado.
                  </p>
                  <Button asChild variant="heroOutline" size="lg" className="w-full">
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-5 h-5" />
                      Chamar no WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Siga-nos nas redes sociais</p>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
