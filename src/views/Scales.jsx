import MainContent from "../components/MainContent";
import { ScaleButton } from "../components/Buttons";
import { nameScales } from "../utils/scales";

export default function Scales () {
    function alternateColor (index) {
        return (index % 2 === 0)
            ? "bg-med-sky"
            : "bg-med-blue";
    }

    return (
        <MainContent>
            <h2 className="mb-7 text-gray-800 dark:text-gray-300 text-4xl font-bold md:text-5xl">
                Lista de Escalas
            </h2>
            <section className="grid lg:grid-cols-2 justify-center gap-5">
                {
                    nameScales.map((name, index) => {
                        return (
                            <ScaleButton
                                key={ index }
                                id={ index }
                                name={ name }
                                className={ alternateColor(index) }
                            />
                        );
                    })
                }
            </section>
        </MainContent>
    );
}
