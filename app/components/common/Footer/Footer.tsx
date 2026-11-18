import IconGithub from '@/app/assets/icons/github.svg';
import IconLinkedin from '@/app/assets/icons/linkedin.svg';
import IconInstagram from '@/app/assets/icons/instagram.svg';
import { getWhatsappLink } from '@/app/lib/whatsapp';
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
        { name: 'Início', url: '#home' },
        { name: 'Serviços', url: '#my-services' },
        { name: 'Projetos', url: '#projects' },
        { name: 'Depoimentos', url: '#testimonials' },
        { name: 'Dúvidas frequentes', url: '#faq' },
        { name: 'Contato', url: '#cta' },
    ];

    const services = [
        'Landing Pages',
        'Sites institucionais',
        'Redesign de sites',
        'Ferramentas digitais sob medida',
    ];

    return (
        <footer
            id="footer"
            className="relative overflow-hidden bg-[#080F20] text-gray-400">
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-48 left-[10%] h-[400px] w-[500px] rounded-full blur-[140px] opacity-[0.10]"
                    style={{ background: '#2563EB' }}
                />

                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
            </div>

            <div className="editorial-container relative z-10 py-16 md:py-20">
                {/* Main footer content */}
                <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-12 md:gap-10">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link
                            href="#home"
                            aria-label="LB.dev - Voltar ao início"
                            className="inline-flex items-center gap-1">
                            <span className="font-poppins text-2xl font-extrabold tracking-tight text-white">
                                LB
                            </span>

                            <span className="rounded bg-brand px-1.5 py-0.5 text-xs font-semibold text-white">
                                .dev
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
                            Desenvolvimento de sites profissionais, landing
                            pages e experiências digitais para negócios que
                            desejam crescer com mais credibilidade e presença
                            online.
                        </p>

                        {/* Social links */}
                        <nav aria-label="Redes sociais" className="mt-7">
                            <ul className="flex items-center gap-3">
                                {socialLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.name}
                                            title={link.name}
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-brand/10 hover:text-white">
                                            <link.icon
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Contact shortcut */}
                        <a
                            href={getWhatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-light transition-colors hover:text-brand">
                            Vamos conversar sobre seu projeto
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3">
                        <h2 className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-white">
                            Navegação
                        </h2>

                        <nav aria-label="Navegação do rodapé" className="mt-6">
                            <ul className="space-y-4">
                                {navigationLinks.map((link) => (
                                    <li key={link.url}>
                                        <Link
                                            href={link.url}
                                            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-4">
                        <h2 className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-white">
                            O que eu desenvolvo
                        </h2>

                        <ul className="mt-6 space-y-4">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="flex items-start gap-3 text-sm text-gray-400">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    {service}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                            <p className="text-sm font-semibold text-white">
                                Tem um projeto em mente?
                            </p>

                            <p className="mt-2 text-xs leading-relaxed text-gray-400">
                                Vamos conversar sobre suas necessidades e
                                encontrar a melhor solução para seu negócio.
                            </p>

                            <a
                                href={getWhatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-light transition-colors hover:text-brand">
                                Solicitar orçamento
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-gray-500">
                        © {currentYear} LB.DEV. Todos os direitos reservados.
                    </p>

                    <Link
                        href="#home"
                        className="group inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-white">
                        Voltar ao topo
                        <span className="transition-transform duration-300 group-hover:-translate-y-1">
                            ↑
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
