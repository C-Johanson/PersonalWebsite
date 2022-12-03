import React from 'react'
import {FaPython, FaJava, FaCode, FaRobot} from 'react-icons/fa'
import {SiJavascript, SiHtml5} from 'react-icons/si'

const Skills = () => {
  return (
    <div className='w-full md:h-screen p-12 flex flex-col items-center'>
        
        <div className='w-full md:grid grid-cols-3 gap-8'>
            <div className='py-2 col-span-2 col-start-2'>
                <p className='uppercase text-xl tracking-widest'><span className='text-[#5651e5]'>[04] </span>Skills</p>
                <p className='uppercase text-3xl md:text-4xl tracking-widest'>Programming Languages</p>
            
                <div className='flex flex-cols py-4 w-full relative'>
                    <div className='w-[96px]'>
                        <ul className='space-y-2 whitespace-nowrap pr-2 py-4 text-sm'>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>Assembly - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[460%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>C++ - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[383%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>CSS - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[230%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>HTML - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[308%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>Python - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[460%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>JavaScript - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[383%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>Java - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[535%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                            <li className='relative'>
                                <p className='uppercase tracking-wide text-right'>OCamel - </p>
                                <span className='absolute bg-red-400 opacity-25 w-[153%] left-[100%] ml-3 top-0 '>
                                &nbsp;
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-row w-[85%] static neumorphic2'>
                        <div className='border-r-2 border-slate-400 border-dotted w-[25%] h-full'></div>
                        <div className='border-r-2 border-slate-400 border-dotted w-[25%] h-full'></div>
                        <div className='border-r-2 border-slate-400 border-dotted w-[25%] h-full'></div>
                    </div>
                </div>
                
                <div className='flex flex-row justify-between w-[85%] ml-[15%] py-0 col-span-2 col-start-2 text-sm uppercase'>
                    <p className=''>Basic</p>
                    <p>Proficient</p>
                    <p>Advanced</p>
                    <p>Expert</p>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Skills