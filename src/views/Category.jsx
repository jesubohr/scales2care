import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import { ScaleButton } from "../components/Buttons";
import Title from "../components/Title";
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
            ? "border-med-sky"
            : "border-med-blue";
    };
    return (
        <MainContent>
            <Title>{ categoryTitle(category) }</Title>
            <section className="grid sm:flex flex-wrap justify-center gap-5">
                { scalesPerCategory[categoryTitle(category)].map((
                    { scaleName, scaleId }, index) => {
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
