import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function CategoryButton ({ title, color = false }) {
    const navigate = useNavigate();
    const urlTitle = title.toLowerCase().replace(/ /g, "-");

    return (
        <article
            className={
                "p-5 " +
                "max-w-xs w-10/12 h-44 " +
                "rounded-3xl cursor-pointer " +
                "sm:w-[46%] " +
                "text-gray-50 dark:text-gray-900 " +
                `${color ? "bg-med-sky" : "bg-med-blue"}`
            }
            onClick={() => {navigate('/app/categories/' + urlTitle)}}
        >
            <Icon icon="beat" viewBox="31" size="36" />
            <p className="mt-4 max-w-[15rem] text-2xl font-medium">{title}</p>
        </article>
    )
}
