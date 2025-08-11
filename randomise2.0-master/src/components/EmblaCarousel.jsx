'use client'

import React, { useState, useEffect, useRef } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import useCarouselKeyboardNavigation from "./useCarouselKeyboardNavigation";

// ✅ Dynamic interactive events data
const eventsData = [
  {
    id: 1,
    title: "Tech Fest 2024",
    description: "Annual technology festival showcasing innovation",
    date: "Dec 15-17, 2024",
    status: "Completed",
    participants: "500+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737914588/Website/Events/fest_mbjr9x.jpg",
    tags: ["Technology", "Innovation", "Competition"]
  },
  {
    id: 2,
    title: "CP Workshop",
    description: "Competitive Programming masterclass for beginners",
    date: "Nov 20, 2024",
    status: "Completed",
    participants: "200+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912586/Website/Events/cp-workshop_gheuws.jpg",
    tags: ["Programming", "Workshop", "Learning"]
  },
  {
    id: 3,
    title: "GitHub Workshop",
    description: "Learn version control and collaboration",
    date: "Oct 28, 2024",
    status: "Completed",
    participants: "150+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912590/Website/Events/GitHub_Workshop_ttcyex.png",
    tags: ["Git", "Collaboration", "Workshop"]
  },
  {
    id: 4,
    title: "Hello World",
    description: "Introduction to programming for freshers",
    date: "Sep 10, 2024",
    status: "Completed",
    participants: "300+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912586/Website/Events/hello-world_bh9wc9.jpg",
    tags: ["Beginner", "Programming", "Orientation"]
  },
  {
    id: 5,
    title: "Hello World 2024",
    description: "Advanced programming concepts workshop",
    date: "Sep 15, 2024",
    status: "Completed",
    participants: "250+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912595/Website/Events/hello-world-2024_cahxla.png",
    tags: ["Advanced", "Programming", "Workshop"]
  },
  {
    id: 6,
    title: "ANN Class",
    description: "Artificial Neural Networks deep dive",
    date: "Aug 22, 2024",
    status: "Completed",
    participants: "180+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912597/Website/Events/ANN_Class_bjcrhy.png",
    tags: ["AI", "Machine Learning", "Class"]
  },
  {
    id: 7,
    title: "Freshman Meetup",
    description: "Welcome event for new students",
    date: "Aug 5, 2024",
    status: "Completed",
    participants: "400+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912589/Website/Events/freshman-meetup_eorghl.png",
    tags: ["Social", "Networking", "Welcome"]
  },
  {
    id: 8,
    title: "Web Dev Workshop 2",
    description: "Advanced web development concepts",
    date: "Jul 18, 2024",
    status: "Completed",
    participants: "220+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912591/Website/Events/WebDevWS-2_zzidyh.png",
    tags: ["Web Dev", "Frontend", "Workshop"]
  },
  {
    id: 9,
    title: "Web Dev Workshop 1",
    description: "Introduction to web development",
    date: "Jul 10, 2024",
    status: "Completed",
    participants: "280+",
    image: "https://res.cloudinary.com/randomize/image/upload/v1737912587/Website/Events/WebDevWS-1_srdxwm.jpg",
    tags: ["Web Dev", "Beginner", "Workshop"]
  }
];

