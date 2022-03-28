import Category from "../components/Category";
import { LinkButton } from "../components/Buttons";

export default function Categories () {
    return (
        <main className="flex flex-col items-center p-5 pb-12">
            <h2 className="mb-7 text-gray-800 dark:text-gray-300 text-4xl font-bold md:text-5xl">Categorías</h2>
            <section className="flex flex-wrap justify-center items-center gap-5"
            >
                <Category title="Escalas de Riesgo de Infarto" color />
                <Category title="Escalas de Riesgo de Infarto" />
                <Category title="Escalas de Riesgo de Infarto" color />
                <Category title="Escalas de Riesgo de Infarto" />
            </section>
            <LinkButton href="/app/scales" extraClass="mt-10 max-w-sm bg-med-sky dark:bg-med-sky">Lista Completa</LinkButton>
        </main>
    );
}
