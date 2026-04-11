'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiAcademicCap, HiCheckBadge } from 'react-icons/hi2';

const timeline = [
  {
    type: 'experience',
    title: 'Frontend Developer & SQA Intern',
    organization: 'Xpert Digital Company',
    date: 'Jan 2025 — April 2025',
    description: 'Assisted in building responsive and modern web interfaces. Worked with HTML, CSS, JavaScript, and frontend frameworks. Converted UI/UX designs into functional components and collaborated with the team on live client projects.',
  },
  {
    type: 'experience',
    title: 'Organizer',
    organization: "BUITEMS Developers' Club",
    date: 'Jan 2024 — Present',
    description: 'Led coding workshops on Android and Python, mentoring 300+ students and organizing hackathons to promote innovation and skill development among peers.',
  },
  {
    type: 'education',
    title: 'Bachelors Of Science: Software Engineering',
    organization: 'BUITEMS, Quetta, Pakistan',
    date: 'Expected in Dec 2026',
    description: 'Studying core software engineering principles, algorithms, data structures, and advanced programming concepts while participating actively in tech communities.',
  },
  {
    type: 'certificate',
    title: 'Professional Certifications',
    organization: 'Various Platforms',
    date: '2023 - 2024',
    description: 'Acquired multiple certifications including Google AI Essentials, WordPress Development (DigiSkills), Graphic Designing (DigiSkills), and Freelancing (DigiSkills).',
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 relative" style={{ background: 'var(--background)' }}>
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}
          >
            Experience & Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My professional <span className="gradient-text">journey</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            A timeline of my career growth, education, and key accomplishments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--card-border) 5%, var(--card-border) 95%, transparent)',
            }}
          />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.type === 'experience' ? HiBriefcase 
                          : item.type === 'education' ? HiAcademicCap 
                          : HiCheckBadge;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center z-10"
                      style={{
                        background: 'var(--background)',
                        border: '2px solid var(--primary)',
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{ background: 'var(--primary)' }}
                      >
                        <Icon size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout (desktop only) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'}`}>
                    <div
                      className="card-hover rounded-2xl p-6 relative group"
                      style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        boxShadow: 'var(--custom-shadow-md)',
                      }}
                    >
                      {/* Connector line visible on hover */}
                      <div 
                        className={`hidden md:block absolute top-[28px] w-12 lg:w-16 h-px transition-colors duration-300 ${isEven ? '-right-12 lg:-right-16' : '-left-12 lg:-left-16'}`}
                        style={{ background: 'var(--card-border)' }}
                      />

                      <div className={`flex flex-col-reverse md:flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <div 
                          className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block"
                          style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}
                        >
                          {item.date} • <span className="capitalize">{item.type}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                          {item.title}
                        </h3>
                        <div className="text-sm font-medium mb-4" style={{ color: 'var(--primary-light)' }}>
                          {item.organization}
                        </div>
                      </div>
                      
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
