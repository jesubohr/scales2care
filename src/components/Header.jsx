import { useState } from 'react';
// @ts-ignore
import logo from '../logo.png';

// Utils
function toogleDarkMode () {
   document.documentElement.classList.toggle('dark');
   if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      return '🌚';
   }
   else {
      localStorage.setItem('theme', 'dark');
      return '🌞';
   }
}

// Elements
function Logo ({ name }) {
   return (
      <div id="logo" className="flex flex-row items-center w-2/3 cursor-pointer">
         <img
            className="
               max-w-[50px]
               dark:brightness-150
               dark:contrast-125
               dark:-hue-rotate-[5deg]
            "
            src={ logo }
            alt="Medical logo" />
         <span className="text-xl dark:text-med-sky font-bold">{ name }</span>
      </div>
   );
}

function Search () {
   return (
      <div id="search" className="">
         <input
            className="
            px-1.5
            dark:bg-[#182d51]
            border-b-2
            focus:border-transparent
            border-med-blue
            dark:border-med-sky
            placeholder:text-med-blue/60
            dark:placeholder:text-med-sky/80
            caret-med-blue
            dark:caret-med-sky
            outline-med-blue
            dark:outline-med-sky
            dark:text-med-sky
            font-medium
            "
            title="Search"
            type="text"
            placeholder="Buscar una escala"
         />
         <button>🔎</button>
      </div>
   );
}

function ButtonTheme () {
   const initTheme = (localStorage.getItem('theme') === 'dark') ? '🌞' : '🌚';
   const [theme, setTheme] = useState(initTheme);
   return (
      <button
         className="py-2 px-4 bg-med-green rounded-full text-white"
         onClick={ () => {
            setTheme(toogleDarkMode());
         } }>{ theme }</button>
   );
}

// Block
function Header () {
   return (
      <header
         className="
         flex
         flex-row
         justify-around
         items-center
         w-full
         h-[75px]
         bg-white
         dark:bg-[#182d51]
         border-b-2
         border-med-blue/20
         font-noto
         text-med-blue
      ">
         <Logo name="Scales2Care" />
         <Search />
         <ButtonTheme />
      </header>
   );
}

export default Header;