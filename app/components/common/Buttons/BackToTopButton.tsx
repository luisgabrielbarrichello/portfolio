'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400);
        };

        toggleVisibility();

        window.addEventListener('scroll', toggleVisibility, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
            className={clsx(
                'group flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                'border border-white/10 bg-brand text-white shadow-lg shadow-brand/20',
                'transition-all duration-300 ease-out',
                'hover:-translate-y-1 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B1220]',
                {
                    'visible translate-y-0 scale-100 opacity-100': isVisible,
                    'invisible translate-y-4 scale-90 opacity-0 pointer-events-none':
                        !isVisible,
                },
            )}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                />
            </svg>
        </button>
    );
};

export default BackToTopButton;
