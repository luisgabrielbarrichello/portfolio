import IconGithub from '@/app/assets/icons/github.svg';
import IconLinkedin from '@/app/assets/icons/linkedin.svg';
import IconInstagram from '@/app/assets/icons/instagram.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            name: 'Github',
            url: 'https://github.com/LuisBarrichello',
            icon: IconGithub,
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/luisgabrielbarrichello/',
            icon: IconLinkedin,
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/dev.barrichello/',
            icon: IconInstagram,
        },
    ];

    return (
        <footer
            id="footer"
            className="dark:bg-dark-10 text-gray-700 dark:text-gray-400 py-10 hairline">
            <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center sm:items-start gap-4 text-sm">
                    <span>© {currentYear} - Todos os direitos reservados</span>
                    <nav aria-label="Redes sociais">
                        <ul className="flex gap-4">
                            {socialLinks.map((link) => (
                                <li key={link.url}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-105 transition-all duration-200">
                                        <link.icon
                                            className="w-5 h-5 shrink-0"
                                            aria-hidden="true"
                                        />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="text-sm text-center sm:text-right">
                    <span>
                        Desenvolvido por{' '}
                        <a
                            href="https://linkedin.com/in/luisgabrielbarrichello"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium font-extrabold text-brand dark:text-brand hover:underline">
                            LB.DEV
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
