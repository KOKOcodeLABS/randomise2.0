'use client'

import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import Floating, { FloatingElement } from '@/fancy/components/image/parallax-floating'
import './embla.css'
import './base.css'

const OPTIONS = { loop: true }

const Events = () => {
  return(
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Floating className="w-full h-full" sensitivity={2} easingFactor={0.12}>
        {/* Animated Background Grid with Parallax */}
        <FloatingElement depth={0.3} className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] animate-pulse opacity-20"></FloatingElement>
        
        {/* Floating Orbs with Enhanced Parallax */}
        <FloatingElement depth={1.2} className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-float"></FloatingElement>
        <FloatingElement depth={1.8} className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-float-delayed"></FloatingElement>
        <FloatingElement depth={1.5} className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float-slow"></FloatingElement>
        
        {/* Main Content with Parallax */}
        <FloatingElement depth={0.8} className="relative z-10 container mx-auto px-4 py-20" absolute={false}>
          {/* Hi-tech Header with Parallax */}
          <FloatingElement depth={1.5} className="text-center mb-16" absolute={false}>
            <div className="inline-block relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <h2 className="relative bg-slate-900 text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 px-8 py-4 rounded-lg">
                EVENTS
              </h2>
            </div>
            <p className="mt-6 text-xl text-slate-300 font-light tracking-wide">
              Experience the Future of Innovation
            </p>
            
            {/* Animated underline */}
            <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
          </FloatingElement>

          {/* Carousel Container with Parallax */}
          <FloatingElement depth={1.2} className="relative" absolute={false}>
            {/* Glow effect behind carousel */}
            <FloatingElement depth={2} className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-60"></FloatingElement>
            
            <EmblaCarousel options={OPTIONS} />
          </FloatingElement>

          {/* Bottom decorative elements with Parallax */}
          <FloatingElement depth={2.5} className="flex justify-center mt-16 space-x-8" absolute={false}>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-200"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-400"></div>
          </FloatingElement>
        </FloatingElement>

        {/* Animated particles with Parallax */}
        <FloatingElement depth={3} className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle"></FloatingElement>
        <FloatingElement depth={2.8} className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-twinkle animation-delay-300"></FloatingElement>
        <FloatingElement depth={3.2} className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-twinkle animation-delay-600"></FloatingElement>
        <FloatingElement depth={2.5} className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle animation-delay-900"></FloatingElement>
      </Floating>
    </section>
  );
}

export default Events;
