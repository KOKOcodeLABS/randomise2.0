import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styled from 'styled-components';

const WORDS = [
  { text: 'Ideate.', color: 'text-gradient-primary' },
  { text: 'Commit.', color: 'text-gradient-secondary' },
  { text: 'Succeed.', color: 'text-gradient-full' }
];

const PARTICLE_COUNT = 4;
const PARTICLE_DISTANCE = 60;

const spanVariants = {
  idle: { rotateX: 0, scale: 1, opacity: 0.75, filter: 'brightness(0.95)' },
  active: {
    rotateX: [0, -14, 0],
    scale: [1, 1.06, 1],
    opacity: [0.98, 1, 0.98],
    filter: ['brightness(1)', 'brightness(1.04)', 'brightness(1)'],
  }
};

const innerVariants = {
  idle: { y: 0 },
  active: { y: [0, -4, 0] }
};

const pulseVariants = {
  idle: { scale: 0.9, opacity: 0 },
  active: { scale: [0.9, 1.1, 1.45], opacity: [0, 0.22, 0] }
};

const spotlightVariants = {
  idle: { opacity: 0, scale: 0.6 },
  active: { opacity: [0, 0.16, 0], scale: [0.6, 1.02, 1.18] }
};

const particleVariants = {
  idle: { scale: 0, x: 0, y: 0, opacity: 0 },
  active: (i) => {
    const angle = (i * (360 / PARTICLE_COUNT)) * Math.PI / 180;
    return {
      scale: [0, 1, 0],
      x: Math.cos(angle) * PARTICLE_DISTANCE,
      y: Math.sin(angle) * PARTICLE_DISTANCE,
      opacity: [0, 0.6, 0]
    };
  }
};

const Word = React.memo(function Word({ word, isActive, reduceMotion }) {
  const commonTransition = reduceMotion
    ? { duration: 0.25, ease: 'linear' }
    : { duration: 1.6, ease: 'easeInOut', times: [0, 0.5, 1] };

  const shortTransition = reduceMotion
    ? { duration: 0.18, ease: 'linear' }
    : { duration: 1.2, ease: 'easeOut' };

  return (
    <motion.span
      className={`relative block ${word.color} text-shadow-glow flex-row word-span ${isActive ? 'is-active' : ''}`}
      variants={spanVariants}
      initial="idle"
      animate={isActive ? 'active' : 'idle'}
      transition={commonTransition}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      <motion.span
        className="word-inner"
        variants={innerVariants}
        transition={commonTransition}
      >
        {word.text}
      </motion.span>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pulse-ring"
            variants={pulseVariants}
            initial="idle"
            animate="active"
            exit="idle"
            transition={shortTransition}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="spotlight"
            variants={spotlightVariants}
            initial="idle"
            animate="active"
            exit="idle"
            transition={commonTransition}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && !reduceMotion && (
          <div className="particles-container" aria-hidden>
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                className={`particle particle-${i}`}
                custom={i}
                variants={particleVariants}
                initial="idle"
                animate="active"
                exit="idle"
                transition={{ duration: 1.05, ease: 'easeOut', delay: 0.08 }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.span>
  );
}, (prev, next) => prev.isActive === next.isActive && prev.word.text === next.word.text);

const RhythmicWords = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <StyledWrapper>
      <div className="rhythmic-container">
        <h1 className="text-[10vw] text-center md:text-[15vw] lg:text-5xl leading-none select-none tracking-tightest font-extrabold flex flex-col lg:flex-row mt-4 gap-2 justify-center items-center">
          {WORDS.map((word, index) => (
            <Word key={word.text} word={word} isActive={activeIndex === index} reduceMotion={reduceMotion} />
          ))}
        </h1>

        <div className="progress-container" aria-hidden>
          {WORDS.map((_, index) => (
            <motion.div
              key={index}
              className="progress-dot"
              animate={{
                scale: activeIndex === index ? 1.4 : 1,
                opacity: activeIndex === index ? 1 : 0.45,
              }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
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
    perspective: 1200px;
    -webkit-perspective: 1200px;
  }

  .word-span {
    position: relative;
    display: inline-block;
    transition: transform 0.25s ease;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    z-index: 10;
  }

  .word-span.is-active .word-inner {
    text-shadow: 0 6px 0 rgba(0,0,0,0.28);
  }

  .word-inner {
    position: relative;
    z-index: 2;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    background: none !important;
    z-index: 30;
    mix-blend-mode: normal;
    will-change: transform;
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
    will-change: transform, opacity;
  }

  .spotlight {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%;
    height: 130%;
    background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 30%, transparent 60%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 3;
    will-change: transform, opacity;
  }

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
    will-change: transform, opacity;
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

  @media (max-width: 768px) {
    .progress-container { gap: 0.5rem; }
    .progress-dot { width: 8px; height: 8px; }
  }
`;

export default RhythmicWords;
