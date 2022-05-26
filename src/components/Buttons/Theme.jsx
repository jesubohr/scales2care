import { useState } from 'react';
import { Switch } from '@headlessui/react';
import toogleLocalTheme from '../../utils/darkMode';

export default function ThemeButton () {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    const initTheme = (isDarkMode) ? '🌚' : '🌞';
    const [theme, setTheme] = useState(initTheme);
    const [enabled, setEnabled] = useState(isDarkMode);

    const toggleTheme = (toggle) => {
        setEnabled(toggle);
        setTheme(toogleLocalTheme());
    };
    return (
        <>
            <Switch
                checked={ enabled }
                onChange={ toggleTheme }
                className={
                    `relative inline-flex w-14 h-7 items-center rounded-full ${enabled ? 'bg-med-sky' : 'bg-gray-200'} focus:outline-none focus-visible:ring-2 focus-visible:ring-med-sky focus-visible:ring-opacity-50`
                }
            >
                <span className="absolute -left-32 md:sr-only w-max text-white font-semibold">Toggle Theme</span>
                <span aria-label="theme" className={
                    `flex justify-center items-center w-3.5 h-3.5 rounded-full transform ${enabled ? 'translate-x-9' : 'translate-x-2'} transition-transform ease-in-out duration-200`
                }>{theme}</span>
            </Switch>
        </>
    );
}
