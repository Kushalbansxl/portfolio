'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1500px] mx-auto 
      px-5 sm:px-6 md:px-10 lg:px-20
      pt-20 sm:pt-24 lg:pt-28 
      pb-24 sm:pb-28 lg:pb-36 
      text-white"
    >
      {/* HEADER */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: smoothEase,
  }}
  viewport={{ once: false, amount: 0.3 }}
  className="text-center mb-12 sm:mb-14 lg:mb-16"
>
  <div className="mb-4">
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 12,
        color: "var(--accent)",
        letterSpacing: "0.2em",
      }}
    >
      03 — CONTACT
    </span>
  </div>
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    viewport={{ once: false }}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
  >
    Contact Me
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    animate={{
      y: [0, -5, 0],
    }}
    transition={{
      duration: 4.4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    viewport={{ once: false }}
    className="text-white/60 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
  >
    Have something in mind? Send a message and let's connect.
  </motion.p>
</motion.div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* FORM */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
 {/* COPYRIGHT & LINKS */}
<div className="mt-20 flex flex-col items-center">
  <div className="flex gap-6 mb-6">
    <a href="https://github.com/Kushalbansxl" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-white/50 hover:text-[var(--accent)] transition-colors">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/kushalbansxl/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-white/50 hover:text-[var(--accent)] transition-colors">
      LinkedIn
    </a>
    <a href="mailto:kushaliscoding@gmail.com" className="text-sm font-mono text-white/50 hover:text-[var(--accent)] transition-colors">
      Email
    </a>
  </div>
  <div className="text-xs text-white/35">
    © 2026 Kushal Bansal — All rights reserved.
  </div>
</div>
    </section>
  )
}