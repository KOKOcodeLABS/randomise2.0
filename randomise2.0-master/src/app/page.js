import About from "@/components/About";
import NewEvents from "@/components/NewEvents";
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
    <NewEvents />
    <Faqs />
    </>
  )
}