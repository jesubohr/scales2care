import Icon from "./Icon";
export default function Menu ({ openMenu, onClick, children }) {
    return (
        <>
            <button
                className="md:hidden text-2xl text-med-blue dark:text-med-sky font-bold"
                onClick={ onClick }
            >
                { openMenu
                    ? <Icon icon="close" viewBox="24" />
                    : <Icon icon="search" />
                }
            </button>
            <nav
                className={
                    `${openMenu ? "flex" : "hidden"} ` +
                    "flex-col items-end gap-y-8 " +
                    "absolute top-0 right-0 mt-[75px] py-8 px-6 w-full " +
                    "bg-black/40 dark:bg-black/70 backdrop-blur-sm " +
                    "sm:mr-8 sm:w-2/3 sm:rounded-lg " +
                    "md:relative md:m-0 md:p-0 md:w-fit " +
                    "md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none " +
                    "md:flex md:flex-row md:items-center md:gap-x-8"
                }>
                { children }
            </nav>
        </>
    );
}
