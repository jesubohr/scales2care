import { useNavigate } from "react-router-dom";

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
            onClick={ () => { navigate(href) } }
        >{ children }</button>
    );
}

export { BannerButton, LinkButton };
