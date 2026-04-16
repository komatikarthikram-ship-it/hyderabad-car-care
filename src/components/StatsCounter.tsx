import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Car, Users, Calendar, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Car, value: 5000, suffix: "+", label: "Cars Serviced" },
  { icon: Users, value: 3500, suffix: "+", label: "Happy Customers" },
  { icon: Calendar, value: 10, suffix: "+", label: "Years Experience" },
  { icon: ThumbsUp, value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];

const AnimatedNumber = ({ target, decimals = 0, suffix }: { target: number; decimals?: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-primary">
      {decimals ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsCounter = () => (
  <section className="relative py-20 bg-secondary overflow-hidden">
    {/* Animated gradient orbs */}
    <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center"
            >
              <s.icon className="text-primary" size={30} />
            </motion.div>
            <AnimatedNumber target={s.value} decimals={s.decimals} suffix={s.suffix} />
            <p className="text-secondary-foreground/70 text-sm mt-2 font-medium uppercase tracking-wider">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsCounter;
