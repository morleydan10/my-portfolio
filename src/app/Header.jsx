import React from "react";

export default function Header(){

    return(
        <div className="fixed top-0 w-full h-16 flex-row items-baseline content-evenly">
            <a href="#" className="text-white text-4xl hover:text-teal-500 font-sans font-bold align-center justify-center subpixel-antialiased p-3 mx-1">Dan Morley</a>
            <a href="#" className="text-white text-xl hover:text-blue-400 font-sans subpixel-antialiased p-2">About Me</a>
            <a href="#" className="text-white text-xl hover:text-blue-400 font-sans subpixel-antialiased p-2">Projects</a>
            <a href="#" className="text-white text-xl hover:text-blue-400 font-sans subpixel-antialiased p-2">Contact Me</a>
        </div>
    )
};