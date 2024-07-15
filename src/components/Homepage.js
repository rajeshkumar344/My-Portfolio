import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';



export default function Homepage() {
  return (
    <div className='home mt-0 '>
        <div className='mainpg '>
            <div>
                <h2 className=' font-bold text-2xl pb-4'>Hi all, I`m Rajesh</h2>
                <p className=' text-xl  font-medium'>
                    A passionate frontend web developer having an experience of
                    building web applications with Reactjs/Javascript/JQuery/Css/Html 
                    and some other cool libraries and frameworks and Cross Platforms
                </p>
                <div className='mt-16 flex justify-evenly'>
                   
                    <FaFacebook  size={50} color='blue'/>
               <Link to="https://www.linkedin.com/in/rajesh-kumar-allem/"    >
                <FaLinkedin  size={50} color='white'/></Link>
                <Link to="https://github.com/rajeshkumar344" >
                  <FaGithub  size={50} color='black'/></Link>
                    <FaTwitter  size={50} color='pink'/>
                </div>
                {/* <button className='btn btn-danger mt-10'>SEE MY RESUME</button> */}
            
            </div>
            <div>
                <img className='lpimg'alt='laptop img'
                src="https://media.istockphoto.com/id/1183228016/photo/hand-typing-on-laptop-with-linked-report-and-charts-around.jpg?s=2048x2048&w=is&k=20&c=iakEt3OzkCwpHJzWkzLP7tnYsVZb4RKBp06e-PKlcy4="/>
            </div>
        </div>
       <button className='btn btn-danger ml-40'>SEE MY RESUME</button>
    </div>
  )
}
