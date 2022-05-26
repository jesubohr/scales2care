import { useNavigate } from "react-router-dom";

export default function LinkButton ({ title, className = "", href = "#" }) {
    const navigate = useNavigate();
    return (
        <button
            type="button"
            className={ "w-full sm:w-auto min-w-fit rounded font-medium " + `${className}` }
            onClick={ () => {
                navigate(href);
            } }
        >
            { title }
        </button>
    );
}
