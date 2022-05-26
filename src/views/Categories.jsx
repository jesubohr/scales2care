import MainContent from "../components/MainContent";
import { CategoryButton, LinkButton } from "../components/Buttons";
import Title from "../components/Title";

export default function Categories () {
    return (
        <MainContent>
            <Title>Categorías</Title>
            <section className="max-w-3xl flex flex-wrap justify-center items-center gap-5">
                <CategoryButton title="Componente Biológico o Clínico" color />
                <CategoryButton title="Componente Psicológico o Mental" />
                <CategoryButton title="Componente Social" color />
                <CategoryButton title="Componente Triple" />
            </section>
            <LinkButton href="/app/scales" title="Lista Completa" className="mt-10 py-3 px-7 bg-med-sky dark:bg-med-sky text-gray-50 dark:text-gray-900 text-2xl" />
        </MainContent>
    );
}
