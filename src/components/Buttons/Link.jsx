import { useNavigate } from "react-router-dom";

export default function LinkButton ({ title, className = "", href = "#" }) {
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
