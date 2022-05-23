import { useNavigate } from "react-router-dom";

export default function AsideButton ({ children, title, onClick, href = "#" }) {
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
