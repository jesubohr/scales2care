import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Menu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import { ThemeButton } from "./Buttons";
import AsideMenu from "./AsideMenu";
import Icon from "./Icon";

export default function AppHeader () {
    const isScaleView = useParams().scaleId ? true : false;
    const [isAsideMenuOpen, setAsideMenuOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <header
                className={
                    "flex justify-center " +
                    "sticky top-0 left-0 " +
                    "mx-auto px-5 sm:px-16 md:px-20 " +
                    "w-full h-[75px] " +
                    "bg-white dark:bg-dark-blue " +
                    "border-b-2 border-med-blue/20 " +
                    "text-gray-700 dark:text-gray-100 z-10"
                }
            >
                <div className="flex justify-between items-center w-full max-w-7xl">
                    <div className="flex items-center gap-4 md:gap-8">
                        { isScaleView
                            ? <Link to="/app/scales">
                                <Icon icon="arrow-left" />
                            </Link>
                            : <Icon
                                icon="menu"
                                size="30"
                                viewBox="24"
                                onClick={ () => setAsideMenuOpen(true) }
                            />
                        }
                        <Link to="/">
                            <p className="w-fit text-2xl font-medium">Scales2Care</p>
                        </Link>
                    </div>
                    <Menu
                        openMenu={ openMenu }
                        onClick={ () => setOpenMenu((open) => !open) }
                    >
                        <SearchBar className={ `${openMenu ? "w-full md:w-auto" : ""}` } />
                        <ThemeButton className={ `${openMenu ? "w-full md:w-auto" : ""}` } />
                    </Menu>
                </div>
            </header>
            {
                <div className={
                    "absolute top-0 left-0 flex w-full h-screen" +
                    "transition ease-out duration-300 z-20 " +
                    `${isAsideMenuOpen ? "opacity-100" : "opacity-0 -translate-x-full"}`
                }>
                    <AsideMenu closeAsideMenu={ setAsideMenuOpen } />
                    <div
                        className="hidden sm:block grow h-screen bg-black/70"
                        onClick={ () => setAsideMenuOpen(false) }></div>
                </div>
            }
        </>
    );
}
