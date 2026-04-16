import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Award } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Skilled & Honest Team", desc: "Our certified technicians treat every car like their own, ensuring honest diagnosis and quality repairs." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "No surprises. We keep you informed at every stage — from diagnosis to delivery." },
  { icon: Award, title: "Quality Workmanship", desc: "Premium parts, advanced tools, and rigorous quality checks on every job." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-semibold uppercase tracking-widest text-sm">About Us</span>
        <h2 className="section-title mt-2">Why Choose <span className="text-primary">SS Auto Hub</span>?</h2>
        <p className="section-subtitle mx-auto mt-4">
          We're a team of passionate automotive experts in Hyderabad committed to keeping your car in top shape — affordably and honestly.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
              <v.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
