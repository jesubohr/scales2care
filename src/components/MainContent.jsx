export default function MainContent ({ className = "", children }) {
    return (
        <main className={ "min-h-[calc(100vh-75px)] flex flex-col items-center " + `${className}` }>
            { children }
        </main>
    );
}
