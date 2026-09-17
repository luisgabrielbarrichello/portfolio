'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { getWhatsappLink } from '@/app/lib/whatsapp';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: '#my-services', label: 'Serviços' },
        { to: '#projects', label: 'Projetos' },
        { to: '#faq', label: 'FAQ' },
        { to: '#orcamento', label: 'Contato' },
    ];

    const navLinkClasses =
        'relative cursor-pointer font-medium text-dark dark:text-white hover:text-brand dark:hover:text-brand transition-colors duration-300';

    return (
        <header
            className={clsx(
                'sticky top-0 z-50 px-6 md:px-10 lg:px-20 transition-all duration-300',
                isScrolled
                    ? 'bg-white/90 dark:bg-dark-10/90 backdrop-blur-md shadow-sm shadow-gray-200/50 dark:shadow-black/30'
                    : 'bg-transparent',
            )}>
            <nav className="w-full h-16 flex items-center justify-between gap-x-4">
                <div className="shrink-0">
                    <a
                        href="https://www.linkedin.com/in/luisgabrielbarrichello/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-x-2 text-xl md:text-2xl font-extrabold">
                        <span className="font-poppins bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-2 py-0.5 rounded-md">
                            LB
                        </span>
                        <span className="font-poppins text-gray-500 dark:text-gray-400">
                            .dev
                        </span>

                        <div className="h-8 w-[1px] bg-gray-300 dark:bg-gray-700 hidden sm:block" />
                        <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-300 max-w-64 leading-tight hidden sm:block">
                            Sites e experiências digitais que fazem seu negócio
                            crescer.
                        </span>
                    </a>
                </div>

                <div
                    className={clsx(
                        'absolute md:static top-16 left-0 w-full md:w-auto',
                        'bg-white/95 dark:bg-dark-10/95 md:bg-transparent dark:md:bg-transparent',
                        'transition-transform duration-300 ease-in-out md:transform-none',
                        {
                            'translate-y-0': isMenuOpen,
                            '-translate-y-[150%] md:translate-y-0': !isMenuOpen,
                        },
                    )}>
                    <ul className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-10 w-full h-screen md:h-auto">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <a
                                    href={link.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`${navLinkClasses} group text-lg block py-2 md:py-0`}>
                                    <span>{link.label}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <a
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold bg-brand text-white hover:opacity-90 transition-opacity">
                    Quero melhorar minha presença online
                </a>

                <div className="md:hidden z-50">
                    <button
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                        onClick={toggleMenu}>
                        <span
                            className={clsx(
                                'block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ease-in-out',
                                { 'rotate-45 translate-y-2': isMenuOpen },
                            )}></span>
                        <span
                            className={clsx(
                                'block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-opacity duration-300 ease-in-out',
                                { 'opacity-0': isMenuOpen },
                            )}></span>
                        <span
                            className={clsx(
                                'block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ease-in-out',
                                { '-rotate-45 -translate-y-2': isMenuOpen },
                            )}></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
