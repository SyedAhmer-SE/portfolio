'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode, HiOutlineFolderOpen } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'Candy Run!!',
    description: 'Complete 3D endless runner mobile game with procedural obstacle spawning, 3-lane swipe controls, coin economy system, and character-switching with unlockable avatars. Published on Android.',
    tech: ['Unity', 'C#', 'Android'],
    type: 'Game Dev',
    github: 'https://github.com/SyedAhmer-SE',
    live: '',
    image: '/projects/candy_run.png',
  },
  {
    title: 'Hack-and-Slash Action Demo',
    description: 'Third-person combat prototype with combo-based combat, hit detection, enemy AI behavior trees, and character state machine for idle, attack, dodge, and death animations.',
    tech: ['Unreal Engine 5', 'C++', 'Blueprints'],
    type: 'Game Dev',
    github: 'https://github.com/SyedAhmer-SE',
    live: '',
    image: '/projects/hack_and_slash.png',
  },
  {
    title: '2D Game Environment',
    description: 'Modular, reusable level architecture using Unity Tilemaps with custom C# scripting for gameplay triggers, interactive elements, and optimized rendering pipeline.',
    tech: ['Unity', 'C#', 'Tilemaps'],
    type: 'Game Dev',
    github: 'https://github.com/SyedAhmer-SE',
    live: '',
    image: '/projects/game_env_2d.png',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive personal portfolio built with Next.js and Framer Motion featuring dark theme, smooth animations, and Web3Forms contact integration.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    type: 'Web Dev',
    github: 'https://github.com/SyedAhmer-SE/portfolio',
    live: 'https://portfolio-git-main-syedahmer-ses-projects.vercel.app',
    image: '/projects/portfolio_web.png',
  },
  {
    title: 'Responsive Web Interfaces',
    description: 'Built pixel-accurate, responsive web components from Figma designs during internship at Xpert Digital Company. Tested and documented 20+ bugs across 3 web applications.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'Web Dev',
    github: 'https://github.com/SyedAhmer-SE',
    live: '',
    image: '/projects/responsive_web.png',
  },
  {
    title: 'Certificate Sender App',
    description: 'Streamlit-based application to email a single PDF certificate to multiple recipients from a CSV list with personalized messages and automated delivery.',
    tech: ['Python', 'Streamlit', 'Pandas'],
    type: 'Web App',
    github: 'https://github.com/SyedAhmer-SE',
    live: '',
    image: '/projects/certificate_sender.png',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.type)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.type === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative" style={{ background: 'var(--section-alt)' }}>
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
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projects I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A showcase of my work in game development, web applications, and automation tools.
          </p>
        </motion.div>

        {/* Filter categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat ? 'var(--primary)' : 'var(--card-bg)',
                color: activeCategory === cat ? '#fff' : 'var(--muted)',
                border: `1px solid ${activeCategory === cat ? 'var(--primary)' : 'var(--card-border)'}`,
                boxShadow: activeCategory === cat ? 'var(--custom-shadow-md)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="card-hover rounded-3xl overflow-hidden flex flex-col h-full"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              layout
            >
              {/* Project "Image" mockup */}
              <div
                className="h-48 relative overflow-hidden flex flex-col"
                style={{ background: 'var(--section-alt)' }}
              >
                {/* Browser/Window mockup header */}
                <div className="absolute top-0 left-0 right-0 h-8 flex items-center px-4 gap-1.5 z-20 bg-black/30 backdrop-blur-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                {/* Image body */}
                <div className="flex-1 relative overflow-hidden bg-[var(--section-alt)]">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    style={{ transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-40" />
                </div>

                {/* Hover overlay with links */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 backdrop-blur-sm"
                  style={{ background: 'rgba(var(--background), 0.7)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                      style={{ background: 'var(--primary)' }}
                      aria-label="View Live Project"
                    >
                      <HiExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ background: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)' }}
                    aria-label="View Source Code on GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <span 
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: 'var(--primary)' }}
                    >
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                  </div>
                  <HiOutlineFolderOpen className="text-2xl" style={{ color: 'var(--muted-light)' }} />
                </div>
                
                <p className="text-sm mb-6 flex-1 text-pretty" style={{ color: 'var(--muted)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ background: 'var(--section-alt)', color: 'var(--muted)' }}
                    >
                      <HiCode size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <a 
            href="https://github.com/SyedAhmer-SE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: 'var(--primary)' }}
          >
            View more on my GitHub <HiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
