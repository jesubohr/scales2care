import { useState } from 'react';
import toogleDarkMode from '../utils/darkMode';

export default function ThemeButton ({ extraClass = "" }) {
    const initTheme = (localStorage.getItem('theme') === 'dark') ? '🌞' : '🌚';
    const [theme, setTheme] = useState(initTheme);
    return (
        <button
            aria-label="theme"
            className={ `py-2 px-4 bg-med-green rounded-full text-white ${extraClass}` }
            onClick={ () => setTheme(toogleDarkMode()) }
        >{ theme }</button>
    );
}
