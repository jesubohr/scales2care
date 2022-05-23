import { AsideButton } from "./Buttons";
import Icon from "./Icon";

export default function AsideMenu ({ closeAsideMenu }) {
    return (
        <aside
            className={
                "flex flex-col items-center " +
                "w-full sm:w-96 h-screen " +
                "bg-white dark:bg-dark-blue " +
                "dark:text-gray-200"
            }
        >
            <header className="flex items-center px-8 py-5 w-full border-b-2 border-med-blue/20">
                <Icon
                    icon="close"
                    size="30"
                    viewBox="24"
                    onClick={ () => closeAsideMenu(false) } />
                <p className="grow text-xl text-center font-medium">
                    Menu de Vistas
                </p>
            </header>
            <section className="overflow-y-auto space-y-8 py-4 px-3 w-full">
                <AsideButton title="Inicio" href="/"
                    onClick={ () => closeAsideMenu(false) }
                >
                    <Icon icon="home" viewBox="24" />
                </AsideButton>
                <AsideButton title="Categorías" href="/app/categories"
                    onClick={ () => closeAsideMenu(false) }
                >
                    <Icon icon="tag" viewBox="24" />
                </AsideButton>
                <AsideButton title="Escalas" href="/app/scales"
                    onClick={ () => closeAsideMenu(false) }
                >
                    <Icon icon="list" viewBox="24" />
                </AsideButton>
                <AsideButton title="Favoritas" href="/app/favorites"
                    onClick={ () => closeAsideMenu(false) }
                >
                    <Icon icon="star" viewBox="24" />
                </AsideButton>
            </section>
        </aside>
    );
}
