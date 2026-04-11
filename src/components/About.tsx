'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiGlobe, HiAcademicCap } from 'react-icons/hi';

const highlights = [
  {
    icon: HiCode,
    title: 'Web Development',
    description: 'Building responsive websites with HTML, CSS, JavaScript, WordPress, and modern frameworks.',
  },
  {
    icon: HiGlobe,
    title: 'Game Development',
    description: 'Creating games with Unity and Unreal Engine 5 using C++ and Blueprints.',
  },
  {
    icon: HiAcademicCap,
    title: 'Mentoring',
    description: 'Leading workshops for 300+ students and organizing hackathons at BUITEMS Dev Club.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative"
      style={{ background: 'var(--section-alt)' }}
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--card-border), transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
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
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Passionate about creating{' '}
            <span className="gradient-text">digital solutions</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A Software Engineering student turning ideas into reality through code,
            creativity, and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bio */}
          <motion.div
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
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                A bit about me 👋
              </h3>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                <p>
                  I&apos;m Syed Muhammad Ahmer, a Software Engineering student at BUITEMS, Quetta,
                  with hands-on experience in frontend development, Android apps, Python projects,
                  and game development using Unreal Engine 5.
                </p>
                <p>
                  I&apos;m skilled in building responsive websites, developing mobile applications,
                  and creating interactive game experiences. I love turning complex problems into
                  simple, elegant solutions.
                </p>
                <p>
                  As an organizer at the BUITEMS Developers&apos; Club, I mentor 300+ students
                  through coding workshops on Android and Python, and organize hackathons to
                  promote innovation in our community.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: '6+', label: 'Projects Completed' },
                  { value: '300+', label: 'Students Mentored' },
                  { value: '5+', label: 'Certificates' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center py-4 rounded-2xl"
                    style={{ background: 'var(--section-alt)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="text-2xl font-bold gradient-text-blue">{stat.value}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="card-hover rounded-2xl p-6"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--custom-shadow-sm)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}
                >
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
