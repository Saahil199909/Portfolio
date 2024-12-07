import React from "react";
// import avatarImg from "../../assets/7358602-removebg-preview.png";
import avatarImgggg from "../../assets/sahil.png"
import TextChange from "../TextChange";
import { FaLinkedin,FaGithub, FaInstagram } from "react-icons/fa";




const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-2">
        A creative and results-driven software developer with a solid foundation in coding and problem-solving. 
        An experienced full-stack developer, passionate about delivering high-quality solutions through hard work, effective communication, 
        and scientific approach.
        </p>

        <div className="flex gap-4 mt-2">
        <a href="https://www.linkedin.com/in/sahilchettiar" target='_blank'>  <p className="text-4xl mt-2"> <FaLinkedin/> </p> </a>
        <a href="https://github.com/Saahil199909" target='_blank'>  <p className="text-4xl mt-2"> <FaGithub/> </p> </a>
        <a href="https://www.instagram.com/saahil_shetty09/" target='_blank'>  <p className="text-4xl mt-2"> <FaInstagram/> </p> </a>
        </div>

        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        {/* <img className="" src={avatarImg} alt="" /> */}
        <img className="" src={avatarImgggg} alt="" width={600}/>
      </div>
    </div>
  );
};

export default Home;
