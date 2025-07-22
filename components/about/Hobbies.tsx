'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollFloat from '@/components/ScrollFloat'

const hobbies = [
  {
    name: 'Football',
    description: 'Fueling energy and discipline through football and workouts.',
    img: '/assets/gif/football.gif',
  },
  {
    name: 'Gardening',
    description: 'Cultivating peace by tending to plants and nature.',
    img: '/assets/gif/garden.gif',
  },
  {
    name: 'Cooking & Baking',
    description: 'Crafting comforting meals and sweet treats with love.',
    img: '/assets/gif/cook.gif',
  },
  {
    name: 'Playing with Cats',
    description: 'Relaxing and bonding with my feline companions.',
    img: '/assets/gif/cat.gif',
  },
  {
    name: 'Video Games',
    description: 'Sharpening reflexes and exploring virtual adventures.',
    img: '/assets/gif/game.gif',
  },
  {
    name: 'Drawing',
    description: 'Feeding the mind through designs, and expressing own Art.',
    img: '/assets/gif/draw.gif',
  },
  {
    name: 'Anime',
    description: 'Finding emotion, values, and aesthetic depth in animation.',
    img: '/assets/gif/anime.gif',
  },
  {
    name: 'Adventure',
    description: 'Exploring new places, cultures, and landscapes to awaken perspective, seek beauty, and collect timeless memories.',
    img: '/assets/gif/adventure.gif',
  },
]

const Hobbies = () => {
  return (
    <div className="px-6 sm:px-12 py-16 space-y-16">
      <div className="flex justify-center">
        <ScrollFloat
          animationDuration={1}
          ease="power3.out"
          scrollStart="top bottom"
          scrollEnd="center center"
          textClassName="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900"
        >
          My Hobbies
        </ScrollFloat>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="relative h-56 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <img
              src={hobby.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 filter brightness-50"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-4 text-center">
              <h3 className="text-lg font-semibold text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {hobby.name}
              </h3>
              <p className="text-sm text-gray-200 mt-1">
                {hobby.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Hobbies
