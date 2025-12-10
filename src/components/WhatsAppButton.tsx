import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-medium hover:shadow-glow transition-smooth hover:scale-105"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
