'use client';

import { motion } from "framer-motion";
import CardFlip from "./Cardflip";
import {
  ClipboardDocumentCheckIcon,
  UsersIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  FolderArrowDownIcon,
  AcademicCapIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "BUILDING FOUNDATIONS",
    subtitle: "Focused Learning & Growth",
    backgroundColor: "from-[#2D0FF7]/20 via-[#6A0FF4]/15 to-[#8900F2]/20",
    accentColor: "blue",
    frontIcon: <MagnifyingGlassIcon className="w-12 h-12" />,
    features: [
      {
        name: "Focused Learning",
        description: "We'll conduct regular workshops and learning opportunities on concepts to ensure everyone has a strong foundation."
      },
      {
        name: "Interactive Workshops",
        description: "Monthly sessions on key topics like data structures and programming will make learning both interactive and enjoyable."
      }
    ]
  },
  {
    name: "COMMUNITY BUILDING",
    subtitle: "Together We Grow",
    backgroundColor: "from-[#A10FF2]/20 via-[#BC00DD]/15 to-[#D100D1]/20",
    accentColor: "purple",
    frontIcon: <UsersIcon className="w-12 h-12" />,
    features: [
      {
        name: "Learning Together",
        description: "Together, we will mingle social gatherings with shared learning to create a fertile ground for growth for young minds."
      },
      {
        name: "Current Projects",
        description: "The projects currently under way will be continued, and new projects will be initiated with the contributions of each one made clear."
      },
      {
        name: "Balanced Events",
        description: "We will make sure that the events are balanced with regard to entertainment versus education, so it will be a vibrant, yet reliable community."
      }
    ]
  },
  {
    name: "WELCOMING TALENT",
    subtitle: "Inclusive & Nurturing",
    backgroundColor: "from-[#D100D1]/20 via-[#DB00B6]/15 to-[#E500A4]/20",
    accentColor: "cyan",
    frontIcon: <FolderArrowDownIcon className="w-12 h-12" />,
    features: [
      {
        name: "Inclusive Membership",
        description: "It opens up our membership to 2nd- and 3rd-year students, allows fresh ideas to flow in, and nurtures the talent which might have otherwise gone unnoticed."
      },
      {
        name: "Mentorship Program",
        description: "The seniors guide the new members into the program and offer a conducive environment where they can grow."
      }
    ]
  },
  {
    name: "SKILL DEMONSTRATION",
    subtitle: "Showcase & Publish",
    backgroundColor: "from-[#E500A4]/20 via-[#EF0078]/15 to-[#F20059]/20",
    accentColor: "orange",
    frontIcon: <ClipboardDocumentListIcon className="w-12 h-12" />,
    features: [
      {
        name: "Passion Projects",
        description: "Projects should be interest-based; each participant will get a chance to showcase their skill."
      },
      {
        name: "Publishing Platform",
        description: "The works will be published and promoted, with due credit to its contributors."
      }
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const subFeatureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Planofaction() {
  return (
    <section
      className="relative bg-gradient-to-br from-[#0d0618] via-[#1a0b3d] to-[#000000] py-14 sm:py-20 md:pb-44 overflow-hidden"
      id="planofaction"
      aria-labelledby="plan-heading"
    >
      {/* Background gradient effects */}
      <div
        className="absolute top-0 left-1/4 -z-10 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[40rem] bg-gradient-to-r from-[#2D0FF7]/12 via-[#6A0FF4]/8 to-[#8900F2]/12 opacity-35"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      
      <div
        className="absolute bottom-0 right-1/4 -z-10 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[35rem] bg-gradient-to-l from-[#F20059]/12 via-[#E500A4]/8 to-[#D100D1]/12 opacity-30"
          style={{
            clipPath:
              "polygon(26.4% 48.3%, 8.3% 88.2%, 0% 53.6%, 2.6% 17.8%, 7.5% 15.1%, 24.3% 36%, 44.7% 52.5%, 53.5% 50.6%, 55% 37.1%, 49.7% 12.8%, 78.7% 35.9%, 99.9% 0%, 94.6% 48.9%, 78.6% 36.1%, 41.1% 99.8%, 26.4% 48.3%)",
          }}
        />
      </div>

      <div className="mx-auto px-9 max-w-7xl">
        <motion.header
          className="mx-auto lg:mx-0 flex justify-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            id="plan-heading"
            className="mt-2 heading-hero text-center relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Plan Of Action
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#2D0FF7] via-[#A10FF2] to-[#F20059] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h1>
        </motion.header>

        <motion.dl
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-16 text-base leading-7 text-[#dadada] sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-32 lg:gap-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              variants={cardVariants}
              className="flex justify-center w-full"
            >
              <CardFlip
                title={feature.name}
                subtitle={feature.subtitle}
                features={feature.features}
                frontIcon={feature.frontIcon}
                backgroundColor={feature.backgroundColor}
                accentColor={feature.accentColor}
                size="large"
              />
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
