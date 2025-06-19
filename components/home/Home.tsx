'use client';

import Lanyard from '@/components/LanYard';
import CardSwap, { Card } from '@/components/CardSwap';
import BlurText from '@/components/BlurText';
import TrueFocus from '@/components/TrueFocus';
// import CountUp from '@/components/CountUp'; // 🔹 Reserved for future use
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full text-black overflow-hidden">
      
      {/* Huge Centered Overlay Text */}
      <div
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0"
        aria-hidden="true"
      >
        <BlurText
          text="MUHAMMAD ARYAN"
          delay={190}
          animateBy="words"
          direction="top"
          className="text-[12vw] md:text-[8vw] font-extrabold tracking-tight text-black/10 text-center leading-none drop-shadow-lg"
        />
      </div>

      {/* Top Left "BLUE" Label */}
      <div className="absolute top-6 font-light left-8 z-30">
        <TrueFocus
          sentence="Blue Blue.."
          manualMode={false}
          blurAmount={5}
          borderColor="blue"
          className="text-9xl"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Center 3D Identity Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <Lanyard position={[0, 0, 20]} />
      </div>

      {/* Card Stack Section */}
      <div className="absolute bottom-10 right-10 z-20 max-w-sm sm:max-w-md">
        <div className="relative w-full h-[600px] sm:h-[700px]">
          <CardSwap cardDistance={100} verticalDistance={120} delay={5000} pauseOnHover={false}>
            {[
              { src: '/assets/gif/blue.gif', alt: 'Creative Work' },
              { src: '/assets/gif/rin.gif', alt: 'Build Process' },
              { src: '/assets/gif/tanjiro.gif', alt: 'Connection' },
            ].map(({ src, alt }, idx) => (
              <Card
                key={idx}
                className="bg-white/10 text-purple-500 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-[340px] w-full"
              >
                <div className="flex-1 relative w-full h-0 pb-[56%]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    onError={() => console.error(`Failed to load ${src}`)}
                    sizes="(max-width: 768px) 100vw, 700px"
                    unoptimized // ⚠️ Optional: skip optimization for animated GIFs
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{alt}</h3>
                  <p className="text-sm text-black mt-1">
                    A glimpse into {alt.toLowerCase()} through animated visuals.
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </main>
  );
}
