import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import { ThemeButton } from "./Buttons";
// @ts-ignore
import logo from "../assets/logo.png";

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
                alt="Medical logo"
            />
            <span className="text-2xl dark:text-med-sky font-medium">{ name }</span>
        </NavLink>
    );
}

// Block
export default function LandingHeader () {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <header
            className={
                "flex justify-center " +
                "relative px-5 sm:px-16 md:px-20 " +
                "w-full h-[75px] " +
                "bg-white dark:bg-dark-blue " +
                "border-b-2 border-med-blue/20 " +
                "text-med-blue z-20"
            }
        >
            <div className="flex justify-between items-center w-full max-w-7xl">
                <Logo name="Scales2Care" />
                <Menu
                    openMenu={ openMenu }
                    onClick={ () => setOpenMenu((open) => !open) }
                >
                    <SearchBar className={ `${openMenu ? "w-full md:w-auto" : ""}` } />
                    <ThemeButton />
                </Menu>
            </div>
        </header>
    );
}
