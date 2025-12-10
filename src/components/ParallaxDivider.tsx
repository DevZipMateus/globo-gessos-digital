import { useParallax } from "@/hooks/use-parallax";

interface ParallaxDividerProps {
  imageSrc: string;
  alt: string;
  height?: string;
}

export const ParallaxDivider = ({ imageSrc, alt, height = "h-64 md:h-80 lg:h-96" }: ParallaxDividerProps) => {
  const [ref, offset] = useParallax(0.3);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          transform: `translateY(${offset * 0.1}px)`,
        }}
        role="img"
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-gradient-overlay opacity-40" />
    </div>
  );
};
