import React from "react";

import { FcAbout } from "react-icons/fc";


const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-700 via-slate-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="group text-5xl font-bold inline-flex border-b-4 border-gray-400 hover:scale-105 duration-200 ">
                        About<span className="group-hover:rotate-[17deg] mb-2">
                            <FcAbout size={65} className="ml-2  items-center" />
                        </span>
                    </p>
                </div>
                <p className="text-xl mt-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, dolorem
                    minima sit soluta id corporis eaque error recusandae eius unde! Necessitatibus nihil eligendi,
                    fuga voluptates perspiciatis dolore voluptate et soluta ad quam non ipsam, dignissimos
                    labore eius explicabo accusamus. Dignissimos, dolorum quis? Eius
                    placeat nesciunt distinctio dicta incidunt ducimus dolor!</p>

                <br />

                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora assumenda
                    consequuntur architecto repellat nobis eum dolorem ex. A aliquam sint blanditiis voluptate? Ipsam, alias.
                    Fuga sint animi similique autem laboriosam, labore distinctio laudantium sapiente. Nobis placeat unde labore,
                    earum porro perspiciatis incidunt cum sed! Quis praesentium reprehenderit aspernatur perspiciatis debitis!</p>
            </div>
        </div>
    );
};

export default About;
