import { LinkButton } from "../components/Buttons";
import MainContent from "../components/MainContent";
import { nameScales } from "../utils/scales";

export default function Scales () {
    const alternateColor = (index) => {
        return (index % 2 === 0)
        ? "bg-med-sky dark:bg-med-sky"
        : "bg-med-blue dark:bg-med-blue";
    }
    return (
        <MainContent className="p-5">
            <h2 className="mb-7 text-gray-800 dark:text-gray-300 text-4xl font-bold md:text-5xl">Lista de Escalas</h2>
            <section className="flex flex-col justify-center gap-5">
                {
                    nameScales.map((name, index) => {
                        return (
                            <LinkButton
                                key={ index }
                                href={ `/app/scales/${index + 1}` }
                                className={"py-4 px-4 sm:px-2 md:py-6 md:px-20 text-base sm:text-2xl md:text-2xl " + `${alternateColor(index)}`}
                            >{ name }</LinkButton>
                        );
                    })
                }
            </section>
        </MainContent>
    );
}