const EmblaCarousel = (props) => {
  const containerRef = useRef();
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [isMobile, setIsMobile] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useCarouselKeyboardNavigation(
    containerRef,
    onPrevButtonClick,
    onNextButtonClick
  );

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(autoplayInterval);
  }, [emblaApi]);

  // Update selected index when embla changes
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      // This will be handled by the useDotButton hook
    };

    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    // Initialize isMobile state after component mounts (client-side only)
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-6 py-12 rounded-3xl bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl"
    >
      {/* Hi-tech corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400 rounded-tr-lg"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-pink-400 rounded-bl-lg"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400 rounded-br-lg"></div>
      
      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>

      <section className="embla-hitech relative">
        {/* Carousel viewport with enhanced styling */}
        <div
          className="embla__viewport-hitech relative rounded-2xl overflow-hidden border border-slate-600/30 shadow-inner"
          ref={emblaRef}
        >
          {/* Viewport glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur opacity-50 animate-pulse"></div>
          
          <div className="embla__container relative z-10">
            {eventsData.map((event, index) => (
              <div className="embla__slide-hitech group" key={event.id}>
                <div className="relative overflow-hidden rounded-xl cursor-pointer"
                     onClick={() => setSelectedEvent(event)}>
                  {/* Interactive overlay with event info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2 text-cyan-300">{event.title}</h3>
                      <p className="text-sm text-slate-200 mb-3 line-clamp-2">{event.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-purple-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-purple-400/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-cyan-400 font-medium">{event.date}</span>
                        <span className="text-green-400 font-medium">{event.participants} attendees</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-tl-xl font-bold text-xs">
                        CLICK TO EXPLORE
                      </div>
                    </div>
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-30 bg-green-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold border border-green-400/50">
                    {event.status}
                  </div>
                  
                  {/* Image overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Holographic border */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <img
                    src={event.image}
                    alt={event.title}
                    className="embla__slide__img-hitech w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  
                  {/* Scan line effect on hover */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-fast z-30"></div>
                  
                  {/* Interactive pulse effect */}
                  <div className="absolute inset-0 border-4 border-cyan-400/0 rounded-xl group-hover:border-cyan-400/30 transition-all duration-300 group-hover:animate-pulse z-25"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced controls */}
        <div className="embla__controls-hitech mt-8 flex items-center justify-between px-4">
          {/* Navigation buttons with event counter */}
          <div className="embla__buttons-hitech flex gap-4 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className="relative"
              />
            </div>
            
            {/* Live event counter */}
            <div className="flex items-center gap-3 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600/30">
              <div className="text-cyan-400 font-bold text-lg">
                {String(selectedIndex + 1).padStart(2, '0')}
              </div>
              <div className="w-px h-6 bg-slate-600"></div>
              <div className="text-slate-400 text-sm">
                {String(eventsData.length).padStart(2, '0')}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className="relative"
              />
            </div>
          </div>

          {/* Enhanced dot indicators with event titles */}
          {!isMobile && (
            <div className="embla__dots-hitech flex gap-3 bg-slate-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-600/30">
              {scrollSnaps.map((_, index) => (
                <div key={index} className="relative group">
                  <DotButton
                    onClick={() => onDotButtonClick(index)}
                    className={`embla__dot-hitech transition-all duration-300 ${
                      index === selectedIndex 
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-400/50' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                  {index === selectedIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur animate-pulse opacity-50"></div>
                  )}
                  {/* Tooltip with event title */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {eventsData[index]?.title}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interactive progress indicator with event info */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transition-all duration-300 ease-out shadow-lg shadow-cyan-400/30"
              style={{ width: `${((selectedIndex + 1) / eventsData.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-slate-400 text-sm font-medium min-w-fit">
            {eventsData[selectedIndex]?.title}
          </div>
        </div>
      </section>

      {/* Interactive Modal/Popup for selected event */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedEvent(null)}>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full border border-slate-700/50 shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Close button */}
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-400/30 text-red-400 hover:bg-red-500/30 transition-colors duration-200 flex items-center justify-center"
              >
                ✕
              </button>
              
              {/* Event image */}
              <div className="h-64 overflow-hidden rounded-t-2xl relative">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              
              {/* Event details */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-cyan-300 mb-2">{selectedEvent.title}</h2>
                <p className="text-slate-300 mb-4">{selectedEvent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-cyan-400 text-sm font-medium">Date</div>
                    <div className="text-white font-bold">{selectedEvent.date}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-purple-400 text-sm font-medium">Participants</div>
                    <div className="text-white font-bold">{selectedEvent.participants}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-green-400 text-sm font-medium">Status</div>
                    <div className="text-white font-bold">{selectedEvent.status}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-purple-400/30 text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
