export default function Title ({ children, className = "" }) {
    return (
        <h2 className={ `mb-7 text-gray-800 dark:text-gray-100 text-4xl font-bold ${className}` }>
            { children }
        </h2>
    );
}
