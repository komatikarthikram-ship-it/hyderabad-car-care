import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", rating: 5, text: "Very polite staff, proper diagnosis, and reasonable pricing. My car runs like new after the general service!" },
  { name: "Priya Sharma", rating: 5, text: "Excellent painting quality and perfect finishing. The full body repaint looks absolutely stunning. Highly recommend!" },
  { name: "Vikram Reddy", rating: 5, text: "Transparent communication and quality work. They kept me updated throughout the repair process. Very trustworthy." },
  { name: "Anitha Rao", rating: 5, text: "Best alloy wheel painting service in Hyderabad. My wheels look brand new. Fair pricing and quick turnaround." },
  { name: "Suresh Babu", rating: 4, text: "Great denting work on my car after a minor accident. The finish is seamless. Will definitely come back." },
  { name: "Meera Joshi", rating: 5, text: "Professional diagnostics team. Found the issue quickly and fixed it at a very reasonable cost. Excellent service!" },
];

const avatarColors = ["bg-orange-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-yellow-500"];

const ReviewsSection = () => (
  <section id="reviews" className="section-padding bg-background relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-semibold uppercase tracking-widest text-sm">Testimonials</span>
        <h2 className="section-title mt-2">What Our <span className="text-primary">Customers</span> Say</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm relative group overflow-hidden transition-all"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Quote icon */}
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />

              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + si * 0.1 + i * 0.05 }}
                  >
                    <Star
                      size={18}
                      className={si < r.rating ? "text-primary fill-primary" : "text-muted"}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${avatarColors[i]} rounded-full flex items-center justify-center text-white font-heading font-bold text-sm`}>
                  {r.name.charAt(0)}
                </div>
                <div className="font-heading font-semibold text-sm">{r.name}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
