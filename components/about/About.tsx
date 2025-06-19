'use client';

import React from 'react';
import ScrollFloat from '@/components/ScrollFloat';
import ScrollReveal from '@/components/ScrollReveal';
import Skills from '@/components/about/Skills';
import Hobbies from '@/components/about/Hobbies';
import JourneyTimeline from '@/components/about/JourneyTimeline';

const traits = ['Creative', 'Discipline', 'Love', 'Lead', 'Focus'];

const AboutPage = () => {
  return (
    <section className="min-h-screen px-4 sm:px-10 py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Intro */}
        <div className="text-center space-y-6 px-2">
          {/* Heading */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3">
            <ScrollFloat
              animationDuration={1}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              textClassName="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              Hi, I'm
            </ScrollFloat>
            <ScrollFloat
              animationDuration={1}
              ease="power3.out"
              scrollStart="top bottom"
              scrollEnd="bottom center"
              textClassName="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600"
            >
              Ary
            </ScrollFloat>
          </div>

          {/* Subheading */}
          <ScrollReveal
            baseOpacity={10}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-base sm:text-lg md:text-2xl font-medium text-gray-700 max-w-[90%] sm:max-w-4xl mx-auto leading-relaxed px-2"
          >
            I build intelligent systems that think clearly and operate with precision. Elegant logic. Powerful design. Purpose-driven code.
          </ScrollReveal>
        </div>

        {/* Traits Section */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-10 sm:mt-12">
          {traits.map((trait) => (
            <div
              key={trait}
              className="w-[90px] sm:w-[100px] h-[30px] sm:h-[50px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white flex justify-center items-center transition duration-300 hover:shadow-xl"
            >
              <ScrollFloat
                animationDuration={1}
                ease="power3.out"
                scrollStart="top bottom"
                scrollEnd="bottom center"
                textClassName="text-xs sm:text-sm md:text-base text-gray-800 font-semibold text-center"
              >
                {trait}
              </ScrollFloat>
            </div>
          ))}
        </div>
      </div>
        <Skills />
        <JourneyTimeline />
        <Hobbies />
    </section>
  );
};

export default AboutPage;
