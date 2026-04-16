import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();
    if (!name || !phone || !message) return;
    const whatsappMsg = encodeURIComponent(`Hi SS Auto Hub! I'm ${name}. ${message}. Contact me at ${phone}`);
    window.open(`https://wa.me/919908821555?text=${whatsappMsg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Contact</span>
          <h2 className="section-title mt-2">Get In <span className="text-primary">Touch</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Our Location</h4>
                  <p className="text-muted-foreground text-sm">Kukatpally, Hyderabad, Telangana, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Phone</h4>
                  <a href="tel:+919908821555" className="text-primary hover:underline text-sm">+91 99088 21555</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon – Sun: 9:00 AM – 9:30 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                title="SS Auto Hub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.27276734!2d78.3800!3d17.4947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f4e4c4be71%3A0x1a26debfad7c7d85!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border shadow-sm space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-background border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-background border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  id="message"
                  required
                  maxLength={500}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Describe the service you need..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-heading font-semibold uppercase tracking-wide hover:brightness-110 transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {submitted ? "Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
