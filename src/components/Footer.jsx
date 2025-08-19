<<<<<<< HEAD
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
=======
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./neonglass.css"; // Neon glass effect

const navigation = {
  main: [
>>>>>>> 8176e7e (updated footer)
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
<<<<<<< HEAD
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
=======
      icon: FaInstagram,
>>>>>>> 8176e7e (updated footer)
    },
    {
      name: "GitHub",
      href: "https://github.com/randomizemuj",
<<<<<<< HEAD
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
=======
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
>>>>>>> 8176e7e (updated footer)
    },
  ],
};

<<<<<<< HEAD
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#000000] via-[#1a0b3d] to-[#0d0618] border-t border-[#A10FF2]/20">
      <div className="mx-auto max-w-[100vw] overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-[#9ca3af] hover:text-gray-500"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#9ca3af] hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-[#9ca3af]">
          &copy; 2024 Randomize. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
=======
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
            <motion.div className="col-span-2 sm:col-span-1 flex flex-col items-end pr-4" variants={itemVariants}>
              <h4 className="font-semibold text-white text-shadow-glow">Follow Us</h4>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
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
>>>>>>> 8176e7e (updated footer)
