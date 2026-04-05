"use client"

import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
  progress: number;
  onFinished: () => void;
}

export default function LoadingScreen({ progress, onFinished }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onFinished();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinished]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="mb-8 flex flex-col items-center">
        <h1 className="font-headline text-5xl tracking-[0.2em] font-light text-foreground mb-2">LOLIPOP</h1>
        <p className="font-body text-xs tracking-[0.5em] text-muted-foreground uppercase">Lolipop Experience</p>
      </div>
      
      <div className="w-64 space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-[10px] tracking-widest text-muted-foreground font-medium uppercase">Preloading Cinematic Sequence</span>
          <span className="font-code text-xs text-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-[2px] bg-muted/20" />
      </div>
    </div>
  );
}
