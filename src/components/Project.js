import React from 'react'
import { GoProjectRoadmap } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <div className='myprojects p-4 min-h-screen '>
     <div className='myp flex flex-col text-center ml-12'>
        <div className=' flex mb-4 '>
            <GoProjectRoadmap size={50} />
            <h1 className='font-bold text-xl pl-2'>Projects</h1>
        </div>
        <div className='project'>
            <div className=''>
              <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                 <div className="box card">
                 <div className="card-body">
                <h5 className="card-title font-bold">E-Commerce Project</h5>
                <p className="card-text pb-2">fetched the products through an Api and displayed for user added functionality to it</p>
                <Link to="https://github.com/rajeshkumar344"  className="btn btn-primary">  
                  <FaGithub size={30} color='black' /></Link>
               </div>
              </div>
            </div>
            </div>
          </div>

          <div>
              <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                 <div className="box card">
                 <div className="card-body">
                <h5 className="card-title font-bold">Book Inventory</h5>
                <p className="card-text pb-2">fetched the products through an Api and Implemented AddToCart,RemoveFromCart functionality</p>
                <Link to="https://github.com/rajeshkumar344"  className="btn btn-primary"> 
                   <FaGithub size={30} color='black' /> </Link>
               </div>
              </div>
            </div>
            </div>
          </div>

          <div>
              <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                 <div className="box card">
                 <div className="card-body">
                <h5 className="card-title font-bold">food delivary app</h5>
                <p className="card-text pb-2">you find ur delishicious dishes can order your favourites and u can track the order</p>
                <Link to="https://github.com/rajeshkumar344"  className="btn btn-primary">  
                  <FaGithub size={30} color='black' /></Link>
               </div>
              </div>
            </div>
            </div>
          </div>

          <div>
              <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                 <div className="box card">
                 <div className="card-body">
                <h5 className="card-title font-bold">Todolist app</h5>
                <p className="card-text pb-2">Add the Todo on webpage by input we can remove it, we can select category also</p>
                <Link to="https://github.com/rajeshkumar344"  className="btn btn-primary">
                    <FaGithub size={30} color='black' /></Link>
               </div>
              </div>
            </div>
            </div>
          </div>

      </div>

      </div>
    </div>
  )
}
