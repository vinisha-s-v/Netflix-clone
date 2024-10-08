import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full  h-screen object-cover"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320] mx-auto py-16">
              <h1 className=" m-10 text-3xl font-bold">Sign Up</h1>

              <form className="m-10 flex flex-col py-4 ">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-passwor"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Singn Up
                </button>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" /> Remeber me{" "}
                  </p>
                  <p>Need Help</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  {""}
                  <Link to="/login">Sign In</Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
      
   
  )
}

export default Signup
