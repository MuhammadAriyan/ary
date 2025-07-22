'use client'

import React from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ScrollFloat from '@/components/ScrollFloat'
import { motion } from 'framer-motion'

const skillSections = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Streamlit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
      { name: 'uv', logo: '/assets/images/uv.png' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', logo: 'https://skillicons.dev/icons?i=git' },
      { name: 'GitHub', logo: 'https://skillicons.dev/icons?i=github' },
      { name: 'Postman', logo: 'https://skillicons.dev/icons?i=postman' },
      { name: 'Sanity CMS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sanity/sanity-original.svg' },
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
      { name: 'NPM', logo: 'https://skillicons.dev/icons?i=npm' },
      { name: 'Vercel', logo: 'https://skillicons.dev/icons?i=vercel' },
    ],
  },
  {
    title: 'AI Models',
    items: [
      { name: 'Gemini AI', logo: '/assets/images/gemini.png' },   // add this to your assets
      { name: 'Mistral AI', logo: '/assets/images/mistral.png' }, // add this too
    ],
  },
]

const SkillsSection = () => {
  return (
    <div className="space-y-2 p-10 g-gradient-to-b from-white to-gray-50">
      <div className="flex justify-center">
        <ScrollFloat
          animationDuration={1}
          ease="power3.out"
          scrollStart="top bottom"
          scrollEnd="bottom center"
          textClassName="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-black"
        >
          Skills
        </ScrollFloat>
      </div>

      {skillSections.map((section) => (
        <div key={section.title} className="space-y-5">
          <ScrollReveal
            baseOpacity={10}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-2xl sm:text-3xl font-semibold text-blue-600 text-center"
          >
            {section.title}
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {section.items.map(({ name, logo }) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: false }}
                key={name}
                className="relative w-[75px] h-[75px] sm:w-[90px] sm:h-[80px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white group transition-all hover:shadow-xl"
              >
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 gap-1">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={40}
                    height={40}
                    className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-xl"
                    unoptimized={logo.startsWith('https://')}
                  />
                  <div className="text-[10px] sm:text-xs text-gray-700 font-medium text-center">
                    {name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsSection
