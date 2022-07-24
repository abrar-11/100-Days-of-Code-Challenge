import React from 'react'
import logo from '../assets/logo.svg'
const Header = () => {
  return (
    <div className="flex items-center justify-between py-5">
        <div className="logo flex items-center space-x-3">
            <img src={logo} alt="" /> <span className="font-bold  text-gray-800">TECHIYON</span>
        </div>

        <div className="space-x-8 flex-grow text-center  text-xs font-medium uppercase text-gray-500">
            <a href="" className="hover:text-gray-600">Features</a>
            <a href="" className="hover:text-gray-600">Pricing</a>
            <a href="" className="hover:text-gray-600">Watch a demo</a>
        </div>

        <div className="space-x-4">
            <button className="shadow-md rounded px-7 py-3 text-xs font-medium text-gray-800 uppercase hover:shadow-lg ">
                Log In
            </button>
            <button className="shadow-md rounded px-7 py-3 text-xs font-medium bg-emerald-500  text-white uppercase hover:shadow-lg ">
               Sign up
            </button>
        </div>
    </div>
  )
}

export default Header