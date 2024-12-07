import React from "react";
// import AboutImg from "../../assets/7358653-removebg-preview.png";
import AboutImg from "../../assets/sahil2.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-20"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <div className="mr-[100px] mb-[100px]">
          <img className="md:h-[450px]" src={AboutImg} alt="About img"/>
          </div>

          <ul>
          <div className="flex gap-3 py-4">
              <span className="w-96">
                <p className="font-semibold text-md ml-8">
                I am a passionate and results-driven Full Stack Developer with a strong foundation in building dynamic and user-friendly applications. With expertise in both frontend and backend technologies, I specialize in crafting seamless digital experiences. 
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Mern Stack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Proficient in React.js, JavaScript (ES6+), Node.js, Express.js , HTML5, and CSS3. Experienced in creating responsive, accessible, and modern UI designs using Tailwind CSS, ant-design.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Hands-on experience with relational databases like PostgreSQL and MySQL, as well as NoSQL solutions such as MongoDB. Proficient in writing efficient queries and optimizing database performance
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full Stack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Skilled in developing robust and scalable APIs using FastAPI, Flask, Django, Python, Node.js and Express.js . Familiar with RESTful architectures.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
