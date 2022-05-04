import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function AsideMenu ({ closeAsideMenu }) {
    const [closeAnim, setCloseAnim] = useState(false);
    return (
        <div
            className={`absolute top-0 left-0 w-full h-screen bg-black/50
                transition-opacity delay-300 duration-300
                ${ closeAnim ? "opacity-0" : "opacity-100" }
            `}
            onClick={ () => {
                setCloseAnim(true);
                setTimeout(() => closeAsideMenu(false), 300);
            } }>
            <aside className={`absolute top-0 left-0
                flex flex-col items-center
                w-80 h-screen
                bg-white dark:bg-[#182d51]
                dark:text-gray-100
                transition duration-300
            ${ closeAnim ? "opacity-0 -translate-x-full" : "opacity-100" }
            `}>
                <header className="flex items-center py-3 w-full border-b-2 border-gray-100">
                    <button
                        type="button"
                        className="pl-6 w-1/4 text-4xl text-center leading-4"
                        onClick={ () => {
                            setCloseAnim(true);
                            setTimeout(() => closeAsideMenu(false), 300);
                        } }>
                        <Icon icon="arrow-left" />
                    </button>
                    <p className="w-2/4 text-xl text-center font-medium">
                        Menu de Vistas
                    </p>
                </header>
                <section className="mt-2 px-1 w-full">
                    <ul className="flex flex-col items-center gap-y-4">
                        <li className="flex justify-center items-center w-full py-2 bg-med-blue rounded-full text-white cursor-pointer">
                            <Link to="/" className="w-full text-lg text-center font-medium">
                                    Inicio
                            </Link>
                        </li>
                        <li className="flex justify-center items-center w-full py-2 bg-med-sky rounded-full text-white cursor-pointer">
                            <Link to="/app/categories" className="w-full text-lg text-center font-medium">
                                    Categorías
                            </Link>
                        </li>
                        <li className="flex justify-center items-center w-full py-2 bg-med-blue rounded-full text-white cursor-pointer">
                            <Link to="/app/scales" className="w-full text-lg text-center font-medium">
                                    Escalas
                            </Link>
                        </li>
                        <li className="flex justify-center items-center w-full py-2 bg-med-sky rounded-full text-white cursor-pointer">
                            <Link to="/app/favorites" className="w-full text-lg text-center font-medium">
                                Favoritas
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
    );
}
