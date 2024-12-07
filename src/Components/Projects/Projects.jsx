import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg from "../../assets/chatApp.png";
import shortnerImg from "../../assets/shortner.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          projectImg = {bannerImg}
          projectLink = 'https://chat-app-mern-cyan-eight.vercel.app/'
          ProjectSourceCode = 'https://github.com/Saahil199909/ChatApp'
          title="ChatApp - Real Time Messaging"
          main="ChatApp is a platform built with the MERN stack (MongoDB, Express.js, React, Node.js, Websockets). <br /> <br /> It allows users to send real-time and instant messages with seamless communication and a fully responsive user interface."
        />
        <ProjectCard
        projectImg = {shortnerImg}
          projectLink = 'https://shortner-fe.vercel.app/'
          ProjectSourceCode = 'https://github.com/Saahil199909/Shortner-BE'
          title="URl Shortner (Acculync)"
          main="URL Shortener is a web application built with Python, FastAPI, PostgreSQL, and React. <br /> <br /> It efficiently transforms long URLs into concise, shareable links, offering a seamless and user-friendly experience."
        />
      </div>
    </div>
  );
};

export default Projects;
