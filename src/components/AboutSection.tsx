import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Award } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Skilled & Honest Team", desc: "Our certified technicians treat every car like their own, ensuring honest diagnosis and quality repairs." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "No surprises. We keep you informed at every stage — from diagnosis to delivery." },
  { icon: Award, title: "Quality Workmanship", desc: "Premium parts, advanced tools, and rigorous quality checks on every job." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background relative overflow-hidden">
    {/* Animated background elements */}
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
      transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"
    />

    <div className="container mx-auto relative z-10">
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
            whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(249,115,22,0.2)" }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm transition-all relative group overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5"
              >
                <v.icon className="text-primary" size={28} />
              </motion.div>
              <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>

            {/* Animated border accent */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
