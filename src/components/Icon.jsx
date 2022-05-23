const icons = {
    close: "M6 18L18 6M6 6l12 12",
    "arrow-left": "M1.5 7.5l4-4m-4 4l4 4m-4-4H14",
    menu: "M4 6h16M4 12h16M4 18h16",
    search: "M15 15l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z",
    beat: "M27.7003 15.1542H22.7003L18.9503 26.4042L11.4503 3.90424L7.70032 15.1542H2.70032",
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    tag: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
    list: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
};

export default function Icon ({ icon, fill = "none", stroke = "currentColor", viewBox = "15", size = "24", onClick = () => { } }) {
    return (
        <svg
            fill={ fill }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox={ `0 0 ${viewBox} ${viewBox}` }
            width={ `${size}` }
            height={ `${size}` }
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={ onClick }
        >
            <path d={ icons[icon] } stroke={ stroke } />
        </svg>
    );
}
