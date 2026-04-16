import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", rating: 5, text: "Very polite staff, proper diagnosis, and reasonable pricing. My car runs like new after the general service!" },
  { name: "Priya Sharma", rating: 5, text: "Excellent painting quality and perfect finishing. The full body repaint looks absolutely stunning. Highly recommend!" },
  { name: "Vikram Reddy", rating: 5, text: "Transparent communication and quality work. They kept me updated throughout the repair process. Very trustworthy." },
  { name: "Anitha Rao", rating: 5, text: "Best alloy wheel painting service in Hyderabad. My wheels look brand new. Fair pricing and quick turnaround." },
  { name: "Suresh Babu", rating: 4, text: "Great denting work on my car after a minor accident. The finish is seamless. Will definitely come back." },
  { name: "Meera Joshi", rating: 5, text: "Professional diagnostics team. Found the issue quickly and fixed it at a very reasonable cost. Excellent service!" },
];

const ReviewsSection = () => (
  <section id="reviews" className="section-padding bg-background">
    <div className="container mx-auto">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star
                  key={si}
                  size={18}
                  className={si < r.rating ? "text-primary fill-primary" : "text-muted"}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
            <div className="font-heading font-semibold text-sm">{r.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
