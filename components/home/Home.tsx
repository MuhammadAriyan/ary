'use client';

import { motion } from 'framer-motion';
import Lanyard from '@/components/LanYard';
import CardSwap, { Card } from '@/components/CardSwap';
import BlurText from '@/components/BlurText';
import TrueFocus from '@/components/TrueFocus';
import CountUp from '@/components/CountUp';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full text-black overflow-hidden" id='home'>
      {/* Huge Centered Overlay Text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0">
        <BlurText
          text="MUHAMMAD ARYAN"
          delay={190}
          animateBy="words"
          direction="top"
          className="text-[12vw] md:text-[8vw] font-extrabold tracking-tight text-black/10 text-center leading-none drop-shadow-2xl"
        />
      </div>

      {/* Top Left Label */}
      <div className="absolute top-6 left-8 z-30">
        <TrueFocus
          sentence="Blue Blue.."
          manualMode={false}
          blurAmount={5}
          borderColor="blue"
          className="text-9xl font-bold text-blue-700 drop-shadow-lg"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Top Right CountUp with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-6 right-8 z-30"
      >
        <CountUp
          from={0}
          to={28}
          separator="," 
          direction="up"
          duration={1.2}
          className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 drop-shadow-md"
        />
      </motion.div>

      {/* Center 3D Identity Animation with Radial Background */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-radial-gradient from-blue-200 via-white to-transparent opacity-40"></div>
        <Lanyard position={[0, 0, 20]} />
      </div>

      {/* Card Stack Section */}
      <div className="absolute bottom-10 right-5 md:right-10 z-20 max-w-[90vw] sm:max-w-md">
        <div className="relative w-full h-[500px] sm:h-[700px]">
          <CardSwap cardDistance={100} verticalDistance={120} delay={5000} pauseOnHover={false}>
            {[
              { src: '/assets/gif/blue.gif', alt: 'Creative Work' },
              { src: '/assets/gif/rin.gif', alt: 'Build Process' },
              { src: '/assets/gif/tanjiro.gif', alt: 'Connection' },
            ].map(({ src, alt }, idx) => (
              <Card
                key={idx}
                className="bg-white/10 text-purple-500 backdrop-blur-lg border border-blue-300/30 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.05] flex flex-col h-[340px] w-full"
              >
                <div className="flex-1 relative w-full h-0 pb-[56%]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    onError={() => console.error(`Failed to load ${src}`)}
                    sizes="(max-width: 768px) 100vw, 700px"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-800">{alt}</h3>
                  <p className="text-sm text-gray-800 mt-1">
                    A glimpse into {alt.toLowerCase()} through animated visuals.
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
      <a 
      href="/resume.pdf" 
      download 
        className="absolute bg-blue-500 px-4 py-2 text-white border-2 bottom-10 left-5 md:left-10 z-20 max-w-[90vw] sm:max-w-md">
        View My Resume ❄
        </div>
    </main>
  );
}
