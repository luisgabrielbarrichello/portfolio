import IconGithub from '@/app/assets/icons/github.svg';
import IconLinkedin from '@/app/assets/icons/linkedin.svg';
import IconInstagram from '@/app/assets/icons/instagram.svg';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/luisgabrielbarrichello',
            icon: IconGithub,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/luisgabrielbarrichello/',
            icon: IconLinkedin,
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/luisbarrichello.dev/',
            icon: IconInstagram,
        },
    ];

    const navigationLinks = [
        { name: 'Serviços', url: '#my-services' },
        { name: 'Projetos', url: '#projects' },
        { name: 'FAQ', url: '#faq' },
        { name: 'Contato', url: '#quote' },
    ];

    const contactUrl =
        'https://wa.me/5515996403676?text=Ol%C3%A1%2C+Lu%C3%ADs%21+Vi+seu+portf%C3%B3lio+e+gostaria+de+conversar+sobre+a+cria%C3%A7%C3%A3o+de+um+site+para+minha+empresa.';

    return (
        <footer
            id="footer"
            className="bg-white dark:bg-dark-10 text-slate-700 dark:text-slate-300 py-12 hairline">
            <div className="editorial-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="flex flex-col items-center sm:items-start gap-5">
                        <a
                            href="#home"
                            rel="noreferrer"
                            className="flex items-center gap-x-2 text-xl md:text-2xl font-extrabold">
                            <span className="font-poppins bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-2 py-0.5 rounded-md">
                                LB
                            </span>
                            <span className="font-poppins text-gray-500 dark:text-gray-400">
                                .dev
                            </span>
                        </a>

                        <p className="text-sm font-bold text-center sm:text-left text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                            Sites e experiências digitais para negócios que
                            querem crescer.
                        </p>

                        <nav aria-label="Redes sociais">
                            <ul className="flex items-center gap-5">
                                {socialLinks.map((link) => (
                                    <li key={link.url}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.name}
                                            title={link.name}
                                            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-white transition-colors duration-200">
                                            <link.icon
                                                className="w-5 h-5 shrink-0 block"
                                                aria-hidden="true"
                                            />
                                            <span className="text-sm">
                                                {link.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-6">
                        <div className="flex flex-col items-center sm:items-end gap-4">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                                Navegação
                            </h2>

                            <nav aria-label="Navegação do rodapé">
                                <ul className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-3">
                                    {navigationLinks.map((link) => (
                                        <li key={link.url}>
                                            <a
                                                href={link.url}
                                                className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-white transition-colors duration-200">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <a
                            href={contactUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                            Solicitar orçamento
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-center sm:text-left text-slate-500 dark:text-slate-500">
                        © {currentYear} LB.DEV. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
