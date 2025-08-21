import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const RhythmicWords = () => {
  const words = [
    { text: 'Ideate.', color: 'text-gradient-primary', delay: 0 },
    { text: 'Commit.', color: 'text-gradient-secondary', delay: 2 },
    { text: 'Succeed.', color: 'text-gradient-full', delay: 4 }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % words.length;
        if (next === 0) {
          setCycle(c => c + 1);
        }
        return next;
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <StyledWrapper>
      <div className="rhythmic-container">
        <h1 className="text-[10vw] text-center md:text-[15vw] lg:text-5xl leading-none select-none tracking-tightest font-extrabold flex flex-col lg:flex-row mt-4 gap-2 justify-center items-center">
          {words.map((word, index) => (
            <motion.span
              key={`${word.text}-${cycle}`}
              data-content={word.text}
              className={`relative block ${word.color} text-shadow-glow flex-row word-span`}
              animate={{
                rotateX: activeIndex === index ? [0, -18, 0] : 0,
                scale: activeIndex === index ? [1, 1.08, 1] : 1,
                // Ensure readable opacity: active fully visible, others lightly dimmed
                opacity: activeIndex === index ? [0.98, 1, 0.98] : 0.7,
                // subtle brightness change only (no blur)
                filter: activeIndex === index ? ['brightness(1)', 'brightness(1.06)', 'brightness(1)'] : 'brightness(0.95)'
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
              style={{
                // Non-blurry, crisp shadow for 3D perception
                textShadow: activeIndex === index ? '0 6px 0 rgba(0,0,0,0.28)' : '0 3px 0 rgba(0,0,0,0.14)',
              }}
            >
              <motion.span
                className="word-inner"
                animate={{
                  y: activeIndex === index ? [0, -5, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                {word.text}
              </motion.span>
              
              {/* Rhythmic pulse ring */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="pulse-ring"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 1.15, 1.6], 
                      opacity: [0, 0.25, 0] 
                    }}
                    exit={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                      times: [0, 0.3, 1],
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Spotlight effect (kept but without blur) */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="spotlight"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: [0, 0.18, 0],
                      scale: [0.6, 1.05, 1.2]
                    }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.4, 1],
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Particle burst */}
              <AnimatePresence>
                {activeIndex === index && (
                  <div className="particles-container">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`particle particle-${i}`}
                        initial={{ 
                          scale: 0, 
                          x: 0, 
                          y: 0, 
                          opacity: 0 
                        }}
                        animate={{ 
                          scale: [0, 1, 0],
                          x: Math.cos((i * 60) * Math.PI / 180) * 80,
                          y: Math.sin((i * 60) * Math.PI / 180) * 80,
                          opacity: [0, 0.6, 0]
                        }}
                        exit={{ 
                          scale: 0, 
                          opacity: 0 
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </motion.span>
          ))}
        </h1>

        {/* Progress indicator */}
        <div className="progress-container">
          {words.map((_, index) => (
            <motion.div
              key={index}
              className="progress-dot"
              animate={{
                scale: activeIndex === index ? 1.5 : 1,
                opacity: activeIndex === index ? 1 : 0.4,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rhythmic-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  perspective: 1200px; /* enable 3D perception */
  -webkit-perspective: 1200px;
  }

  .word-span {
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  z-index: 10; /* ensure words sit above decorative layers */
  }

  .word-inner {
    position: relative;
    z-index: 2;
  }

  /* Force a solid readable fallback so text is visible even if gradients or background-clip
     rules don't apply in some environments. This makes the words visible across browsers. */
  .word-inner {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    background: none !important;
    z-index: 30;
    mix-blend-mode: normal;
  }

  .pulse-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border: 1px solid currentColor;
    border-radius: 50%;
    pointer-events: none;
  z-index: 4;
    opacity: 0.6;
  }

  .spotlight {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%;
    height: 130%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0.02) 30%,
      transparent 60%
    );
    border-radius: 50%;
    pointer-events: none;
  z-index: 3;
  }

  /* Override global glow to remove blur and make crisp 3D shadow */
  .text-shadow-glow {
    text-shadow: 0 3px 0 rgba(0,0,0,0.12) !important;
  }

  .particles-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
  z-index: 3;
  }

  .particle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 3px;
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 3px currentColor;
    transform: translate(-50%, -50%);
    opacity: 0.7;
  }

  .progress-container {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .progress-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 5px currentColor;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .progress-container {
      gap: 0.5rem;
    }
    
    .progress-dot {
      width: 8px;
      height: 8px;
    }
  }
`;

export default RhythmicWords;
