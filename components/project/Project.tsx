'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';


const projects = [ 
  {
    title: 'Furniture E-commerce Website',
    image: '/assets/project/1.png',
    description: 'An elegant, fully responsive furniture store with cart, filtering, and checkout features.',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ],
  },
  {
    title: 'Moderno - A Fullstack E-commerce App',
    image: '/assets/project/2.png',
    description: 'A high-performance full-stack shopping app with CMS and admin panel.',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sanity/sanity-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ],
  },
  {
    title: 'ToDo List',
    image: '/assets/project/3.png',
    description: 'A clean and intuitive task manager built with TypeScript.',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ],
  },
  {
    title: 'BiryaniGpt',
    image: '/assets/project/4.png',
    description: 'An LLM-based food assistant built using Mistral and Streamlit.',
    techIcons: [
      '/assets/images/mistral.png',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    ],
  },
  {
    title: 'Unit Converter By Gemini',
    image: '/assets/project/5.png',
    description: 'Simple and interactive Gemini-powered unit converter app.',
    techIcons: [
      '/assets/images/gemini.png',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    ],
  },
  {
    title: 'Personal Library Manager',
    image: '/assets/project/6.png',
    description: 'Manage your books smartly with Pandas and Streamlit integration.',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    ],
  },
  {
    title: 'Typespeed Tester',
    image: '/assets/project/7.png',
    description: 'Fun typing speed tester made with modern TypeScript stack.',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ],
  },
  {
    title: 'Dynamic Resume Builder',
    image: '/assets/project/8.png',
    description: 'Create and download beautiful resumes using HTML/CSS and TS.',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    ],
  },
]

const ProjectPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(projects.length - 1) * 100}%`]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[400vh] bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
        className="flex justify-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center">
          Projects
        </h2>
      </motion.div>

      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full" style={{ x }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center px-4 sm:px-6 py-10 md:py-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: false }}
                className="bg-white shadow-xl rounded-3xl w-full max-w-6xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover w-full h-auto"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.techIcons?.map((icon, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 p-2 rounded-xl shadow-inner hover:shadow-md transition w-12 h-12 flex items-center justify-center"
                      >
                        <Image
                          src={icon}
                          alt="Tech Icon"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;
