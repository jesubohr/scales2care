import { useState } from "react";
import MainContent from "../components/MainContent";
import { ScaleButton } from "../components/Buttons";
import { nameScales } from "../utils/scales";
import { Store } from "../utils/localStorage";

export default function Scales () {
    const [favoritesScales, setFavoritesScales] = useState(() => {
        return Store.get("user-favorite-scales") || [];
    });

    function alternateColor (index) {
        return (index % 2 === 0)
            ? "bg-med-sky dark:bg-med-sky"
            : "bg-med-blue dark:bg-med-blue";
    }
    function toggleFavoriteScale (index) {
        if (favoritesScales.includes(index)) {
            const newFavorites = favoritesScales.filter(scaleIndex => scaleIndex !== index);
            setFavoritesScales(newFavorites);
            Store.set("user-favorite-scales", newFavorites);
        } else {
            const newFavorites = [...favoritesScales, index];
            setFavoritesScales(newFavorites);
            Store.set("user-favorite-scales", newFavorites);
        }
    }

    return (
        <MainContent className="p-5">
            <h2 className="mb-7 text-gray-800 dark:text-gray-300 text-4xl font-bold md:text-5xl">Lista de Escalas</h2>
            <section className="flex flex-col justify-center gap-5">
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
