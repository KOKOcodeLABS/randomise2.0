"use client";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { useAnimationFrame } from "motion/react"

import { cn } from "@/lib/utils"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"

const FloatingContext = createContext(null)

const Floating = ({
  children,
  className,
  sensitivity = 1,
  easingFactor = 0.05,
  ...props
}) => {
  const containerRef = useRef(null)
  const elementsMap = useRef(new Map())
  const mousePositionRef = useMousePositionRef(containerRef)

  const registerElement = useCallback((id, element, depth) => {
    elementsMap.current.set(id, {
      element,
      depth,
      currentPosition: { x: 0, y: 0 },
    })
  }, [])

  const unregisterElement = useCallback((id) => {
    elementsMap.current.delete(id)
  }, [])

  useAnimationFrame(() => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const centerX = containerRect.width / 2
    const centerY = containerRect.height / 2

    elementsMap.current.forEach((data) => {
      if (!data.element) return
      
      const strength = (data.depth * sensitivity) / 20

      // Calculate relative position from center
      const relativeX = (mousePositionRef.current.x - centerX) * strength * 0.01
      const relativeY = (mousePositionRef.current.y - centerY) * strength * 0.01

      // Apply easing
      data.currentPosition.x += (relativeX - data.currentPosition.x) * easingFactor
      data.currentPosition.y += (relativeY - data.currentPosition.y) * easingFactor

      // Apply transform
      data.element.style.transform = `translate3d(${data.currentPosition.x}px, ${data.currentPosition.y}px, 0)`
    })
  })

  return (
    <FloatingContext.Provider value={{ registerElement, unregisterElement }}>
      <div
        ref={containerRef}
        className={cn("relative w-full h-full", className)}
        {...props}>
        {children}
      </div>
    </FloatingContext.Provider>
  );
}

export default Floating

export const FloatingElement = ({
  children,
  className,
  depth = 1,
  absolute = true
}) => {
  const elementRef = useRef(null)
  const idRef = useRef(Math.random().toString(36).substring(7))
  const context = useContext(FloatingContext)

  useEffect(() => {
    if (!elementRef.current || !context) return

    const nonNullDepth = depth ?? 0.01

    context.registerElement(idRef.current, elementRef.current, nonNullDepth)
    return () => context.unregisterElement(idRef.current);
  }, [depth, context])

  return (
    <div
      ref={elementRef}
      className={cn(
        "will-change-transform",
        absolute ? "absolute" : "relative",
        className
      )}>
      {children}
    </div>
  );
}
