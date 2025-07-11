import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/30 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Created By Pooja Girne |  © {currentYear} All rights reserved
          </p>
      </div>
    </footer>
  );
};

export default Footer;