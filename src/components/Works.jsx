import React from 'react'
import { data } from "../data/Projects.js";
const Works = () => {

    const project = data;

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                        key={index}
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="w-full h-[18rem] shadow-lg shadow-[#040c16] group container rounded-md flex justify-left text-left items-end pl-5 pb-2 mx-auto content-div relative overflow-hidden"
                    >
                        {/* Darker background on hover using the before pseudo-element */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 z-10">
                            <span className="text-2xl text-left font-bold text-white tracking-wider">
                                {item.name}
                            </span>
                            <div className="pt-4 text-left">
                                {/* eslint-disable-next-line */}
                                <a href={item.github}>
                                    <button className="text-center rounded-lg px-4 py-3 m-2  ml-0 bg-white hover:bg-slate-200 text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href={item.live} target="_blank">
                                    <button className="text-center rounded-lg px-4 py-3 m-2  ml-0 bg-white  hover:bg-slate-300 text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works
