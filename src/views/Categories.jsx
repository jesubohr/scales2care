import CategoryButton from "../components/CategoryButton";
import { LinkButton } from "../components/Buttons";
import MainContent from "../components/MainContent";

export default function Categories () {
    return (
        <MainContent className="p-5 pb-12">
            <h2 className="mb-7
                text-gray-800 dark:text-gray-300
                text-4xl font-bold md:text-5xl"
            >Categorías</h2>
            <section className="max-w-[43rem] flex flex-wrap justify-center items-center gap-5">
                <CategoryButton title="Componente Biológico o Clínico" color />
                <CategoryButton title="Componente Psicológico o Mental" />
                <CategoryButton title="Componente Social" color />
                <CategoryButton title="Componente Triple" />
            </section>
            <LinkButton href="/app/scales" title="Lista Completa" className="mt-10 py-[0.8rem] px-24 max-w-sm bg-med-sky dark:bg-med-sky text-2xl" />
        </MainContent>
    );
}
