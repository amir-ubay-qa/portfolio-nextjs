import Image from 'next/image'
import hero from '../assets/hero.svg'
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Cypress",
  "Robotframework",
  "Postman",
  "Manual Test",
  "Automation",
  "API Test"
]

const Hero = () => {

  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() =>{
      setIndex(index => index + 1)
    },2000);
    return () => clearTimeout(intervalId)
  })



  return (
    <div className="hero min-h-screen bg-base-200 m-auto" id="hero">
      <div className="hero-content flex flex-row lg:flex-row-reverse w-screen">
        <div className="basis-2/4">
          <Image
            src={hero}
            className="w-max"
            alt="Hero header"
          />
        </div>
        <div className="basis-2/4">
          <div>
            <h1 className="text-5xl font-bold">
              Amir Ubay - <span className="text-5xl pt-2 text-orange-600 font-bold">QA Engineer</span> 
            </h1>
            <TextTransition springConfig={presets.wobbly}>
              <p className="text-3xl text-primary pt-6 font-bold">{TEXTS[index % TEXTS.length]}</p>
            </TextTransition>
            <div className='mt-8'>
            <button className="btn text-white btn-primary h-4 mr-4"><a href="#skill">Hire Me</a></button>
            <button className="btn text-white btn-success h-4  mr-4"><a href="#skill">Download My CV</a></button>
            <button className="btn text-white btn-info h-4 mr-4"><a href="#skill">My Experiences</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
