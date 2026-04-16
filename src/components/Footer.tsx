const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground/70 py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="font-heading text-2xl font-bold text-primary mb-3">SS AUTO HUB</div>
      <p className="text-sm mb-4">Trusted Multi-Brand Car Service Center in Hyderabad</p>
      <div className="flex justify-center gap-6 text-xs uppercase tracking-wider mb-6">
        {["Home", "About", "Services", "Reviews", "Gallery", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
        ))}
      </div>
      <p className="text-xs text-secondary-foreground/40">© {new Date().getFullYear()} SS Auto Hub. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
