import { useNavigate } from "react-router-dom";

function BannerButton ({ extraClass = "", click = () => { }, children }) {
    return (
        <button
            className={
                "mt-[4.75rem] py-4 px-20 rounded-full sm:py-3 sm:px-16 " +
                "bg-med-green dark:bg-med-green text-2xl text-white font-medium" +
                "shadow-lg shadow-med-green/30" +
                "hover:shadow-xl hover:shadow-med-green/40 dark:shadow-transparent active:scale-110" +
                "[transition-property: transform, box-shadow] ease-in-out duration-200" +
                `${extraClass}`
            }
            onClick={ click }
        >{ children }</button>
    );
}

function LinkButton ({ children, className = "", href = "#" }) {
    const { origin } = window.location;
    const navigate = useNavigate();
    return (
        <button
            className={
                "py-4 px-20 rounded-full " +
                "text-2xl text-white dark:text-gray-900 font-medium " +
                `${className}`
            }
            title={`Ir a ${origin}${href}`}
            onClick={ () => { navigate(href) } }
        >{ children }</button>
    );
}

function SmallButton ({ extraClass = "", click = () => { }, children }) {
    return (
        <button
            aria-label="theme"
            className={ `py-2 px-4 bg-med-green rounded-full text-white ${extraClass}` }
            onClick={ click }
        >{ children }</button>
    );
}

export { BannerButton, LinkButton, SmallButton };
