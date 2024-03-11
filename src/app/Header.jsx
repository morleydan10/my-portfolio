import React from "react";

export default function Header(){

    return(
        <div className="fixed top-0 w-full flex-row items-baseline content-evenly bg-green-950">
            <a href="#" className="text-white text-2xl hover:text-blue-400 font-mono font-bold align-center justify-center subpixel-antialiased p-3 mx-1">This is the Header</a>
            <a href="#" className="text-white text-large hover:text-blue-400 subpixel-antialiased p-2">About Me</a>
        </div>
    )
};