'use client';

import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import SplashCursor from '../components/SplashCursor';
import HomePage from '@/components/home/Home'; 
import AboutPage from '@/components/about/About';
import ProjectPage from '@/components/project/Project';
import ConnectPage from '@/components/Connect/Connect';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 3000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <main className="relative w-full h-full">
      
      {/* 🔄 Loading Screen */}
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center  text-white">
         
        </div>
      ) : (
        <>
          <NavBar />
          <SplashCursor />
          <HomePage />
          <AboutPage />
          <ProjectPage />
          <ConnectPage />
        </>
      )}
    </main>
  );
}
