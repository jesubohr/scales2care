export default function BannerButton ({ className = "", click = () => { }, children }) {
    return (
        <button
            className={
                "mt-[4.75rem] py-4 px-16 rounded-full sm:py-5 sm:px-20 " +
                "bg-med-green dark:bg-med-green text-2xl text-white font-medium " +
                "shadow-lg shadow-med-green/30 " +
                "hover:shadow-xl hover:shadow-med-green/40 dark:shadow-transparent active:scale-110 " +
                "[transition-property: transform, box-shadow] ease-in-out duration-200 " +
                `${className}`
            }
            onClick={ click }
        >
            { children }
        </button>
    );
}
