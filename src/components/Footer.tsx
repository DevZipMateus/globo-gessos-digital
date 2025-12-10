import logo from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Globo Gessos - Logo"
              className="h-10 w-auto"
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              CNPJ: 11.205.096/0001-40
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              © {currentYear} Globo Gessos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
