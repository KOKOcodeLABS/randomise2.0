import About from "@/components/About";
import Events from "@/components/Events";
import Landing from "@/components/Landing";
import Planofaction from "@/components/Planofaction";
import Projects from "@/components/Projects";
import Faqs from "@/components/Faqs";
import React from "react";

export default function Home(){
  return (
    <>
    <Landing />
    <About />
    <Planofaction />
    <Projects />
    <Events />
    <Faqs />
    </>
  )
}