'use client';

import { getWhatsappLink } from '@/app/lib/whatsapp';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../Buttons/Button';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);

        onScroll();

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { to: '#home', label: 'Início' },
        { to: '#process', label: 'Processo' },
        { to: '#my-services', label: 'Serviços' },
        { to: '#projects', label: 'Projetos' },
        { to: '#testimonials', label: 'Depoimentos' },
        { to: '#faq', label: 'FAQ' },
        { to: '#cta', label: 'Contato' },
    ];

    const navLinkClasses =
        'relative block py-2 text-sm font-medium text-dark dark:text-white hover:text-brand dark:hover:text-brand transition-colors duration-300';

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className={clsx(
                'sticky top-0 z-50 px-4 sm:px-6 xl:px-12 2xl:px-20 transition-all duration-300',
                isScrolled
                    ? 'bg-white/90 dark:bg-dark-10/90 backdrop-blur-md shadow-sm shadow-gray-200/50 dark:shadow-black/30'
                    : 'bg-white/80 dark:bg-dark-10/80 backdrop-blur-sm',
            )}>
            <nav
                aria-label="Navegação principal"
                className="relative flex h-16 w-full items-center justify-between gap-5">
                {/* Brand */}
                <div className="shrink-0">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        aria-label="LB.dev - Início"
                        className="flex items-center gap-x-2 text-xl md:text-2xl font-extrabold">
                        <span className="rounded-md bg-gray-800 px-2 py-0.5 font-poppins text-white dark:bg-white dark:text-gray-900">
                            LB
                        </span>

                        <span className="font-poppins text-gray-500 dark:text-gray-400">
                            .dev
                        </span>

                        <div className="hidden 2xl:block h-8 w-px bg-gray-300 dark:bg-gray-700" />

                        <span className="hidden 2xl:block max-w-48 text-xs font-bold leading-tight text-gray-500 dark:text-gray-300">
                            Sites e experiências digitais que fazem seu negócio
                            crescer.
                        </span>
                    </a>
                </div>

                {/* Desktop / tablet navigation */}
                <div
                    id="main-navigation"
                    className={clsx(
                        'fixed xl:static top-16 left-0 z-40 w-full xl:w-auto',
                        'h-[calc(100dvh-4rem)] xl:h-auto',
                        'overflow-y-auto xl:overflow-visible',
                        'bg-white dark:bg-dark-10 xl:bg-transparent xl:dark:bg-transparent',
                        'transition-all duration-300 ease-in-out',
                        {
                            'translate-y-0 opacity-100 visible': isMenuOpen,
                            '-translate-y-3 opacity-0 invisible xl:translate-y-0 xl:opacity-100 xl:visible':
                                !isMenuOpen,
                        },
                    )}>
                    <ul className="flex min-h-full w-full flex-col items-center justify-center gap-5 px-6 py-8 xl:min-h-0 xl:w-auto xl:flex-row xl:justify-center xl:gap-4 2xl:gap-6 xl:px-0 xl:py-0">
                        {/* Mobile brand description */}
                        <li className="mb-3 text-center xl:hidden">
                            <p className="mx-auto max-w-[240px] border-b border-gray-200 pb-5 text-xs font-bold leading-relaxed text-gray-500 dark:border-gray-800 dark:text-gray-300">
                                Sites e experiências digitais que fazem seu
                                negócio crescer.
                            </p>
                        </li>

                        {/* Navigation links */}
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <a
                                    href={link.to}
                                    onClick={closeMenu}
                                    className={clsx(
                                        navLinkClasses,
                                        'group text-base xl:text-xs 2xl:text-sm',
                                    )}>
                                    {link.label}

                                    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                </a>
                            </li>
                        ))}

                        {/* Mobile CTA */}
                        <li className="mt-5 xl:hidden">
                            <Button
                                content="Solicitar orçamento"
                                pathLink={getWhatsappLink()}
                                IconComponent={FaWhatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center whitespace-nowrap rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            />
                        </li>
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden shrink-0 xl:block">
                    <Button
                        content="Solicitar orçamento"
                        pathLink={getWhatsappLink()}
                        IconComponent={FaWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center whitespace-nowrap rounded-md bg-brand text-xs text-white transition-opacity hover:opacity-90 2xl:text-sm"
                    />
                </div>

                {/* Mobile / tablet menu button */}
                <div className="z-50 xl:hidden">
                    <button
                        type="button"
                        aria-label={
                            isMenuOpen
                                ? 'Fechar menu de navegação'
                                : 'Abrir menu de navegação'
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="main-navigation"
                        onClick={() => setIsMenuOpen((previous) => !previous)}
                        className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-white/5">
                        <span
                            className={clsx(
                                'block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300 dark:bg-gray-200',
                                {
                                    'translate-y-[8px] rotate-45': isMenuOpen,
                                },
                            )}
                        />

                        <span
                            className={clsx(
                                'block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300 dark:bg-gray-200',
                                {
                                    'opacity-0': isMenuOpen,
                                },
                            )}
                        />

                        <span
                            className={clsx(
                                'block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300 dark:bg-gray-200',
                                {
                                    '-translate-y-[8px] -rotate-45': isMenuOpen,
                                },
                            )}
                        />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
