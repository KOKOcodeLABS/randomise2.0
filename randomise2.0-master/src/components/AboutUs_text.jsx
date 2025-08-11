import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AboutUs_text = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'ABOUT US';

  useEffect(() => {
    let timeoutId;
    if (isTyping && displayText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150);
    } else if (isTyping && displayText.length === fullText.length) {
      setIsTyping(false);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, fullText]);

  return (
    <StyledWrapper>
      <div className="neon-container">
        <h1 className="neon-text" data-text="ABOUT US">
          {displayText}
          <span className={`cursor ${isTyping ? 'blinking' : 'solid'}`}>|</span>
        </h1>
        <div className="neon-glow"></div>
        <div className="particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .neon-container {
    position: relative;
    display: inline-block;
    padding: 2rem;
  }

  .neon-text {
    font-family: "Inter", "Orbitron", monospace;
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #ffffff;
    text-shadow: 
      0 0 2px #16537e,
      0 0 4px #16537e,
      0 1px 0 rgba(0, 0, 0, 0.5);
    animation: subtleFlicker 4s infinite alternate;
    position: relative;
    z-index: 2;
  }

  .neon-text::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #16537e;
    text-shadow: 
      0 0 1px #16537e,
      0 0 2px #16537e;
    animation: subtleFlicker 6s infinite alternate-reverse;
    z-index: -1;
    opacity: 0.5;
  }

  .neon-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffff;
    text-shadow: none;
    opacity: 0.05;
    z-index: -2;
  }

  .cursor {
    color: #16537e;
    text-shadow: 
      0 0 1px #16537e,
      0 0 3px #16537e;
    font-weight: 100;
  }

  .cursor.blinking {
    animation: blink 1s infinite;
  }

  .cursor.solid {
    animation: subtleGlow 3s infinite alternate;
  }

  .neon-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 110%;
    height: 110%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 245, 255, 0.05) 0%,
      rgba(0, 128, 255, 0.02) 50%,
      transparent 70%
    );
    border-radius: 50%;
    animation: subtlePulse 4s ease-in-out infinite;
    z-index: -3;
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #16537e;
    border-radius: 50%;
    box-shadow: 0 0 3px #16537e;
    animation: gentleFloat 6s ease-in-out infinite;
    opacity: 0.6;
  }

  .particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
  .particle-2 { top: 30%; right: 15%; animation-delay: 0.5s; }
  .particle-3 { bottom: 25%; left: 20%; animation-delay: 1s; }
  .particle-4 { bottom: 35%; right: 10%; animation-delay: 1.5s; }
  .particle-5 { top: 60%; left: 5%; animation-delay: 2s; }
  .particle-6 { top: 15%; right: 5%; animation-delay: 2.5s; }
  .particle-7 { bottom: 15%; left: 50%; animation-delay: 3s; }
  .particle-8 { top: 50%; right: 20%; animation-delay: 3.5s; }

  @keyframes subtleFlicker {
    0%, 100% {
      text-shadow: 
        0 0 2px #16537e,
        0 0 4px #16537e,
        0 1px 0 rgba(0, 0, 0, 0.5);
    }
    50% {
      text-shadow: 
        0 0 1px #16537e,
        0 0 3px #16537e,
        0 1px 0 rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  @keyframes subtleGlow {
    0% {
      text-shadow: 
        0 0 1px #16537e,
        0 0 3px #16537e;
    }
    100% {
      text-shadow: 
        0 0 2px #16537e,
        0 0 4px #16537e,
        0 0 6px #16537e;
    }
  }

  @keyframes subtlePulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.05;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.05);
      opacity: 0.08;
    }
  }

  @keyframes gentleFloat {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.4;
    }
    33% {
      transform: translateY(-8px) rotate(120deg);
      opacity: 0.6;
    }
    66% {
      transform: translateY(4px) rotate(240deg);
      opacity: 0.5;
    }
  }

  /* Hover effects */
  .neon-container:hover .neon-text {
    text-shadow: 
      0 0 3px #16537e,
      0 0 6px #16537e,
      0 1px 0 rgba(0, 0, 0, 0.6);
    animation: none;
  }

  .neon-container:hover .neon-glow {
    opacity: 0.12;
    transform: translate(-50%, -50%) scale(1.08);
  }

  .neon-container:hover .particle {
    animation-duration: 4s;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .neon-text {
      letter-spacing: 2px;
    }
    
    .neon-container {
      padding: 1rem;
    }
  }
`;

export default AboutUs_text;
