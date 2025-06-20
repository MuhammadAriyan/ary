'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = [
  [
    {
      title: 'Project One',
      image: '/assets/images/sample1.jpg',
      techIcons: ['/assets/icons/typescript.svg', '/assets/icons/react.svg'],
    },
    {
      title: 'Project Two',
      image: '/assets/images/sample2.jpg',
      techIcons: ['/assets/icons/javascript.svg', '/assets/icons/nextjs.svg'],
    },
  ],
  [
    {
      title: 'Project Three',
      image: '/assets/images/sample3.jpg',
      techIcons: ['/assets/icons/python.svg', '/assets/icons/django.svg'],
    },
    {
      title: 'Project Four',
      image: '/assets/images/sample4.jpg',
      techIcons: ['/assets/icons/nodejs.svg', '/assets/icons/express.svg'],
    },
  ],
  [
    {
      title: 'Project Five',
      image: '/assets/images/sample5.jpg',
      techIcons: ['/assets/icons/html.svg', '/assets/icons/css.svg'],
    },
    {
      title: 'Project Six',
      image: '/assets/images/sample6.jpg',
      techIcons: ['/assets/icons/tailwind.svg', '/assets/icons/figma.svg'],
    },
  ],
  [
    {
      title: 'Project Seven',
      image: '/assets/images/sample7.jpg',
      techIcons: ['/assets/icons/git.svg', '/assets/icons/github.svg'],
    },
    {
      title: 'Project Eight',
      image: '/assets/images/sample8.jpg',
      techIcons: ['/assets/icons/vercel.svg', '/assets/icons/docker.svg'],
    },
  ],
];

const ProjectPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(projects.length - 1) * 100}%`]
  );

  return (
    <section className="h-[400vh] relative g-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="sticky top-0 h-screen overflow-hidden text-white">
        <motion.div className="flex h-full" style={{ x }}>
          {projects.map((pair, index) => (
            <div
              key={index}
              className="min-w-screen h-full relative flex-shrink-0"
            >
              {/* Top-Left Card */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="absolute top-20 left-20 max-w-md w-[40%] p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={pair[0].image}
                  alt={pair[0].title}
                  width={500}
                  height={300}
                  className="rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-black">{pair[0].title}</h3>
                <div className="flex gap-3">
                  {pair[0].techIcons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon}
                      alt="Tech Icon"
                      width={30}
                      height={30}
                      className="opacity-80 hover:opacity-100 transition duration-200"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Bottom-Right Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="absolute bottom-20 right-20 max-w-md w-[40%] p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={pair[1].image}
                  alt={pair[1].title}
                  width={500}
                  height={300}
                  className="rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{pair[1].title}</h3>
                <div className="flex gap-3">
                  {pair[1].techIcons.map((icon, i) => (
                    <Image
                      key={i}
                      src={icon}
                      alt="Tech Icon"
                      width={30}
                      height={30}
                      className="opacity-80 hover:opacity-100 transition duration-200"
                    />
                  ))}
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