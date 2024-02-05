import React from "react";
import "tailwindcss/tailwind.css";
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" bg-slate-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-200">pal</span>
          <span className="text-slate-600">Estate</span>
        </h1>
        </Link>
        <form className="flex items-center bg-slate-100 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none  bg-transparent w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-5 ">
            
        <Link to="/"><li className="hover:underline hidden sm:inline text-slate-700">Home</li></Link>
        <Link to="/About"><li className="hover:underline hidden sm:inline text-slate-700">About</li></Link>
        <Link to="/sign-in"><li className="hover:underline text-slate-700">SignIn</li></Link>
        </ul>
      </div>
    </header>
  );
}