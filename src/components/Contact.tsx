'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'ahmerasif200@gmail.com', href: 'mailto:ahmerasif200@gmail.com' },
  { icon: HiLocationMarker, label: 'Location', value: 'Quetta, Pakistan', href: '#' },
  { icon: HiPhone, label: 'Phone', value: '+92 3318925614', href: 'tel:+923318925614' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/SyedAhmer-SE', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/SyedAhmer-SE', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/s_ahmer2/', label: 'Instagram' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '523977e8-63b6-4987-9e55-23f7f90d04c6',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: 'Portfolio Contact Form',
          subject: `New message from ${formState.name} via Portfolio`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" style={{ background: 'var(--section-alt)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--card-border), transparent)' }} />

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, var(--primary), #7c3aed)', filter: 'blur(80px)' }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s work{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Have a project in mind? I&apos;d love to hear about it.
            Drop me a message and let&apos;s create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--custom-shadow-lg)',
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
                      style={{
                        background: 'var(--section-alt)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--foreground)',
                        // @ts-expect-error CSS custom properties
                        '--tw-ring-color': 'var(--primary)',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
                      style={{
                        background: 'var(--section-alt)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--foreground)',
                        // @ts-expect-error CSS custom properties
                        '--tw-ring-color': 'var(--primary)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 resize-none focus:ring-2"
                    style={{
                      background: 'var(--section-alt)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--foreground)',
                      // @ts-expect-error CSS custom properties
                      '--tw-ring-color': 'var(--primary)',
                    }}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full py-4 rounded-xl text-white font-semibold text-base"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                  whileHover={loading ? {} : { scale: 1.02 }}
                  whileTap={loading ? {} : { scale: 0.98 }}
                >
                  {submitted ? (
                    <span className="flex items-center justify-center gap-2">
                      ✓ Message Sent!
                    </span>
                  ) : loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Info cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="card-hover flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--custom-shadow-sm)',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}
                >
                  <info.icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--muted)' }}>{info.label}</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--custom-shadow-sm)',
              }}
            >
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                Follow me on social media
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all duration-300"
                    style={{
                      background: 'var(--section-alt)',
                      color: 'var(--muted)',
                      border: '1px solid var(--card-border)',
                    }}
                    whileHover={{ scale: 1.15, y: -3, color: 'var(--primary)' }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                boxShadow: 'var(--custom-shadow-glow)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </span>
                <span className="text-sm font-semibold text-white">Currently Available</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                I&apos;m open to freelance projects and full-time opportunities.
                Let&apos;s discuss how I can help bring your ideas to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
