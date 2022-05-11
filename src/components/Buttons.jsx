import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../utils/localStorage";

function BannerButton ({ className = "", click = () => { }, children }) {
    return (
        <button
            className={
                "mt-[4.75rem] py-4 px-20 rounded-full sm:py-3 sm:px-16 " +
                "bg-med-green dark:bg-med-green text-2xl text-white font-medium " +
                "shadow-lg shadow-med-green/30 " +
                "hover:shadow-xl hover:shadow-med-green/40 dark:shadow-transparent active:scale-110 " +
                "[transition-property: transform, box-shadow] ease-in-out duration-200 " +
                `${className}`
            }
            onClick={ click }
        >{ children }</button>
    );
}

function LinkButton ({ children, className = "", href = "#" }) {
    const navigate = useNavigate();
    return (
        <button
            className={
                "py-4 px-20 rounded-full " +
                "text-2xl text-gray-50 dark:text-gray-900 font-medium " +
                `${className}`
            }
            onClick={ () => { navigate(href); } }
        >{ children }</button>
    );
}

function ScaleButton ({ id, name, className = "" }) {
    const navigate = useNavigate();
    return (
        <div className={
            "flex justify-between items-center gap-4 " +
            "py-2 px-4 sm:px-2 md:px-16 " +
            "text-base sm:text-2xl md:text-2xl " +
            "rounded-full text-gray-50 dark:text-gray-900 font-medium " +
            `${className}` }
        >
            <button
                title={ `Ir a escala: ${name}` }
                className="py-2 h-full grow"
                onClick={ () => { navigate(`/app/scales/${id + 1}`); } }
            >
                { name }
            </button>
            <FavoriteButton id={ id } />
        </div>
    );
}

function FavoriteButton ({ id = 0 }) {
    const [favoritesScales, setFavoritesScales] = useState(() => {
        return Store.get("user-favorite-scales") || [];
    });
    const isActive = favoritesScales.includes(id + 1);

    function toggleFavoriteScale (index) {
        if (favoritesScales.includes(index)) {
            const newFavorites = favoritesScales.filter(scaleIndex => scaleIndex !== index);
            setFavoritesScales(newFavorites);
            Store.set("user-favorite-scales", newFavorites);
        } else {
            const newFavorites = [...favoritesScales, index];
            setFavoritesScales(newFavorites);
            Store.set("user-favorite-scales", newFavorites);
        }
    }

    return (
        <button onClick={ () => { toggleFavoriteScale(id + 1); } }>
            <svg viewBox="0 0 15 15" fill={ (isActive) ? "#ffc100" : "none" } stroke={ (isActive) ? "#ffc100" : "currentColor" } xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M7.5 12.04l-4.326 2.275L4 9.497.5 6.086l4.837-.703L7.5 1l2.163 4.383 4.837.703L11 9.497l.826 4.818L7.5 12.041z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </button>
    );
}

export { BannerButton, LinkButton, ScaleButton, FavoriteButton };
