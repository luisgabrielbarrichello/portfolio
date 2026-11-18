'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeSwitcher() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const isDark = mounted && resolvedTheme === 'dark';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            disabled={!mounted}
            aria-label={
                !mounted
                    ? 'Carregando preferência de tema'
                    : isDark
                      ? 'Ativar tema claro'
                      : 'Ativar tema escuro'
            }
            title={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-300 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-white dark:focus-visible:ring-offset-[#0B1220] disabled:cursor-wait">
            {isDark ? (
                /* Sun icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.07-7.07-1.42 1.42M6.35 17.65l-1.42 1.42m14.14 0-1.42-1.42M6.35 6.35 4.93 4.93"
                    />
                </svg>
            ) : (
                /* Moon icon */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.35 15.35A9 9 0 0 1 8.65 3.65 9 9 0 1 0 20.35 15.35Z"
                    />
                </svg>
            )}
        </button>
    );
}

export default ThemeSwitcher;
