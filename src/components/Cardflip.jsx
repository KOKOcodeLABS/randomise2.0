'use client';

import { useState } from "react";

export default function CardFlip({
  title = "BUILDING FOUNDATIONS",
  subtitle = "Hover to explore",
  features = [],
  frontIcon = null,
  backgroundColor = "from-purple-900/20 via-blue-900/20 to-cyan-900/20",
  accentColor = "blue",
  size = "medium" // small, medium, large
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Size configurations
  const sizeConfig = {
    small: {
      container: "w-full max-w-[280px] h-[320px]",
      title: "text-lg md:text-xl",
      subtitle: "text-xs",
      feature: "text-xs",
      padding: "p-4",
      backPadding: "p-5"
    },
    medium: {
      container: "w-full max-w-[380px] h-[440px]",
      title: "text-xl md:text-2xl lg:text-3xl",
      subtitle: "text-sm",
      feature: "text-sm",
      padding: "p-6",
      backPadding: "p-6"
    },
    large: {
      container: "w-full max-w-[480px] h-[520px]",
      title: "text-2xl md:text-3xl lg:text-4xl",
      subtitle: "text-base md:text-lg",
      feature: "text-sm md:text-base",
      padding: "p-8",
      backPadding: "p-8"
    }
  };

  const config = sizeConfig[size];

  // Color configurations
  const colorConfig = {
    blue: {
      accent: "text-[#6A0FF4]",
      border: "border-[#2D0FF7]/30",
      glow: "shadow-[#2D0FF7]/20",
      gradient: "from-[#2D0FF7]/10 via-[#6A0FF4]/5 to-transparent",
      hoverGradient: "group-hover:from-[#2D0FF7]/20 group-hover:via-[#6A0FF4]/10 group-hover:to-transparent"
    },
    purple: {
      accent: "text-[#BC00DD]",
      border: "border-[#A10FF2]/30",
      glow: "shadow-[#A10FF2]/20",
      gradient: "from-[#A10FF2]/10 via-[#BC00DD]/5 to-transparent",
      hoverGradient: "group-hover:from-[#A10FF2]/20 group-hover:via-[#BC00DD]/10 group-hover:to-transparent"
    },
    cyan: {
      accent: "text-[#E500A4]",
      border: "border-[#D100D1]/30",
      glow: "shadow-[#D100D1]/20",
      gradient: "from-[#D100D1]/10 via-[#DB00B6]/5 to-transparent",
      hoverGradient: "group-hover:from-[#D100D1]/20 group-hover:via-[#DB00B6]/10 group-hover:to-transparent"
    },
    orange: {
      accent: "text-[#F20059]",
      border: "border-[#EF0078]/30",
      glow: "shadow-[#EF0078]/20",
      gradient: "from-[#EF0078]/10 via-[#F20059]/5 to-transparent",
      hoverGradient: "group-hover:from-[#EF0078]/20 group-hover:via-[#F20059]/10 group-hover:to-transparent"
    }
  };

  const colors = colorConfig[accentColor];

  return (
    <div
      className={`relative ${config.container} group [perspective:2000px] cursor-pointer mx-auto`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`
          relative w-full h-full
          [transform-style:preserve-3d]
          transition-all duration-700 ease-out
          ${isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}
        `}
      >
        {/* Front of card */}
        <div
          className={`
            absolute inset-0 w-full h-full
            [backface-visibility:hidden] [transform:rotateY(0deg)]
            overflow-hidden rounded-2xl lg:rounded-3xl
            bg-gradient-to-br from-[#2a1562] via-[#3d1f70] to-[#2a1562] 
            border-2 ${colors.border}
            shadow-2xl ${colors.glow}
            backdrop-blur-sm
            transition-all duration-700
            group-hover:shadow-3xl group-hover:${colors.glow}
            group-hover:border-opacity-60
            ${isFlipped ? "opacity-0" : "opacity-100"}
          `}
        >
          {/* Stronger background gradient overlay for contrast */}
          <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColor} opacity-80`} />
          
          {/* Additional contrast layer */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl lg:rounded-3xl" />
          
          {/* Animated particles/dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`
                  absolute w-2 h-2 ${colors.accent} rounded-full opacity-20
                  animate-pulse
                `}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Front content */}
          <div className={`relative h-full flex flex-col justify-between ${config.padding}`}>
            {/* Icon/Logo area */}
            <div className="flex-1 flex items-center justify-center">
              {frontIcon ? (
                <div className={`${colors.accent} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  {frontIcon}
                </div>
              ) : (
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} border ${colors.border} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors.gradient}`} />
                </div>
              )}
            </div>

            {/* Title area */}
            <div className="text-center space-y-2">
              <h3 className={`${config.title} heading-card transition-all duration-500 group-hover:translate-y-[-4px] text-hover-glow`}>
                {title}
              </h3>
              <p className={`${config.subtitle} text-subtitle transition-all duration-500 group-hover:translate-y-[-2px] delay-75`}>
                {subtitle}
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <div className={`w-2 h-2 rounded-full ${colors.accent} opacity-60`} />
            </div>
            <div className="absolute bottom-4 left-4">
              <div className={`w-1 h-8 ${colors.accent} opacity-40 rounded-full`} />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`
            absolute inset-0 w-full h-full
            [backface-visibility:hidden] [transform:rotateY(180deg)]
            ${config.backPadding} rounded-2xl lg:rounded-3xl
            bg-gradient-to-br from-[#2a1562] via-[#3d1f70] to-[#2a1562] 
            border-2 ${colors.border}
            shadow-2xl ${colors.glow}
            backdrop-blur-sm
            flex flex-col
            transition-all duration-700
            group-hover:shadow-3xl group-hover:${colors.glow}
            group-hover:border-opacity-60
            ${!isFlipped ? "opacity-0" : "opacity-100"}
          `}
        >
          {/* Back background gradient with better contrast */}
          <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColor} opacity-60 rounded-2xl lg:rounded-3xl`} />
          
          {/* Additional contrast layer */}
          <div className="absolute inset-0 bg-black/15 rounded-2xl lg:rounded-3xl" />
          
          <div className="relative flex-1 flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h3 className={`${config.title} heading-card mb-2`}>
                {title}
              </h3>
              <div className={`w-12 h-0.5 bg-gradient-to-r ${colors.gradient} rounded-full`} />
            </div>

            {/* Features list */}
            <div className="flex-1 space-y-3 overflow-y-auto scrollbar-thin pr-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`
                    flex items-start gap-3 ${config.feature} text-gray-300
                    transition-all duration-500
                  `}
                  style={{
                    transform: isFlipped ? "translateX(0)" : "translateX(-20px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 300}ms`,
                  }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${colors.accent} mt-2 flex-shrink-0`} />
                  <div className="min-w-0 flex-1">
                    <div className="text-enhanced mb-1 break-words">
                      {feature.name}
                    </div>
                    <div className="text-description leading-relaxed break-words hyphens-auto">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}