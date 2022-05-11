import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from "./SearchBar";
import Icon from './Icon';
import ThemeButton from './ThemeButton';
// @ts-ignore
import logo from '../assets/logo.png';

// Elements
function Logo ({ name }) {
    return (
        <NavLink className="flex flex-row items-center cursor-pointer" to="/">
            <img
                className="
               max-w-[50px]
               dark:brightness-150
               dark:contrast-125
               dark:-hue-rotate-[5deg]
            "
                src={ logo }
                alt="Medical logo" />
            <span className="text-2xl dark:text-med-sky font-medium">{ name }</span>
        </NavLink>
    );
}

function Search ({ className }) {
    return (
        <div id="search" className={ `flex flex-row gap-x-3 ${className}` }>
            <input
                className="
            grow
            py-2
            px-3
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
            <button aria-label="search" className="pt-2 text-med-blue dark:text-med-sky">
                <Icon icon="search"></Icon>
            </button>
        </div>
    );
}

function Menu ({ openMenu, onClick, children }) {
    return (
        <>
            <button className="
               md:hidden
               text-2xl
               text-med-blue
               dark:text-med-sky
               font-bold"
                onClick={ onClick }
            >{ openMenu ? 'X' : '☰' }</button>
            <nav className={ `${openMenu ? "flex" : "hidden"}
               absolute top-0 right-0 mt-[75px] py-8 px-6 w-full
               sm:mr-8 sm:w-2/3 sm:rounded-lg
               bg-black/20 dark:bg-black/60 backdrop-blur-sm
               flex-col items-end gap-y-8

               md:relative md:m-0 md:p-0 md:w-fit
               md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none
               md:flex md:flex-row md:items-center md:gap-x-8
            `}>
                { children }
            </nav>
        </>
    );
}

// Block
export default function LandingHeader () {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <header className="
            flex
            flex-row
            justify-between
            items-center

            relative
            p-8
            w-full
            h-[75px]

            bg-white
            dark:bg-[#001B2E]
            border-b-2
            border-med-blue/20

            font-noto
            text-med-blue
        ">
            <Logo name="Scales2Care" />
            <Menu openMenu={ openMenu } onClick={ () => { setOpenMenu(open => !open); } }>
                <SearchBar className={ `${openMenu ? "w-full" : ""} md:w-fit` } />
                <ThemeButton className={ `${openMenu ? "w-full" : ""} md:w-fit` } />
            </Menu>
        </header>
    );
}
