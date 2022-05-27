import MainContent from "../components/MainContent";
import { CategoryButton, LinkButton } from "../components/Buttons";
import Title from "../components/Title";

export default function Categories () {
    return (
        <MainContent>
            <Title>Categorías</Title>
            <section className="max-w-2xl grid md:grid-cols-2 justify-center items-center gap-5">
                <CategoryButton title="Biológica o Clínica" color />
                <CategoryButton title="Psicológica o Mental" />
                <CategoryButton title="Social" color />
                <CategoryButton title="Triple" />
            </section>
            <LinkButton href="/app/scales" title="Lista Completa" className={
                "mt-10 py-3 px-7 " +
                "border-4 border-med-sky hover:bg-med-sky " +
                "hover:text-white text-2xl dark:text-white " +
                "transition-colors " +
                "backdrop-blur-sm backdrop-brightness-50 backdrop-opacity-10 dark:backdrop-brightness-200 dark:backdrop-opacity-60"
            } />
        </MainContent>
    );
}
