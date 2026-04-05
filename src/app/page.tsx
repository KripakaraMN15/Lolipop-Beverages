"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import ParallaxHero from '@/components/ParallaxHero';
import Sections from '@/components/Sections';
import Footer from '@/components/Footer';
import { DRINK_VARIANTS, getFrameUrl } from '@/lib/variants';

export default function Home() {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload initial variant's frames
  useEffect(() => {
    const variant = DRINK_VARIANTS[0];
    let loadedCount = 0;
    const totalFrames = variant.frameCount;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(variant, i);
      img.onload = () => {
        loadedCount++;
        setLoadingProgress((loadedCount / totalFrames) * 100);
      };
      img.onerror = () => {
        // Handle error by counting it as loaded to avoid infinite loading
        loadedCount++;
        setLoadingProgress((loadedCount / totalFrames) * 100);
      };
    }
  }, []);

  return (
    <main className="relative min-h-screen">
      <LoadingScreen 
        progress={loadingProgress} 
        onFinished={() => setIsLoading(false)} 
      />
      
      {!isLoading && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <ParallaxHero 
            activeVariantIndex={activeVariantIndex} 
            setActiveVariantIndex={setActiveVariantIndex} 
          />
          <Sections />
          <Footer />
        </div>
      )}
    </main>
  );
}
