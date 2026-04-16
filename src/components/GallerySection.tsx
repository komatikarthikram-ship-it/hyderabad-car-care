import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import galleryPaint from "@/assets/gallery-paint.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import galleryCustomer from "@/assets/gallery-customer.jpg";
import galleryAlloy from "@/assets/gallery-alloy.jpg";
import galleryDiagnostics from "@/assets/gallery-diagnostics.jpg";
import heroImg from "@/assets/hero-workshop.jpg";

const images = [
  { src: galleryWorkshop, alt: "SS Auto Hub workshop interior", label: "Workshop" },
  { src: galleryPaint, alt: "Before and after car painting", label: "Paint Jobs" },
  { src: galleryCustomer, alt: "Customer car after service", label: "Customer Cars" },
  { src: galleryAlloy, alt: "Alloy wheel painting", label: "Alloy Wheels" },
  { src: galleryDiagnostics, alt: "Car diagnostics", label: "Diagnostics" },
  { src: heroImg, alt: "Mechanic at work", label: "Our Team" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-section-alt relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Gallery</span>
          <h2 className="section-title mt-2">Our <span className="text-primary">Work</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <ZoomIn className="text-primary" size={28} />
                <span className="text-secondary-foreground font-heading font-bold text-lg uppercase tracking-wide">
                  {img.label}
                </span>
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              whileHover={{ scale: 1.2, rotate: 90 }}
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 text-white font-heading text-xl uppercase tracking-wider"
            >
              {images[selected].label}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
