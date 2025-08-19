import React, { useEffect, useRef, useState } from 'react';
import './neonglass.css';

const NeonGlassCard = ({ 
  title = "Options", 
  subtitle = "Select an option",
  features = [],
  frontIcon = null,
  hue1 = 300, // Pink hue
  hue2 = 240, // Blue hue
  className = ""
}) => {
  const menuRef = useRef(null);
  const cardId = `card-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const card = menuRef.current;
    if (card) {
      card.style.setProperty('--hue1', hue1);
      card.style.setProperty('--hue2', hue2);
    }
  }, [hue1, hue2]);

  useEffect(() => {
    const card = menuRef.current;
    if (card) {
      // Auto-open the card and add glow effect
      card.classList.add('open');
    }
  }, []);

  const handleCardClick = (event) => {
    const card = menuRef.current;
    const target = event.target;
    
    if (card && target.matches('li')) {
      card.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
      target.classList.add('selected');
    }
  };

  return (
    <div 
      className={`neon-glass-card ${className}`}
      ref={menuRef}
      onClick={handleCardClick}
      style={{
        '--hue1': hue1,
        '--hue2': hue2,
        position: 'relative',
        visibility: 'visible',
        opacity: 1,
        pointerEvents: 'auto',
        filter: 'blur(0px)',
        fontFamily: "'Asap', sans-serif",
        color: '#737985',
  /* Responsive sizing */
  minWidth: 'min(100%, 340px)',
  width: '100%',
  minHeight: '300px',
        borderRadius: 'var(--radius)',
        border: 'var(--border) solid var(--border-color)',
        padding: '1.5em',
        background: 'linear-gradient(235deg, hsl(var(--hue1) 50% 10% / 0.8), hsl(var(--hue1) 50% 10% / 0) 33%), linear-gradient(45deg , hsl(var(--hue2) 50% 10% / 0.8), hsl(var(--hue2) 50% 10% / 0) 33%), linear-gradient(hsl(220deg 25% 4.8% / 0.66))',
        backdropFilter: 'blur(12px)',
        boxShadow: 'hsl(var(--hue2) 50% 2%) 0px 10px 16px -8px, hsl(var(--hue2) 50% 4%) 0px 20px 36px -14px',
        overflow: 'hidden'
      }}
    >
      <div className="shine"></div>
      <div className="shine shine-bottom"></div>
      <div className="glow"></div>
      <div className="glow glow-bottom"></div>
      
      
      <section className="inner">
        <header className="flex items-center gap-4 mb-6">
          {frontIcon && (
            <div className="flex-shrink-0 text-white opacity-80">
              {React.cloneElement(frontIcon, { className: "w-10 h-10" })}
            </div>
          )}
          <div>
            <h3 className="text-white font-semibold text-xl">{title}</h3>
            {subtitle && <p className="text-gray-300 text-base opacity-80">{subtitle}</p>}
          </div>
        </header>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="group">
              <div className="font-medium text-white mb-2 text-base">{feature.name}</div>
              <div className="text-gray-300 text-sm opacity-90 leading-relaxed">
                {feature.description}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NeonGlassCard;
