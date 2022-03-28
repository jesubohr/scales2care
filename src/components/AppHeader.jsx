import Icon from "./Icon";
import ThemeButton from "./ThemeButton";

export default function AppHeader () {
    return (
        <header className="
            sticky
            top-0
            left-0

            flex
            justify-between
            items-center

            p-8
            w-full
            h-[75px]

            bg-white
            dark:bg-[#182d51]
            border-b-2
            border-med-blue/20

            text-gray-700
            dark:text-gray-300
            font-noto
        "
        >
            <div className="flex items-center gap-8">
                <Icon icon="menu" />
                <p className="w-fit text-2xl font-medium">Scales2Care</p>
            </div>
            <div className="flex items-center gap-8">
                <Icon icon="search" />
                <ThemeButton />
            </div>
        </header>
    );
}
