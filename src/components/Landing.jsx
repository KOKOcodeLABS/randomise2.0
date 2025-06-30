'use client';

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="relative isolate overflow-hidden bg-black h-lvh">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 flex items-center place-content-center h-lvh w-lvw lg:flex-row flex-col-reverse lg:px-8 lg:py-8 md:px-8">
        <div className="mx-auto max-w-7xl px-4 pb-4 md:pb-4 flex-row lg:px-8 lg:pt-10 lg:mt-0 pt-20">
          <div className="flex place-content-center">
            <motion.div 
              className="relative mt-16 md:mt-0 h-56 w-56 lg:h-80 lg:w-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0],
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div
                animate={{
                  filter: [
                    "brightness(1) contrast(1)",
                    "brightness(1.1) contrast(1.1)",
                    "brightness(1) contrast(1)",
                    "brightness(0.9) contrast(0.9)",
                    "brightness(1) contrast(1)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Using regular img tag for better GIF support */}
                <img
                  src="/logo-gif.gif"
                  alt="Randomize Logo"
                  className="w-full h-full object-contain"
                  style={{
                    imageRendering: "auto",
                  }}
                />
              </motion.div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="mx-auto flex-shrink-0 lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="mt-2 ml-0 text-center font-bold tracking-tight text-white md:text-[8vw] lg:text-7xl text-4xl">
              RANDOMIZE();
            </h1>
          </motion.div>

          <motion.div 
            className="mx-auto flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-[10vw] text-center md:text-[15vw] lg:text-5xl leading-none select-none tracking-tightest font-extrabold lg:flex mt-4 gap-2">
              <motion.span
                data-content="Ideate."
                className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1 flex-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
                  Ideate.
                </span>
              </motion.span>
              <motion.span
                data-content="Commit."
                className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2 flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
                  Commit.
                </span>
              </motion.span>
              <motion.span
                data-content="Succeed."
                className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-3 flex-row"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
                  Succeed.
                </span>
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}