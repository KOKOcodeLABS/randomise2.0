'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./neonglass.css"; // Neon glass effect

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "The Fest", href: "/thefest" },
    { name: "Our Team", href: "/teams" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/randomizemuj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: FaInstagram,
    },
    {
      name: "GitHub",
      href: "https://github.com/randomizemuj",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
  ],
};

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="relative w-full bg-gradient-to-t from-[#0d0618] via-[#1a0b3d] to-[#A10FF2]/10 border-t border-[#A10FF2]/30 text-gray-400 overflow-hidden neon-glass"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated Gradient Background Element */}
      <motion.div
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 w-[150%] h-[220px] blur-3xl"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="aspect-[1155/678] w-full bg-gradient-to-tr from-[#A10FF2] via-[#2D0FF7] to-[#F20059] opacity-20"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Floating Glow Circles */}
      <motion.div
        className="absolute right-10 bottom-10 w-24 h-24 rounded-full bg-[#A10FF2]/30 blur-2xl animate-pulse"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 xl:gap-16">
          {/* Branding Section */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <h3 className="text-3xl font-extrabold text-white text-shadow-glow neon-glass">
              Randomize();
            </h3>
            <p className="mt-4 text-base leading-6 text-gray-300/80 neon-glass">
              The coding powerhouse of MUJ. A community of passionate coders, hackers, designers, and builders dedicated to pushing the boundaries of technology.
            </p>
          </motion.div>

          {/* Links Section */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white text-shadow-glow">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-[#A10FF2] transition-colors duration-300 neon-glass"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white text-shadow-glow">Contact</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:contact.randomize@muj.manipal.edu"
                    className="text-sm text-gray-400 hover:text-[#A10FF2] transition-colors duration-300 neon-glass"
                  >
                    contact.randomize@muj.manipal.edu
                  </a>
                </li>
                <li>
                  <p className="text-sm neon-glass">Manipal University Jaipur</p>
                </li>
              </ul>
            </motion.div>
            <motion.div className="col-span-2 sm:col-span-1 flex flex-col items-start sm:items-end pr-0 sm:pr-4" variants={itemVariants}>
              <h4 className="font-semibold text-white text-shadow-glow">Follow Us</h4>
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-[#A10FF2] transition-transform duration-300 hover:scale-125 neon-glass flex justify-center items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <motion.div
                      whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 8px #A10FF2)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-7 w-7" aria-hidden="true" />
                    </motion.div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 border-t border-[#A10FF2]/30 pt-8 text-center neon-glass"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} <span className="text-[#A10FF2] font-bold">Randomize();</span> — Designed & developed by the club.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
