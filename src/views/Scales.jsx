import { LinkButton } from "../components/Buttons";
import { nameScales } from "../utils/scales";

export default function Scales () {
    const alternateColor = (index) => {
        return (index % 2 === 0)
        ? "bg-med-sky dark:bg-med-sky"
        : "bg-med-blue dark:bg-med-blue";
    }
    return (
        <main className="flex flex-col items-center p-5">
            <h2 className="mb-7 text-gray-800 dark:text-gray-300 text-4xl font-bold md:text-5xl">Lista de Escalas</h2>
            <section className="flex flex-col justify-center gap-5">
                {
                    nameScales.map((name, index) => {
                        return (
                            <LinkButton
                                key={ index }
                                href={ `/app/scales/${index}` }
                                extraClass={"py-6 text-3xl " + `${alternateColor(index)}`}
                            >{ name }</LinkButton>
                        );
                    })
                }
            </section>
        </main>
    );
}
