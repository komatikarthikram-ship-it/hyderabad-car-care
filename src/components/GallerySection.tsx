import { motion } from "framer-motion";
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

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-section-alt">
    <div className="container mx-auto">
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-xl aspect-[4/3]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-secondary-foreground font-heading font-bold text-lg uppercase tracking-wide">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
