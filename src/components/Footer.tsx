'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/SyedAhmer-SE', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/SyedAhmer-SE', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/s_ahmer2/', label: 'Instagram' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16" style={{ background: 'var(--background)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--card-border), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="text-2xl font-bold tracking-tight mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">&lt;Dev</span>
            <span style={{ color: 'var(--foreground)' }}>/&gt;</span>
          </motion.a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium transition-colors duration-300 hover:opacity-100"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 mb-8">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full transition-all duration-300"
                style={{
                  color: 'var(--muted)',
                  border: '1px solid var(--card-border)',
                }}
                whileHover={{ scale: 1.15, y: -2, color: 'var(--primary)' }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-8" style={{ background: 'var(--card-border)' }} />

          {/* Copyright */}
          <p className="text-sm flex items-center gap-1" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Syed Muhammad Ahmer. Built with <span className="text-red-500 animate-pulse">❤️</span> using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
