import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {


   

  return (
    <div>
<nav className="nav">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="head">Phala</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="button">Register Now</button>
      <button data-collapse-toggle="navbar-cta" type="button" className="drawer" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
   
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
    {
      ["Home","Donation","About us" ,"Contact us"].map((item,index)=>
        (
          <li key={index}>
          <a href='' className="block py-2 px-3 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:dark:hover:text-amber-950 ">{item}</a>
        </li>
        )
      )
    }
     
      {/* <li>
        <a href='' className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-amber-950 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Donation</a>
      </li>
      <li>
        <a href='' className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-amber-950 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About us</a>
      </li>
      <li>
        <a href='' className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-amber-950 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact us</a>
      </li> */}
    </ul>
  </div>     

  </div>
</nav>

    </div>
  )
}

export default Navbar
