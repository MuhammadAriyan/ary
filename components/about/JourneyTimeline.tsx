'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollFloat from '@/components/ScrollFloat'

const journey = [
  {
    date: 'July 2023',
    title: 'Started HTML',
    description: 'Began with the essentials of web structure and content layout using HTML.',
  },
  {
    date: 'October 2023',
    title: 'Learned CSS',
    description: 'Introduced styling, responsive layouts, and visual design through CSS.',
  },
  {
    date: 'January 2024',
    title: 'Started Python (Basics)',
    description: 'Wrote basic programs and learned syntax, variables, control structures, and functions.',
  },
  {
    date: 'February 2024',
    title: 'Learned JavaScript & TypeScript',
    description: 'Built interactive functionality and type safety for frontend applications.',
  },
  {
    date: 'July 2024',
    title: 'Next.js & Tailwind CSS',
    description: 'Started building full-stack applications with Next.js and modern UI with Tailwind.',
  },
  {
    date: 'February 2025',
    title: 'Advanced Python',
    description: 'Dived deeper into OOP, modules, file handling, and real-world problem solving in Python.',
  },
  {
    date: 'June 2025',
    title: 'Agentic AI',
    description: 'Began working with UV framework and Gemini API to build AI agents with autonomous behavior.',
  },
]

export default function JourneyTimeline() {
  return (
    <section className="px-6 py-12 md:px-20 bg-white text-gray-900">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center">
          <ScrollFloat
            animationDuration={1}
            ease="power3.out"
            scrollStart="top bottom"
            scrollEnd="bottom center"
            textClassName=""
          >
            <span className="inline-block">📍 My Journey Timeline</span>
          </ScrollFloat>
        </h2>
      </div>

      <div className="relative border-l-4 border-gray-300 ml-4 space-y-12">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="pl-6 relative"
          >
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-1.5 border-4 border-white shadow-md" />
            <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{item.date}</p>
            <p className="text-base text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
