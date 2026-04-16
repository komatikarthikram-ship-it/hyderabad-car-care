import { motion } from "framer-motion";
import { Wrench, Paintbrush, Car, CircleDot, Activity, Settings } from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Wrench, title: "Car General Service", desc: "Complete multi-point inspection, oil change, filter replacement and essential maintenance.", color: "from-orange-500/20 to-orange-600/5" },
  { icon: Paintbrush, title: "Denting & Painting", desc: "Expert body repair and premium painting to restore your car's showroom finish.", color: "from-blue-500/20 to-blue-600/5" },
  { icon: Car, title: "Full Body Repainting", desc: "Complete respray with color-matching technology and factory-quality clear coat.", color: "from-green-500/20 to-green-600/5" },
  { icon: CircleDot, title: "Alloy Wheel Painting", desc: "Restore scratched or faded alloy wheels with durable powder coating and custom finishes.", color: "from-purple-500/20 to-purple-600/5" },
  { icon: Activity, title: "Diagnostics & Repairs", desc: "Advanced OBD diagnostics to pinpoint issues. Engine, electrical, suspension and more.", color: "from-red-500/20 to-red-600/5" },
  { icon: Settings, title: "Multi-Brand Servicing", desc: "Expertise across all major brands — Maruti, Hyundai, Honda, Toyota, Kia, Tata and more.", color: "from-yellow-500/20 to-yellow-600/5" },
];

const ServiceCard = ({ s, i }: { s: typeof services[0]; i: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
      }}
      className="group relative bg-card rounded-xl p-7 border border-border hover:border-primary/40 transition-all cursor-default overflow-hidden"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background: `radial-gradient(circle at ${50 + mousePos.x * 2}% ${50 + mousePos.y * 2}%, hsl(var(--primary) / 0.15), transparent 70%)`,
        }}
      />
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-4 transition-colors"
        >
          <s.icon className="text-primary" size={26} />
        </motion.div>
        <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
      />
    </motion.div>
  );
};

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-semibold uppercase tracking-widest text-sm">Our Services</span>
        <h2 className="section-title mt-2">What We <span className="text-primary">Offer</span></h2>
        <p className="section-subtitle mx-auto mt-4">
          From routine servicing to complex bodywork — we've got your car covered.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} s={s} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
