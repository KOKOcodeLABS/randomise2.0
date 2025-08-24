import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Planofaction_text = () => {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let raf = null;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // Faster mapping: start filling when the element's top is near the bottom of viewport
      // and finish sooner while scrolling past. This makes the fill visibly occur earlier.
      const start = vh * 0.85; // when rect.top === start => progress 0
      const end = vh * 0.35; // when rect.top === end => progress 1

      // Avoid division by zero
      const denom = start - end || 1;
      let raw = (start - rect.top) / denom;

      // Clamp then apply a mild sqrt easing so the fill appears faster early on
      raw = Math.max(0, Math.min(1, raw));
      const p = Math.sqrt(raw);

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setProgress(p));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <StyledWrapper ref={wrapperRef}>
      <button className="button" data-text="PLAN OF ACTION" aria-hidden="false">
        <span className="actual-text">PLAN OF ACTION</span>
        <span
          aria-hidden="true"
          className="hover-text"
          style={{
            width: `${Math.round(progress * 100)}%`,
            filter: progress > 0 ? 'drop-shadow(0 0 23px var(--animation-color))' : 'none',
          }}
        >
          PLAN OF ACTION
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255,255,255,0.6);
    --animation-color: #A10FF2;
    --fs-size: clamp(2rem, 5vw, 4rem);
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Inter", "Arial", sans-serif;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
    font-weight: 700;
    display: inline-block;
    white-space: nowrap;
    padding: 0.5rem;
  }
  
  /* Ensure actual text is properly positioned */
  .actual-text {
    padding: 0.5rem;
    white-space: nowrap;
  }
  
  /* this is the text, when you hover on button (now controlled by scroll progress) */
  .hover-text {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: var(--animation-color);
    width: 0%;
    height: 100%;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: width 180ms linear, filter 180ms linear;
    -webkit-text-stroke: 1px var(--animation-color);
    white-space: nowrap;
    padding: 0.5rem;
  }
  /* remove hover-based triggers; fill is now driven by scroll */
`;

export default Planofaction_text;
