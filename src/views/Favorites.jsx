import { useState, useEffect } from "react";
import MainContent from "../components/MainContent";
import { LinkButton } from "../components/Buttons";
import { nameScales } from "../utils/scales";
import { Store } from "../utils/localStorage";
import Title from "../components/Title";

export default function Favorites () {
    const [favoritesScales, _] = useState(() => {
        return Store.get("user-favorite-scales") || [];
    });
    const alternateColor = (index) => {
        return (index % 2 === 0)
            ? "border-med-sky"
            : "border-med-blue";
    };
    useEffect(() => {
        if (Store.get("user-favorite-scales") === null) {
            Store.set('user-favorite-scales', []);
        }
    });
    return (
        <MainContent className="p-5 pb-12">
            <Title>Escalas Favoritas</Title>
            <section className="flex flex-wrap justify-center gap-5">
                {
                    favoritesScales.map((id, index) => {
                        return (
                            <LinkButton
                                title={`${nameScales[id]}`}
                                key={ index }
                                href={ `/app/scales/${id + 1}` }
                                className={
                                    "py-4 px-6 " +
                                    "text-xl sm:text-2xl dark:text-gray-50 " +
                                    "backdrop-blur-sm backdrop-brightness-50 backdrop-opacity-10 dark:backdrop-brightness-200 dark:backdrop-opacity-60 " +
                                    `border-4 ${alternateColor(index)}` }
                            />
                        );
                    })
                }
            </section>
        </MainContent>
    );
}
