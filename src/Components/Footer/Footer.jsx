import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around gap-4 bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail />
          <a href="mailto:sahilchettiar111@gmail.com" className="ml-2"> sahilchettiar111@gmail.com </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/sahilchettiar" target="_blank" className="ml-2"> linkedin.com/sahilchettiar </a> 
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Saahil199909" target="_blank" className="ml-2"> github.com/Saahil199909 </a> 
        </li>
      </ul>
    </div>
  );
};

export default Footer;
