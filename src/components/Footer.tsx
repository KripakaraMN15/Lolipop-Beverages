"use client"

import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0A0A0B] text-foreground pt-24 pb-12 border-t border-border/10">
      <div className="max-w-[1400px] mx-auto px-12 md:px-24">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 space-y-8">
            <h2 className="font-headline text-4xl font-bold tracking-tighter">OliScape</h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Crafting a more flavorful future for your digestive health. Experience functional refreshment at its finest.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-accent transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-accent transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-accent transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-headline text-lg font-bold">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Variety Packs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Subscription</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Store Locator</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-lg font-bold">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
            © 2024 OliScape (Olipop) - Designed with Gut Health in Mind.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground/50">
             <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
             <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
