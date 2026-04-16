import { motion } from "framer-motion";

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Glowing orbs */}
    <motion.div
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 right-[10%] w-32 h-32 bg-primary/20 rounded-full blur-2xl"
    />
    <motion.div
      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-32 left-[5%] w-48 h-48 bg-accent/15 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ y: [0, -40, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-1/2 right-[20%] w-24 h-24 bg-primary/10 rounded-full blur-xl"
    />

    {/* Floating geometric shapes */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -20 - i * 5, 0],
          rotate: [0, 360],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
        className="absolute border border-primary/20 rounded-lg"
        style={{
          width: 10 + i * 8,
          height: 10 + i * 8,
          top: `${15 + i * 12}%`,
          left: `${70 + (i % 3) * 10}%`,
        }}
      />
    ))}

    {/* Spark dots */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`spark-${i}`}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: i * 0.7,
        }}
        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        style={{
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 90 + 5}%`,
        }}
      />
    ))}
  </div>
);

export default FloatingElements;
