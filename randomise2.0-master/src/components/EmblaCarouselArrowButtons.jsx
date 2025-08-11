import React, { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button-hitech embla__button--prev group relative w-14 h-14 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full transition-all duration-300 hover:bg-slate-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25 disabled:opacity-30 disabled:cursor-not-allowed"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg-hitech w-6 h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {/* Pulse effect on hover */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button-hitech embla__button--next group relative w-14 h-14 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full transition-all duration-300 hover:bg-slate-700 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/25 disabled:opacity-30 disabled:cursor-not-allowed"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg-hitech w-6 h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          className="text-slate-300 group-hover:text-purple-400 transition-colors duration-300"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {/* Pulse effect on hover */}
      <div className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
      {children}
    </button>
  )
}
