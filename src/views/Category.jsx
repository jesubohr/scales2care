import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import { LinkButton } from "../components/Buttons";
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
        <MainContent className="p-5 pb-12">
            <h2 className="mb-7 text-center text-gray-800 dark:text-gray-300 text-4xl font-bold">
                { categoryTitle(category) }
            </h2>
            <section className="
                max-w-[43rem]
                flex flex-wrap
                justify-center items-center
                gap-5"
            >
                { scalesPerCategory[categoryTitle(category)].map((
                    {scaleName, scaleId}, index) => {
                    return (
                        <LinkButton
                            key={ index }
                            href={ `/app/scales/${scaleId + 1}` }
                            className={ "py-4 px-4 sm:px-2 md:py-6 md:px-20 text-base sm:text-2xl md:text-2xl " + `${alternateColor(index)}` }
                        >{ scaleName }</LinkButton>
                    );
                }) }
            </section>
        </MainContent>
    );
}
