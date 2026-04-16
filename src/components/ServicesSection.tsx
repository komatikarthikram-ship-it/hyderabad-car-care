import { motion } from "framer-motion";
import { Wrench, Paintbrush, Car, CircleDot, Activity, Settings } from "lucide-react";

const services = [
  { icon: Wrench, title: "Car General Service", desc: "Complete multi-point inspection, oil change, filter replacement and essential maintenance." },
  { icon: Paintbrush, title: "Denting & Painting", desc: "Expert body repair and premium painting to restore your car's showroom finish." },
  { icon: Car, title: "Full Body Repainting", desc: "Complete respray with color-matching technology and factory-quality clear coat." },
  { icon: CircleDot, title: "Alloy Wheel Painting", desc: "Restore scratched or faded alloy wheels with durable powder coating and custom finishes." },
  { icon: Activity, title: "Diagnostics & Repairs", desc: "Advanced OBD diagnostics to pinpoint issues. Engine, electrical, suspension and more." },
  { icon: Settings, title: "Multi-Brand Servicing", desc: "Expertise across all major brands — Maruti, Hyundai, Honda, Toyota, Kia, Tata and more." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="container mx-auto">
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
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card rounded-xl p-7 border border-border hover:border-primary/40 hover:shadow-lg transition-all cursor-default"
          >
            <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
