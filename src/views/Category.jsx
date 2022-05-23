import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import { ScaleButton } from "../components/Buttons";
import { scalesPerCategory } from "../utils/scales";

export default function Category () {
    const { category } = useParams();
    const categoryTitle = (category) => {
        return category
            .replace(/-/g, " ")
            .split(" ")
            .map(word => {
                const first = (word.length === 1)
                    ? word
                    : word.charAt(0).toUpperCase();
                return first + word.slice(1);
            })
            .join(" ");
    };
    const alternateColor = (index) => {
        return (index % 2 === 0)
            ? "bg-med-sky dark:bg-med-sky"
            : "bg-med-blue dark:bg-med-blue";
    };
    return (
        <MainContent>
            <h2 className="mb-7 text-center text-gray-800 dark:text-gray-300 text-4xl font-bold">
                { categoryTitle(category) }
            </h2>
            <section className="grid lg:grid-cols-2 gap-5 max-w-[43rem]">
                { scalesPerCategory[categoryTitle(category)].map((
                    {scaleName, scaleId}, index) => {
                    return (
                        <ScaleButton
                            key={ index }
                            id={ scaleId }
                            name={ scaleName }
                            className={ alternateColor(index) }
                        />
                    );
                }) }
            </section>
        </MainContent>
    );
}
