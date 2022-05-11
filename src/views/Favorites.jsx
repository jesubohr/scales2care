import { useState, useEffect } from "react";
import MainContent from "../components/MainContent";
import { LinkButton } from "../components/Buttons";
import { nameScales } from "../utils/scales";
import { Store } from "../utils/localStorage";

export default function Favorites () {
    const [favoritesScales, _] = useState(() => {
        return Store.get("user-favorite-scales") || [];
    });
    const alternateColor = (index) => {
        return (index % 2 === 0)
            ? "bg-med-sky dark:bg-med-sky"
            : "bg-med-blue dark:bg-med-blue";
    };
    useEffect(() => {
        if (Store.get("user-favorite-scales") === null) {
            Store.set('user-favorite-scales', []);
        }
    });
    return (
        <MainContent>
            <h2 className="mb-7 text-gray-800 dark:text-gray-300 text-4xl font-bold md:text-5xl">Escalas Favoritas</h2>
            <section className="flex flex-col justify-center gap-5">
                {
                    favoritesScales.map((id, index) => {
                        return (
                            <LinkButton
                                key={ index }
                                href={ `/app/scales/${id}` }
                                className={ "py-4 px-4 sm:px-2 md:py-6 md:px-20 text-base sm:text-2xl md:text-2xl " + `${alternateColor(index)}` }
                            >{ nameScales[id - 1] }</LinkButton>
                        );
                    })
                }
            </section>
        </MainContent>
    );
}
