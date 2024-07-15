import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { PiFileCssDuotone } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

export default function About() {
  return (
    <div className='mt-8 bg-white'>
        <div className='flex flex-col gap-2 mt-10 text-center text-xl '>
            <h1 className=' font-bold'>What I Do</h1>
            <p>PROFFICIONAL FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACH</p>
        </div>
        <div className='about'>
          <div>
            <img 
            src='https://media.istockphoto.com/id/2156600194/photo/web-design-inscription-against-laptop-and-code-background-learn-web-design-computer-courses.jpg?s=2048x2048&w=is&k=20&c=v_mSgX5yhhMPslQ4CvvHIJUa5ZqwWqGjQMmYClUByu4='alt='web designer'/>
          </div>
          <div>
            <h2 className='text-xl'>Frontend Web Developer</h2>
            <div className='mt-8 flex justify-around mb-8'>
            <IoLogoHtml5  size={50} color='red'/>
            <PiFileCssDuotone  size={50} color='blue'/>
            <TbBrandJavascript  size={50} color='yellow'/>
            <SiJquery  size={50} color='orangered'/>
            <FaReact  size={50} color='lightblue'/>
            </div>
            <div className=''>
              <p>⚡Building responsive web designs and applications required for user</p>
           <br></br>   <p>⚡Build reusable components for future use</p>
          <br></br>   <p>⚡Develop new user-facing features,ensure technical feasibility of UI/UX designs</p>
            </div>
          </div>
        </div>
    </div>
  )
}
