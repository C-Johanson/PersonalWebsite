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
            
                <div className='w-full flex float-left bg-slate-500'>
                    <div className='w-[20%] h-full bg-slate-200 border-black'>
                        <ul className='uppercase whitespace-nowrap list-none text-right'>
                            <li>
                                <em>Assembly - </em>
                            </li>
                            <li>
                                <em>Java - </em>
                            </li>
                            <li>
                                <em>Assembly - </em>
                            </li>
                            <li>
                                <em>Java - </em>
                            </li>
                            <li>
                                <em>Assembly - </em>
                            </li>
                            <li>
                                <em>Java - </em>
                            </li>
                        </ul>
                    </div>
                    <div className='border-r-2 border-slate-400 border-dotted w-[20%] h-full'>
                    <ul className='uppercase whitespace-nowrap list-none text-right w-full'>
                            <li className='w-full'>
                                <span className='w-[100%] bg-red-400 opacity-50'>
                                    &nbsp; 
                                </span>
                            </li>
                            <li>
                                <em>Java - </em>
                            </li>
                            <li>
                                <em>Assembly - </em>
                            </li>
                            <li>
                                <em>Java - </em>
                            </li>
                            <li>
                                <em>Assembly - </em>
                            </li>
                            <li>
                                <em>Java - </em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Skills