import React from "react";
import HeroImage from "../../assets/heroImage.png";
import { Link } from "react-scroll";

import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-slate-800 to-gray-700"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end Developer
          </h2>
          <p className="text-gray-300 py-6 max-w-md text-2xl">
            Hello, I am a Junior front-end developer with over 1 year of
            experience.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 my-2 flex 
                        items-center rounded-md bg-gradient-to-r from-cyan-500
                         to-blue-500 cursor-pointer text-xl hover:scale-105 duration-200 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdKeyboardArrowRight size={25} className="ml-1 " />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Change me"
            className="rounded-2xl mx-auto md:w-full w-96 h-72 mb-4"
            // h-size(px)
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
