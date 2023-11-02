import React from "react";

import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 via-slate-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="group text-5xl font-bold inline-flex border-b-4 border-gray-400 hover:scale-105 duration-200 ">
            About
            <span className="group-hover:rotate-[17deg] mb-2">
              <FcAbout size={65} className="ml-2  items-center" />
            </span>
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi, I'm Iskren Iliev, Information Technology student at New Bulgarian
          University for the third year. I have 1-year experience as front-end
          developer and proficient in JavaScript, HTML, CSS, ReactJS, Tailwind
          CSS, GitHub, Linux, Windows, Postman and NodeJs. I aim for
          professional development in the field and strive to become Full-stack
          developer. I don't currently have work experience in the field, but i
          have educated myself by taking courses at Softuni and working on
          independent projects. My strengths include working well in team,
          responsibility and ambition. I'm working hard to expand their skills
          and achieve excellent results in every task, with that I encounter.
        </p>

        <br />

        <p className="text-xl">
          If you have any questions or wish to contact me, please do not feel
          free to email me at -
          <a
            href="mailto:iskren201@gmail.com"
            className="text-blue-500 hover:underline"
          >
            iskren201@gmail.com
          </a>
          . I look forward to discussing the possibilities for collaboration!
        </p>
      </div>
    </div>
  );
};

export default About;
