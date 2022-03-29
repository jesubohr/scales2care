export default function MainContent ({ className = "", landing = false, children }) {
    return (
        <main className={ ((landing) ? "min-h-screen " : "min-h-[calc(100vh-75px)] ") + "flex flex-col items-center " + `${className}` }>
            { children }
        </main>
    );
}
