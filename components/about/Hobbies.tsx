'use client'

import React from 'react'
import Image from 'next/image'
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
    img: '/assets/gif/gardening.gif',
  },
  {
    name: 'Cooking',
    description: 'Crafting flavors and enjoying the art of food.',
    img: '/assets/gif/cooking.gif',
  },
]

const Hobbies = () => {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* ScrollFloat on Section Title */}
        <div className="flex justify-center mb-12">
          <ScrollFloat
            animationDuration={1}
            ease="power3.out"
            scrollStart="top bottom"
            scrollEnd="bottom center"
            textClassName="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
          >
            My Hobbies
          </ScrollFloat>
        </div>

        {/* Grid of Hobby Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="relative group h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={hobby.img}
                alt={hobby.name}
                fill
                priority={index === 0}
                className="object-cover brightness-50 group-hover:brightness-75 transition duration-300"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center z-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {hobby.name}
                </h3>
                <p className="text-sm sm:text-base max-w-xs">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
