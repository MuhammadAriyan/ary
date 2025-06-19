'use client'

import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import SplashCursor from '../components/splashCursor';
import HomePage from '@/components/home/Home'; 
import AboutPage from '@/components/about/About';
import ProjectPage from '@/components/project/Project'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Optional delay for smoother feel
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <main className="relative">
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
          <span className="text-xl font-semibold">Loading...</span>
        </div>
      ) : (
        <>
          <NavBar />
          <SplashCursor />
          <HomePage />
          <AboutPage />
          <ProjectPage/>
        </>
      )}
    </main>
  );
}