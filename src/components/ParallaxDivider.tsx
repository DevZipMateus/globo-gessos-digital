import { useEffect, useRef, useState } from "react";

interface ParallaxDividerProps {
  imageSrc: string;
  alt: string;
  height?: string;
}

export const ParallaxDivider = ({ imageSrc, alt, height = "h-64 md:h-80 lg:h-96" }: ParallaxDividerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far the element is from the center of the viewport
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;
        
        // Apply parallax effect - image moves slower than scroll
        setOffset(distanceFromCenter * 0.4);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${height} overflow-hidden`}>
      <div
        className="absolute inset-x-0 h-[150%] -top-[25%] will-change-transform"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
        role="img"
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-gradient-overlay opacity-30" />
    </div>
  );
};
