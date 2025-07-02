import React from 'react';
import styled from 'styled-components';

const Planofaction_text = () => {
  return (
    <StyledWrapper>
      <button className="button" data-text="PLAN OF ACTION">
        <span className="actual-text">PLAN OF ACTION</span>
        <span aria-hidden="true" className="hover-text">PLAN OF ACTION</span>
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
  
  /* this is the text, when you hover on button */
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
    transition: width 0.5s ease-in-out;
    -webkit-text-stroke: 1px var(--animation-color);
    white-space: nowrap;
    padding: 0.5rem;
  }
  /* hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
  
  /* Enhanced glow effect */
  .button:hover {
    filter: drop-shadow(0 0 15px rgba(161, 15, 242, 0.4));
  }`;

export default Planofaction_text;
