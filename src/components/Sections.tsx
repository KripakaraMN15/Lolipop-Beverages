"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Sections() {
  return (
    <div className="bg-background relative z-20">
      
      {/* Product / About Section */}
      <section id="product" className="py-32 px-12 md:px-24 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-5xl md:text-7xl leading-tight">Better ingredients,<br /><span className="text-accent">finer taste.</span></h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
            Lolipop combines a marshmallowy taste with the refreshing pop of a classic soda. Our proprietary blend of prebiotics and botanical extracts supports your microbiome while delivering that nostalgic flavor you crave.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <span className="text-4xl font-headline font-bold">9g</span>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Prebiotic Fiber</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl font-headline font-bold">2g</span>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Sugar Per Can</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-card border border-border/50 p-12">
           <Image 
             src="https://picsum.photos/seed/soda1/800/800" 
             alt="Lolipop Can Close-up" 
             fill 
             className="object-cover opacity-80"
             data-ai-hint="soda can"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      {/* Ingredients & Benefits */}
      <section id="ingredients" className="py-32 bg-card/50">
        <div className="max-w-[1400px] mx-auto px-12 md:px-24">
          <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline text-5xl md:text-6xl">Rooted in Science</h2>
            <p className="text-muted-foreground">We meticulously source the best botanicals and plant fibers to craft a drink that loves you back.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Chicory Root", desc: "A source of inulin that feeds your gut bacteria.", icon: "🌱" },
              { title: "Jerusalem Artichoke", desc: "A prebiotic powerhouse for digestive health.", icon: "🍃" },
              { title: "Kudzu Root", desc: "An ancient botanical for metabolic support.", icon: "🦴" },
              { title: "Marshmallow Root", desc: "Gives that classic smooth texture naturally.", icon: "🍡" },
              { title: "Calendula", desc: "Antioxidant-rich for overall well-being.", icon: "🌼" },
              { title: "Nopal Cactus", desc: "Rich in fiber and vital minerals.", icon: "🌵" },
            ].map((ing) => (
              <div key={ing.title} className="p-10 rounded-2xl bg-background border border-border/20 hover:border-accent/50 transition-colors group">
                <span className="text-4xl mb-6 block">{ing.icon}</span>
                <h3 className="font-headline text-2xl mb-2 group-hover:text-accent transition-colors">{ing.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section id="nutrition" className="py-32 px-12 md:px-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-sm bg-white text-black p-8 font-mono border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
              <h3 className="text-4xl font-bold border-b-8 border-black pb-2 mb-2">Nutrition Facts</h3>
              <p className="text-sm border-b border-black mb-2">1 serving per container</p>
              <div className="flex justify-between items-end border-b-4 border-black pb-1 mb-2">
                <p className="font-bold text-xl">Serving size</p>
                <p className="font-bold text-xl">1 Can (355ml)</p>
              </div>
              <div className="flex justify-between items-end border-b-2 border-black mb-2">
                <p className="text-xs">Amount per serving</p>
              </div>
              <div className="flex justify-between items-end border-b-8 border-black pb-1 mb-2">
                <p className="text-4xl font-black">Calories</p>
                <p className="text-4xl font-black">35</p>
              </div>
              <div className="space-y-1 text-sm border-b border-black pb-2 mb-2">
                <p className="text-right font-bold">% Daily Value*</p>
                <div className="flex justify-between border-b border-black/20 pb-1">
                  <p><span className="font-bold">Total Fat</span> 0g</p>
                  <p className="font-bold">0%</p>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-1">
                  <p><span className="font-bold">Sodium</span> 25mg</p>
                  <p className="font-bold">1%</p>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-1">
                  <p><span className="font-bold">Total Carbohydrate</span> 13g</p>
                  <p className="font-bold">5%</p>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-1 pl-4">
                  <p>Dietary Fiber 9g</p>
                  <p className="font-bold">32%</p>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-1 pl-4">
                  <p>Total Sugars 2g</p>
                  <p className="font-bold"></p>
                </div>
                <div className="flex justify-between border-b border-black/20 pb-1">
                  <p><span className="font-bold">Protein</span> 0g</p>
                  <p className="font-bold">0%</p>
                </div>
              </div>
              <p className="text-[10px] italic">The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-headline text-5xl md:text-7xl">Transparent.<br />Honest.<br /><span className="text-accent">Real.</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't hide behind "natural flavors" or complex chemistry. Every can of Lolipop is a simple promise: great taste, high fiber, and almost zero sugar.
            </p>
            <div className="space-y-4">
              {[
                "Non-GMO Project Verified",
                "Gluten Free & Vegan",
                "Paleo & Keto Friendly",
                "No Artificial Sweeteners"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-body text-sm tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-card/20">
        <div className="max-w-[1400px] mx-auto px-12 md:px-24">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <h2 className="font-headline text-5xl md:text-6xl max-w-md leading-none">Loved by thousands of happy guts.</h2>
            <div className="flex items-center gap-4 bg-background p-6 rounded-2xl border border-border/30">
               <div className="flex gap-1 text-accent">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
               </div>
               <p className="text-sm font-bold tracking-tighter">4.9 / 5.0 (15,000+ Reviews)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", text: "Finally a soda I don't feel guilty about drinking. The Grape flavor is absolutely divine.", role: "Verified Buyer" },
              { name: "Michael K.", text: "The prebiotic benefits are real. My digestion has never felt better and the taste is 10/10.", role: "Health Coach" },
              { name: "Elena W.", text: "Perfect for my kids. They love the bubbles and I love that it only has 2g of sugar.", role: "Mother of 3" },
            ].map((rev, i) => (
              <Card key={i} className="bg-background border-border/30 p-8 hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="flex gap-1 text-accent mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="italic text-muted-foreground leading-relaxed">"{rev.text}"</p>
                  <div className="pt-4 border-t border-border/10">
                    <p className="font-bold text-sm">{rev.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{rev.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-12 md:px-24 max-w-4xl mx-auto">
        <h2 className="font-headline text-5xl text-center mb-16">Got Questions?</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-border/30 rounded-2xl px-6 bg-card/10">
            <AccordionTrigger className="text-lg font-headline py-6 hover:no-underline">Is Lolipop safe to drink every day?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              Absolutely! In fact, we recommend it. The 9g of prebiotic fiber per can helps consistently feed the good bacteria in your gut.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border border-border/30 rounded-2xl px-6 bg-card/10">
            <AccordionTrigger className="text-lg font-headline py-6 hover:no-underline">How many flavors do you have?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              Currently we offer 12 core flavors and periodic seasonal releases. Our fan favorites are Vintage Cola, Strawberry Vanilla, and Classic Grape.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border border-border/30 rounded-2xl px-6 bg-card/10">
            <AccordionTrigger className="text-lg font-headline py-6 hover:no-underline">What is the shelf life?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              Lolipop is best enjoyed within 12 months of its production date. Each can is stamped with an expiration date on the bottom.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-12 md:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="font-headline text-6xl md:text-8xl leading-none">Your gut will<br /><span className="text-accent">thank you later.</span></h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Join the functional revolution. Order a variety pack today and find your favorite flavor.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Button className="rounded-full px-12 h-16 bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-300 font-bold tracking-[0.2em] uppercase text-xs">Shop All Flavors</Button>
             <Button variant="outline" className="rounded-full px-12 h-16 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-bold tracking-[0.2em] uppercase text-xs">Find In Store</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
