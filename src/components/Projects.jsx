'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import LiveProjectsData from '../data/LiveProjectsData';
import PassionProjectsData from '../data/PassionProjectsData';

export default function Projects() {
  const liveProjectsRef = useRef(null);
  const passionProjectsRef = useRef(null);
  
  const liveProjectsInView = useInView(liveProjectsRef, { 
    threshold: 0.3, 
    once: true 
  });
  const passionProjectsInView = useInView(passionProjectsRef, { 
    threshold: 0.3, 
    once: true 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl glass-effect-strong hover:scale-105 transition-all duration-500 cursor-pointer"
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-brand-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
      
      <div className="relative z-10 p-6 text-white">
        <motion.h3 
          className="text-lg font-bold leading-6 text-gradient-primary group-hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <a href={project.href} className="hover:underline">
            {project.title}
          </a>
        </motion.h3>
        <p className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
          {project.description}
        </p>
      </div>
    </motion.article>
  );

  const ProjectSection = ({ 
    title, 
    projects, 
    sectionRef, 
    inView, 
    gradientClass = "bg-brand-gradient-primary" 
  }) => (
    <motion.div
      ref={sectionRef}
      className="min-h-screen w-full px-6 lg:px-10 flex items-center justify-center py-20"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={`w-full max-w-7xl ${gradientClass} rounded-3xl glass-effect p-8 lg:p-12`}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Section Title */}
          <motion.div 
            className="flex-shrink-0 text-center lg:text-left"
            variants={cardVariants}
          >
            <h2 className="heading-hero text-4xl lg:text-6xl xl:text-7xl font-black tracking-tight">
              {title.split(' ').map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      id="projects" 
      className="bg-brand-gradient-dark py-20 overflow-hidden"
    >
      {/* Live Projects Section */}
      <ProjectSection
        title="Live Projects"
        projects={LiveProjectsData}
        sectionRef={liveProjectsRef}
        inView={liveProjectsInView}
        gradientClass="bg-brand-gradient-blue"
      />

      {/* Passion Projects Section */}
      <ProjectSection
        title="Passion Projects"
        projects={PassionProjectsData}
        sectionRef={passionProjectsRef}
        inView={passionProjectsInView}
        gradientClass="bg-brand-gradient-pink"
      />
    </section>
  );
}
