import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function Category ({ title, color = false }) {
    const navigate = useNavigate();

    return (
        <article
            className={
                "p-5 " +
                "max-w-xs w-10/12 h-44 " +
                "rounded-3xl cursor-pointer " +
                "sm:w-[46%] " +
                "text-white dark:text-gray-900 " +
                `${color ? "bg-med-sky" : "bg-med-blue"}`
            }
            onClick={() => {navigate('#')}}
        >
            <Icon icon="beat" viewBox="31" size="36" />
            <p className="mt-4 max-w-[12rem] text-2xl font-medium">{title}</p>
        </article>
    )
}
