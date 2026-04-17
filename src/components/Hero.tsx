'use client';

import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'linear-gradient(135deg, var(--primary), #7c3aed)', filter: 'blur(80px)' }}
        />
        <div
          className="blob blob-delay-2 absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'linear-gradient(135deg, #7c3aed, var(--primary-light))', filter: 'blur(80px)' }}
        />
        <div
          className="blob blob-delay-4 absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-15"
          style={{ background: 'linear-gradient(135deg, var(--primary-light), #06b6d4)', filter: 'blur(80px)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--foreground) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: 'var(--primary-glow)',
              color: 'var(--primary)',
              border: '1px solid var(--primary-glow)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--primary)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--primary)' }} />
            </span>
            Open to opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Ahmer</span>
            <br />
            <span style={{ color: 'var(--foreground)' }}>Software</span>{' '}
            <span className="gradient-text-blue">Engineer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Software Engineering student with hands-on experience in frontend development,
            Android apps, Python projects, and game development using Unreal Engine 5.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-base"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-light))' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <HiArrowDown className="animate-bounce" />
            </motion.a>

            <a
              href="/resume.pdf"
              download="Ahmer_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                border: '2px solid var(--card-border)',
                color: 'var(--foreground)',
                background: 'var(--card-bg)',
              }}
            >
              <HiDownload />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/SyedAhmer-SE', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/SyedAhmer-SE', label: 'LinkedIn' },
              { icon: FaInstagram, href: 'https://www.instagram.com/s_ahmer2/', label: 'Instagram' },
              { icon: HiMail, href: 'mailto:ahmerasif200@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300"
                style={{
                  color: 'var(--muted)',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                }}
                whileHover={{ scale: 1.15, y: -3, color: 'var(--primary)' }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Code Editor */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* Glow behind editor */}
            <div
              className="absolute -inset-6 rounded-3xl opacity-40 pulse-glow"
              style={{ background: 'linear-gradient(135deg, var(--primary-glow), transparent, rgba(124,58,237,0.15))' }}
            />

            {/* Code Editor Window */}
            <div
              className="relative rounded-2xl overflow-hidden w-[340px] sm:w-[440px]"
              style={{
                background: '#0d1117',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'var(--custom-shadow-xl), 0 0 60px rgba(37,99,235,0.08)',
              }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3" style={{ background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <span className="text-xs font-medium" style={{ color: '#8b949e' }}>ahmer.py</span>
                <div className="w-16" />
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-[13px] leading-[1.8] overflow-hidden" style={{ minHeight: '280px' }}>
                <div><span style={{ color: '#ff7b72' }}>class</span> <span style={{ color: '#d2a8ff' }}>Developer</span><span style={{ color: '#c9d1d9' }}>:</span></div>
                <div className="pl-5"><span style={{ color: '#79c0ff' }}>name</span> <span style={{ color: '#ff7b72' }}>=</span> <span style={{ color: '#a5d6ff' }}>&quot;Syed Muhammad Ahmer&quot;</span></div>
                <div className="pl-5"><span style={{ color: '#79c0ff' }}>role</span> <span style={{ color: '#ff7b72' }}>=</span> <span style={{ color: '#a5d6ff' }}>&quot;Software Engineer&quot;</span></div>
                <div className="pl-5"><span style={{ color: '#79c0ff' }}>skills</span> <span style={{ color: '#ff7b72' }}>=</span> {'['}</div>
                <div className="pl-10"><span style={{ color: '#a5d6ff' }}>&quot;Kotlin&quot;</span><span style={{ color: '#c9d1d9' }}>,</span> <span style={{ color: '#a5d6ff' }}>&quot;JavaScript&quot;</span><span style={{ color: '#c9d1d9' }}>,</span></div>
                <div className="pl-10"><span style={{ color: '#a5d6ff' }}>&quot;Python&quot;</span><span style={{ color: '#c9d1d9' }}>,</span> <span style={{ color: '#a5d6ff' }}>&quot;Java&quot;</span><span style={{ color: '#c9d1d9' }}>,</span></div>
                <div className="pl-10"><span style={{ color: '#a5d6ff' }}>&quot;Unreal Engine 5&quot;</span><span style={{ color: '#c9d1d9' }}>,</span> <span style={{ color: '#a5d6ff' }}>&quot;Unity&quot;</span></div>
                <div className="pl-5">{']'}</div>
                <div className="pl-5"><span style={{ color: '#79c0ff' }}>passion</span> <span style={{ color: '#ff7b72' }}>=</span> <span style={{ color: '#a5d6ff' }}>&quot;Building the future&quot;</span></div>
                <div className="pl-5">
                  <span style={{ color: '#79c0ff' }}>hireable</span> <span style={{ color: '#ff7b72' }}>=</span>{' '}
                  <span style={{ color: '#79c0ff' }}>True</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    style={{ color: '#58a6ff', fontSize: '15px', marginLeft: '2px' }}
                  >
                    |
                  </motion.span>
                </div>
              </div>

              {/* Terminal bar */}
              <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#161b22', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-xs" style={{ color: '#3fb950' }}>●</span>
                <span className="text-xs font-mono" style={{ color: '#8b949e' }}>
                  <span style={{ color: '#58a6ff' }}>~</span> python build_amazing_things.py
                </span>
                <motion.span
                  className="text-xs font-mono"
                  style={{ color: '#3fb950' }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  ✓ success
                </motion.span>
              </div>
            </div>

            {/* Floating tech icons */}
            <motion.div
              className="absolute -top-5 -right-5"
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
                style={{ background: 'linear-gradient(135deg, #7f52ff22, #7f52ff08)', border: '1px solid #7f52ff30', boxShadow: '0 4px 20px rgba(127,82,255,0.15)', color: '#7f52ff' }}>
                Kt
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4"
              animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg"
                style={{ background: 'linear-gradient(135deg, #3776ab22, #3776ab08)', border: '1px solid #3776ab30', boxShadow: '0 4px 20px rgba(55,118,171,0.15)', color: '#3776ab' }}>
                🐍
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/3 -left-8"
              animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f7df1e18, #f7df1e08)', border: '1px solid #f7df1e25', boxShadow: '0 4px 20px rgba(247,223,30,0.1)' }}>
                <span style={{ color: '#f7df1e', fontSize: '12px', fontWeight: 'bold' }}>JS</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 right-8"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #0d006818, #0d006808)', border: '1px solid #0d006825', boxShadow: '0 4px 20px rgba(13,0,104,0.1)', color: '#4a3aff' }}>
                UE
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: 'var(--muted-light)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--primary)' }}
            animate={{ opacity: [1, 0], y: [0, 16] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
