import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { MdOutlineArrowOutward } from "react-icons/md";

import { Link } from 'react-scroll';
import CV from "../assets/Ahmed mahmoud.pdf";

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    AHMED
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px] text-xl'>
                    I’m a full-stack developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.
                </p>
                <div className="flex space-x-4">
                    {/* View Work Button */}
                    <Link to='work' duration={800} smooth={true}>
                        <div className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' size={25} />
                            </span>
                        </div>
                    </Link>

                    {/* View CV Button */}
                    <a href={CV} target="_blank" rel="noopener noreferrer">
                        <div className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>
                            View CV
                            <span className='ml-2'>
                                <MdOutlineArrowOutward size={22} />
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
