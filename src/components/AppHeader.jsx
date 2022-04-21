import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Icon from "./Icon";
import ThemeButton from "./ThemeButton";
import AsideMenu from "./AsideMenu";

export default function AppHeader () {
    const isScaleView = (useParams().scaleId) ? true : false;
    const [isAsideMenuOpen, setAsideMenuOpen] = useState(true);
    return (
        <header className="
            sticky
            top-0
            left-0

            flex
            justify-between
            items-center

            px-4 sm:px-6 md:px-8
            w-full
            h-[75px]

            bg-white
            dark:bg-[#182d51]
            border-b-2
            border-med-blue/20

            text-gray-700
            dark:text-gray-300
            font-noto
        "
        >
            <div className="flex items-center gap-4 md:gap-8">
                { isScaleView
                    ? <Link to="/app/scales">
                        <Icon icon="arrow-left" />
                    </Link>
                    : <div onClick={ () => setAsideMenuOpen(true) }>
                        <Icon icon="menu" />
                    </div>
                }
                <Link to="/">
                    <p className="w-fit text-2xl font-medium">Scales2Care</p>
                </Link>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
                <Icon icon="search" />
                <ThemeButton className="hidden sm:block" />
            </div>
            {
                isAsideMenuOpen && <AsideMenu closeAsideMenu={ setAsideMenuOpen } />
            }
        </header>
    );
}
