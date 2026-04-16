import { motion } from "framer-motion";
import { Star, Clock, IndianRupee, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import ParticleBackground from "./ParticleBackground";
import FloatingElements from "./FloatingElements";

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

    {/* Particle overlay */}
    <ParticleBackground className="z-[1]" />
    <FloatingElements />

    <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase backdrop-blur-sm"
        >
          Multi-Brand Car Service Center
        </motion.span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-hero-foreground leading-tight mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block"
          >
            Trusted Multi Brand
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-primary block"
          >
            Car Repairs
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="block"
          >
            in Hyderabad
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-hero-muted text-lg md:text-xl mb-8 max-w-xl"
        >
          Expert denting, painting, diagnostics & servicing — all under one roof.
          Honest work. Transparent pricing. Every time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249,115,22,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-heading font-semibold text-lg hover:brightness-110 transition uppercase tracking-wide"
          >
            Book Service
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919908821555"
            className="border-2 border-hero-foreground/30 text-hero-foreground px-8 py-3.5 rounded-md font-heading font-semibold text-lg hover:bg-hero-foreground/10 transition uppercase tracking-wide"
          >
            Call Now
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
      >
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
            className="flex items-center gap-3 bg-hero-foreground/5 backdrop-blur-md rounded-lg p-4 border border-hero-foreground/10 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              <h.icon className="text-primary shrink-0" size={28} />
            </motion.div>
            <div>
              <div className="text-hero-foreground font-semibold text-sm">{h.label}</div>
              <div className="text-hero-muted text-xs">{h.sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
