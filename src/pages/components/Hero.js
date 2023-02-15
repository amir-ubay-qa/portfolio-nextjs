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
  "API Test",
  "WebdriverIO"
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
        <div className="basis-2/4 hidden md:block">
          <Image
            src={hero}
            className="w-max"
            alt="Hero header"
          />
        </div>
        <div className="basis-4/4 first-letter:md:basis-2/4">
          <div>
            <h3 className='text-2xl text-gray-600 dark:text-gray-400 mb-4 font-semibold font-mono'>Hello, I am</h3>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-700 dark:text-gray-300">
              Amir Ubay
            </h1>
            <h2 className='text-2xl md:text-3xl pt-2 text-gray-700 dark:text-gray-400 mt-1'>
              SQA Engineer
            </h2>
            <TextTransition springConfig={presets.wobbly}>
              <p className="text-3xl text-orange-600 pt-6 font-bold">{TEXTS[index % TEXTS.length]}</p>
            </TextTransition>
            <div className='mt-4'>
            <button className="btn text-white btn-primary h-4 mr-4"><a href="https://www.linkedin.com/in/ubaidillah-amir-1083505a/">Hire Me</a></button>
            <button className="btn text-white bg-orange-600 border-none h-4 mr-4 mt-8"><a href="https://drive.google.com/file/d/1HE-H7xkbSL69cO9B_Ss2oMXgbtFYYnlY/view?usp=sharing" target='_blank'>Download My CV</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
