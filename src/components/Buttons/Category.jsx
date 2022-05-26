import { useNavigate } from "react-router-dom";
import Icon from "../Icon";

export default function CategoryButton ({ title, color = false }) {
    const navigate = useNavigate();
    const urlTitle = title.toLowerCase().replace(/ /g, "-");

    return (
        <article
            className={
                "py-5 px-5 " +
                "max-w-md max-h-28 " +
                "rounded cursor-pointer " +
                "sm:w-[46%] " +
                "dark:text-gray-50 " +
                "backdrop-blur-sm backdrop-brightness-50 backdrop-opacity-10 dark:backdrop-brightness-200 dark:backdrop-opacity-60 " +
                `border-4 ${color ? "border-med-sky" : "border-med-blue"}`
            }
            onClick={ () => { navigate('/app/categories/' + urlTitle); } }
        >
            <Icon icon="beat" viewBox="31" size="36" className={`absolute -top-4 -left-4 p-0.5 ${color ? "bg-med-sky" : "bg-med-blue"} rounded-sm text-white`} />
            <h3 className="max-w-fit text-2xl font-medium">{ title }</h3>
        </article>
    );
}
