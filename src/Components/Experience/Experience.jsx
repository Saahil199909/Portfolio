import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaPython, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython
             color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDocker color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
         
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Software Developer , Blueray Automation</h2>
              <p className="text-sm leading-tight font-thin">
                March 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- As a Software Developer at Blueray Automation, I work on diverse projects,<br/> <span className="pl-2">including developing robust HRMS solutions and e-commerce platforms.</span> </li>
                <li>- Tech: <br/>  <span className="pl-2">Python, FastAPi, Docker, Postgres, React, AntDesign, Github-Actions </span> </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            {/* <RiNetflixFill color="#E50914" size={50} /> */}
            <span className="text-white">
              <h2 className="leading-tight">Software Developer , Route Mobile Limited </h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2022 - Feb 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Developed a feature-rich URL Shortener website to efficiently transform long URLs into concise, <br/> <span className="pl-2"> shareable links, enhancing usability and accessibility. </span> </li>
                <li>- Tech: <br/>  <span className="pl-2">Python, Flask, Docker, MongoDB, Javascript, NodeJS </span> </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Python Developer , G10 Consultancy Digital Pvt.</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2022 - Aug 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as a Python Developer, specializing in creating custom APIs using Django Rest Framework and Python. <br/> <span className="pl-2"> Effectively utilized Django ORM for seamless database integration and operations.</span> </li>
                <li>- Tech: <br/>  <span className="pl-2">Python, Django, Postgress </span> </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
