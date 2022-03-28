const icons = {
    'search': 'M15 15l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z',
    'menu': 'M0 5.5h15m-15-4h15m-15 8h15m-15 4h15',
    'beat': 'M27.7003 15.1542H22.7003L18.9503 26.4042L11.4503 3.90424L7.70032 15.1542H2.70032'    
}

export default function Icon ({ icon, viewBox = '15', size = '24' }) {
    return (
        <svg
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            className="cursor-pointer "
            width={`${size}`}
            height={`${size}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={icons[icon]} stroke="currentColor" />
        </svg>
    )
}
