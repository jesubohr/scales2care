export default function MainContent ({ className = "", landing = false, children }) {
    return (
        <main className={
            "flex flex-col items-center " +
            "mx-auto px-5 md:px-12 xl:px-0 " +
            "min-h-[calc(100vh-75px)] max-w-5xl " +
            ((landing) ? "relative w-full " : "pt-8 pb-12 ") +
            `${className}`
        }>
            { children }
        </main>
    );
}
