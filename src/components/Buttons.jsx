import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../utils/localStorage";
import Icon from "./Icon";

function BannerButton ({ className = "", click = () => { }, children }) {
    return (
        <button
            className={
                "mt-[4.75rem] py-4 px-16 rounded-full sm:py-5 sm:px-20 " +
                "bg-med-green dark:bg-med-green text-2xl text-white font-medium " +
                "shadow-lg shadow-med-green/30 " +
                "hover:shadow-xl hover:shadow-med-green/40 dark:shadow-transparent active:scale-110 " +
                "[transition-property: transform, box-shadow] ease-in-out duration-200 " +
                `${className}`
            }
            onClick={ click }
        >
            { children }
        </button>
    );
}

function AsideButton ({ children, title, onClick, href = "#" }) {
    const navigate = useNavigate();
    return (
        <button
            type="button"
            title={ title }
            className={
                "flex items-center gap-3 " +
                "py-3 px-5 w-full " +
                "border-b-4 border-med-blue/50 " +
                "hover:bg-med-blue/20 dark:hover:bg-med-blue/30 " +
                "text-gray-900 dark:text-gray-100"
            }
            onClick={ () => {
                onClick();
                navigate(href);
            } }
        >
            { children }
            <span>{ title }</span>
        </button>
    );
}

function LinkButton ({ title, className = "", href = "#" }) {
    const navigate = useNavigate();
    return (
        <button
            type="button"
            className={ "text-gray-50 dark:text-gray-900 font-medium " + `${className}` }
            onClick={ () => {
                navigate(href);
            } }
        >
            { title }
        </button>
    );
}

function ScaleButton ({ id, name, className = "" }) {
    const navigate = useNavigate();
    return (
        <div
            className={
                "flex items-center gap-5 " +
                "px-8 " +
                "w-80 h-40 " +
                "text-base sm:text-2xl md:text-2xl " +
                "text-gray-50 dark:text-gray-900 font-medium " +
                `${className}`
            }
        >
            <button
                title={ `Ir a escala: ${name}` }
                className="h-full grow text-left"
                onClick={ () => {
                    navigate(`/app/scales/${id + 1}`);
                } }
            >
                { name }
            </button>
            <FavoriteButton id={ id } />
        </div>
    );
}

function FavoriteButton ({ id = 0 }) {
    const [isActive, setIsActive] = useState(() => {
        const oldScales = Store.get("user-favorite-scales") || [];
        return oldScales.includes(id);
    });

    function toggleFavoriteScale (index) {
        let newScales = Store.get("user-favorite-scales");
        if (isActive) newScales = newScales.filter((scale) => scale !== index);
        else newScales.push(index);

        Store.set("user-favorite-scales", newScales);
        setIsActive(!isActive);
    }

    useEffect(() => {
        if (Store.get("user-favorite-scales") === null) {
            Store.set("user-favorite-scales", []);
        }
    });

    return (
        <button
            onClick={ () => toggleFavoriteScale(id) }
        >
            <Icon
                icon="star"
                viewBox="24"
                size="40"
                fill={ isActive ? "#ffc100" : "none" }
                stroke={ isActive ? "#ffc100" : "currentColor" }
            />
        </button>
    );
}

export { BannerButton, LinkButton, ScaleButton, FavoriteButton, AsideButton };
