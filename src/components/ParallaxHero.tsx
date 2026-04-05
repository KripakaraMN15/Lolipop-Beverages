"use client"

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ChevronDown, Twitter, Instagram, Facebook, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DRINK_VARIANTS, type DrinkVariant, getFrameUrl } from '@/lib/variants';
import { cn } from '@/lib/utils';

export default function ParallaxHero({ activeVariantIndex, setActiveVariantIndex }: { 
  activeVariantIndex: number; 
  setActiveVariantIndex: (i: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrame = useRef(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const variant = DRINK_VARIANTS[activeVariantIndex];
  
  // Frame Preloading for current variant
  const frames = useMemo(() => {
    const images: HTMLImageElement[] = [];
    if (typeof window === 'undefined') return images;
    
    for (let i = 1; i <= variant.frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(variant, i);
      images.push(img);
    }
    return images;
  }, [variant]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = frames[index - 1];
    if (img && img.complete) {
      // Clear and draw with cover-style aspect ratio logic
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;
      
      const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, newWidth, newHeight);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawFrame(currentFrame.current);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [frames]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const height = containerRef.current.offsetHeight - window.innerHeight;
      
      // Calculate current frame index based on scroll position (mapping to variant.frameCount)
      // Only scrub while inside the hero's sticky range
      if (scrollY <= height) {
        const progress = scrollY / height;
        const frameIndex = Math.max(1, Math.min(variant.frameCount, Math.floor(progress * variant.frameCount) + 1));
        
        if (frameIndex !== currentFrame.current) {
          currentFrame.current = frameIndex;
          requestAnimationFrame(() => drawFrame(frameIndex));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant, frames]);

  // Initial draw
  useEffect(() => {
    drawFrame(1);
  }, [frames]);

  const handleVariantChange = (next: boolean) => {
    setIsTransitioning(true);
    setTimeout(() => {
      const newIndex = next 
        ? (activeVariantIndex + 1) % DRINK_VARIANTS.length 
        : (activeVariantIndex - 1 + DRINK_VARIANTS.length) % DRINK_VARIANTS.length;
      setActiveVariantIndex(newIndex);
      currentFrame.current = 1;
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        {/* The Animated Canvas Background */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        />

        {/* Hero Overlay Content */}
        <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-12 md:px-24 flex items-center justify-between">
          
          {/* Left Side Info */}
          <div className={cn(
            "max-w-xl transition-all duration-700 delay-100",
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}>
            <div className="space-y-1 mb-8">
              <h2 className="font-headline text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8]">
                {variant.name}
              </h2>
              <p className="font-body text-xl md:text-3xl font-extralight tracking-[0.3em] text-muted-foreground ml-2">
                {variant.subtitle}
              </p>
            </div>
            
            <p className="font-body text-sm md:text-base leading-relaxed text-muted-foreground/80 max-w-md mb-10 ml-2">
              {variant.description}
            </p>

            <div className="flex gap-4 ml-2">
              <Button 
                variant="outline" 
                className="rounded-full px-10 h-14 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-bold tracking-widest text-xs uppercase"
              >
                Learn More
              </Button>
              <Button 
                style={{ backgroundColor: variant.themeColor }}
                className="rounded-full px-10 h-14 text-background hover:brightness-110 border-none transition-all duration-300 font-bold tracking-widest text-xs uppercase"
              >
                Add To Cart
              </Button>
            </div>
          </div>

          {/* Right Side Variant Nav */}
          <div className="flex flex-col items-center gap-12 select-none">
            <div className="relative">
               <span className="font-headline text-[12rem] font-bold text-foreground/5 leading-none">
                 0{activeVariantIndex + 1}
               </span>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[1px] h-32 bg-foreground/10" />
               </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => handleVariantChange(false)}
                className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform"
              >
                <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors rotate-90" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground group-hover:text-foreground">PREV</span>
              </button>

              <div className="h-12 w-[1px] bg-foreground/10" />

              <button 
                onClick={() => handleVariantChange(true)}
                className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground group-hover:text-foreground">NEXT</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Center Social Icons */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-12 flex items-center gap-4 text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase font-medium">
          <span>Scroll to Explore</span>
          <div className="w-12 h-[1px] bg-muted-foreground/20" />
        </div>
      </div>
    </section>
  );
}
