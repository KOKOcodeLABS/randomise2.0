import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .wrapper {
  display: inline-block;
  padding: 1rem 1.25rem;
  }

  .title {
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    font-weight: 700;
    color: #e6eef8; /* subtle off-white */
    /* larger, responsive heading */
    font-size: clamp(2.25rem, 6vw, 3.6rem);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
  }

  .cursor {
    display: inline-block;
    width: 10px;
    height: 1.1em;
    margin-left: 8px;
    background: currentColor;
    opacity: 0.85;
    border-radius: 2px;
  }

  .cursor.blinking { animation: blink 1s steps(2) infinite; }

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  .subtitle {
    margin-top: 0.5rem;
    color: #9aa5b1; /* muted gray-blue */
    font-size: 1.05rem;
    font-weight: 500;
    margin-bottom: 0;
  }
`;

const AboutUs_text = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'ABOUT US';
  const subtitle = 'We build, learn and ship projects together.';

  useEffect(() => {
    let timeoutId;
    const typingDelay = 120; // modest speed
    if (isTyping && displayText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingDelay);
    } else if (isTyping && displayText.length === fullText.length) {
      timeoutId = setTimeout(() => setIsTyping(false), 400);
    }
    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, fullText]);

  return (
    <StyledWrapper>
      <div className="wrapper" role="region" aria-label="About us header">
        <h1 className="title" aria-describedby="about-sub" data-text={fullText}>
          {displayText}
          <span className={`cursor ${isTyping ? 'blinking' : ''}`} aria-hidden></span>
        </h1>
        <p id="about-sub" className="subtitle" aria-hidden={isTyping}>{subtitle}</p>
      </div>
    </StyledWrapper>
  );
};

export default AboutUs_text;
