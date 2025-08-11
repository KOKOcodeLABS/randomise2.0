'use client';

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, forwardRef } from "react";
import Floating, { FloatingElement } from '@/fancy/components/image/parallax-floating';
import AboutUs_text from "./AboutUs_text";

// package required for Next.js
// npm install framer-motion

const stats = [
  { name: "Current Members", value: 350 },
  { name: "Events conducted", value: 30 },
  { name: "Participants", value: 2000 },
];

const AnimatedNumber = forwardRef(function AnimatedNumber({ value, isVisible }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.span
        initial={{ textContent: 0 }}
        animate={isVisible ? { textContent: value } : { textContent: 0 }}
        transition={{
          duration: 2,
          delay: 0.6,
          ease: "easeOut"
        }}
        onUpdate={(latest) => {
          if (ref && ref.current) {
            ref.current.textContent = Math.floor(latest.textContent);
          }
        }}
      >
        0
      </motion.span>
    </motion.div>
  );
});

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50% 0px -50% 0px" 
  });

  return (
    <Floating className="w-full h-full" sensitivity={1.5} easingFactor={0.1}>
      <motion.section
        ref={ref}
        className="relative grid place-content-center isolate md:h-lvh overflow-hidden bg-gradient-to-br from-[#0d0618] via-[#1a0b3d] to-[#000000] py-24 sm:py-32"
        id="about"
        aria-labelledby="about-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated gradient background with Parallax */}
        <FloatingElement depth={0.5}>
          <motion.div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2D0FF7] via-[#A10FF2] to-[#F20059] opacity-25"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={1.2} className="mx-auto max-w-7xl px-10 lg:px-8 flex justify-center flex-col" absolute={false}>
          {/* Header section with Parallax */}
          <FloatingElement depth={1.5} absolute={false}>
            <motion.header 
              className="mx-auto max-w-4xl lg:mx-0 text-center flex justify-center flex-col self-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                id="about-heading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <AboutUs_text />
              </motion.div>
              <motion.p 
                className="mt-6 text-lg md:text-xl leading-8 text-description text-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Welcome to Randomize();, the coding powerhouse of MUJ! We&apos;re a
                dynamic space to dive into coding, explore new tech, and sharpen
                your Computer Science skills. What sets us apart? Unique hackathons,
                industry mentorships, and innovative projects that turn ideas into
                real-world solutions. Our community of passionate coders, hackers,
                designers, and builders is dedicated to pushing the boundaries of
                technology.
                <br />
                <br />
                Experience the difference with Randomize();.
              </motion.p>
            </motion.header>
          </FloatingElement>

          {/* Statistics section with Parallax */}
          <FloatingElement depth={1.8} absolute={false}>
            <motion.div 
              className="mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <dl className="mt-16 grid grid-cols-1 gap-8 md:gap-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.name} 
                    className="flex flex-col-reverse"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <dt className="text-sm md:text-lg leading-7 text-gray-300 text-center">
                      {stat.name}
                    </dt>
                    <dd className="text-[25px] md:text-[35px] font-semibold leading-9 tracking-tight text-white flex justify-center">
                      <AnimatedNumber 
                        value={stat.value} 
                        isVisible={isInView}
                        ref={useRef(null)}
                      />
                      <span>+</span>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </FloatingElement>
        </FloatingElement>
      </motion.section>
    </Floating>
  );
}