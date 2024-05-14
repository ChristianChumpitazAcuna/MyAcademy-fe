// DarkmodeSwitch.js
import { useState, useEffect } from 'react';
import { IMoon, ISun } from '../../ui/svgs';

export default function DarkmodeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    return (
        <button onClick={handleClick}
            className='flex flex-row gap-x-2 text-slate-500 dark:text-white group'>
            {isDarkMode ? <><ISun />Light Mode</> : <><IMoon />Dark Mode</>}
        </button>
    );
}
