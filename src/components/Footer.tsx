import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/poojagirne",
      label: "GitHub",
      hover: "hover:text-blue-500",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/pooja-rachatte",
      label: "LinkedIn",
      hover: "hover:text-blue-500",
    },
    {
      icon: Mail,
      href: "mailto:poojagirne24@gmail.com",
      label: "Email",
      hover: "hover:text-blue-500",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-6 text-md ">
          {socialLinks.map(({ icon: Icon, href, label, hover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`transition-colors ${hover}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
          <span className="font-medium">© {currentYear} Pooja Girne</span> | All
          Rights Reserved.
        </p>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="mt-4 text-xs text-muted-foreground hover:text-primary transition"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
