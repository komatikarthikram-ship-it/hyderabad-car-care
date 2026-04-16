import { motion } from "framer-motion";
import { Star, Clock, IndianRupee, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";

const highlights = [
  { icon: Star, label: "4.9 Rating", sub: "Google Reviews" },
  { icon: Wrench, label: "Expert Techs", sub: "Certified Team" },
  { icon: IndianRupee, label: "Fair Pricing", sub: "No Hidden Costs" },
  { icon: Clock, label: "Quick Service", sub: "Same Day Delivery" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="SS Auto Hub workshop" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero/80" />
    </div>

    <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
          Multi-Brand Car Service Center
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-hero-foreground leading-tight mb-6">
          Trusted Multi Brand{" "}
          <span className="text-primary">Car Repairs</span> in Hyderabad
        </h1>
        <p className="text-hero-muted text-lg md:text-xl mb-8 max-w-xl">
          Expert denting, painting, diagnostics & servicing — all under one roof.
          Honest work. Transparent pricing. Every time.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-heading font-semibold text-lg hover:brightness-110 transition uppercase tracking-wide"
          >
            Book Service
          </a>
          <a
            href="tel:+919908821555"
            className="border-2 border-hero-foreground/30 text-hero-foreground px-8 py-3.5 rounded-md font-heading font-semibold text-lg hover:bg-hero-foreground/10 transition uppercase tracking-wide"
          >
            Call Now
          </a>
        </div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
      >
        {highlights.map((h) => (
          <div key={h.label} className="flex items-center gap-3 bg-hero-foreground/5 backdrop-blur-sm rounded-lg p-4 border border-hero-foreground/10">
            <h.icon className="text-primary shrink-0" size={28} />
            <div>
              <div className="text-hero-foreground font-semibold text-sm">{h.label}</div>
              <div className="text-hero-muted text-xs">{h.sub}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
