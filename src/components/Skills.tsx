'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiKotlin, SiJetpackcompose, SiWordpress, SiHtml5, SiCss3, SiBootstrap,
  SiJavascript, SiPhp, SiPython, SiStreamlit, SiScikitlearn, SiTensorflow,
  SiOpencv, SiPandas, SiGit, SiGithub, SiFigma
} from 'react-icons/si';
import { FaAndroid, FaJava, FaVideo } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Mobile & Web Dev',
    description: 'Building responsive interfaces and Android apps',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#F7DF1E' },
      { name: 'HTML5/CSS3', icon: SiHtml5, level: 92, color: '#E34F26' },
      { name: 'WordPress', icon: SiWordpress, level: 80, color: '#21759B' },
    ],
  },
  {
    title: 'Programming & ML',
    description: 'Core languages, data science and machine learning',
    skills: [
      { name: 'Python', icon: SiPython, level: 88, color: '#3776AB' },
      { name: 'Java', icon: FaJava, level: 80, color: '#ED8B00' },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 75, color: '#F7931E' },
      { name: 'TensorFlow', icon: SiTensorflow, level: 60, color: '#FF6F00' },
      { name: 'OpenCV', icon: SiOpencv, level: 65, color: '#5C3EE8' },
      { name: 'Pandas', icon: SiPandas, level: 72, color: '#150458' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Design, version control, and frameworks',
    skills: [
      { name: 'Git', icon: SiGit, level: 88, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 90, color: '#181717' },
      { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
      { name: 'After Effects', icon: FaVideo, level: 65, color: '#9999FF' },
      { name: 'Streamlit', icon: SiStreamlit, level: 78, color: '#FF4B4B' },
      { name: 'Bootstrap', icon: SiBootstrap, level: 82, color: '#7952B3' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 relative" style={{ background: 'var(--background)' }}>
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
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A diverse set of tools and frameworks I use across mobile, web, and game development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="card-hover rounded-3xl p-7"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--custom-shadow-md)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            >
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                {category.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                {category.description}
              </p>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + catIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: `${skill.color}15`, color: skill.color }}
                        >
                          <skill.icon size={16} />
                        </div>
                        <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: 'var(--section-alt)' }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, var(--primary), var(--primary-light))`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 + catIdx * 0.15 + skillIdx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
