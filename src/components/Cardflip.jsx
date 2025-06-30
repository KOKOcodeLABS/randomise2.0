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
      accent: "text-blue-400",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      hoverGradient: "group-hover:from-blue-500/20 group-hover:via-blue-500/10 group-hover:to-transparent"
    },
    purple: {
      accent: "text-purple-400",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/20",
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      hoverGradient: "group-hover:from-purple-500/20 group-hover:via-purple-500/10 group-hover:to-transparent"
    },
    cyan: {
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "shadow-cyan-500/20",
      gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
      hoverGradient: "group-hover:from-cyan-500/20 group-hover:via-cyan-500/10 group-hover:to-transparent"
    },
    orange: {
      accent: "text-orange-400",
      border: "border-orange-500/30",
      glow: "shadow-orange-500/20",
      gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
      hoverGradient: "group-hover:from-orange-500/20 group-hover:via-orange-500/10 group-hover:to-transparent"
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
            bg-black border ${colors.border}
            shadow-2xl ${colors.glow}
            transition-all duration-700
            group-hover:shadow-3xl group-hover:${colors.glow}
            ${isFlipped ? "opacity-0" : "opacity-100"}
          `}
        >
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColor} opacity-60`} />
          
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
              <h3 className={`${config.title} font-bold text-white leading-tight tracking-tight transition-all duration-500 group-hover:translate-y-[-4px]`}>
                {title}
              </h3>
              <p className={`${config.subtitle} text-gray-400 transition-all duration-500 group-hover:translate-y-[-2px] delay-75`}>
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
            bg-black border ${colors.border}
            shadow-2xl ${colors.glow}
            flex flex-col
            transition-all duration-700
            group-hover:shadow-3xl group-hover:${colors.glow}
            ${!isFlipped ? "opacity-0" : "opacity-100"}
          `}
        >
          {/* Back background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColor} opacity-40 rounded-2xl lg:rounded-3xl`} />
          
          <div className="relative flex-1 flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h3 className={`${config.title} font-bold text-white leading-tight tracking-tight mb-2`}>
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
                    <div className="font-semibold text-white mb-1 break-words">
                      {feature.name}
                    </div>
                    <div className="text-gray-400 leading-relaxed break-words hyphens-auto">
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