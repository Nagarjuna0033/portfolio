import React from "react";
import Hero from "./Hero";
import Particle from "../Shared/Particles";
import Intro from "./Intro";

export default function Home() {
  return (
    <div>
      <Particle />
      <Hero />
      <Intro />
    </div>
  );
}
