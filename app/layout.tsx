import './global.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ThemeSwitcher from './components/common/ThemeSwitcher/ThemeSwitcher';
import BackToTopButton from './components/common/Buttons/BackToTopButton';
import { Providers } from './Providers';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://luisbarrichello.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Sites e Landing Pages para Empresas | Luís Gabriel',
        template: '%s | Luís Gabriel',
    },
    description:
        'Criação de sites e landing pages profissionais para empresas e pequenos negócios. Apresente seus serviços, fortaleça sua presença digital e facilite novos contatos pelo WhatsApp.',
    keywords: [
        'Criação de sites',
        'Sites para empresas',
        'Landing pages para empresas',
        'Desenvolvimento de sites',
        'Sites profissionais',
        'Sites para pequenos negócios',
        'Criação de sites Laranjal Paulista',
        'LB.DEV',
    ],
    authors: [{ name: 'Luís Gabriel Barrichello', url: baseUrl }],
    creator: 'Luís Gabriel Barrichello',
    verification: {
        google: 'sE3yfnUZSGzLEFe2X3o4YpGhPg6y3SnfZh8L-EDXmEk',
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: baseUrl,
        title: 'Sites e Landing Pages para Empresas | Luís Gabriel',
        description:
            'Sites e landing pages profissionais para pequenos negócios apresentarem seus serviços e gerarem mais contatos.',
        siteName: 'Luís Gabriel - Sites e Landing Pages',
        images: [
            {
                url: '/assets/img/me.png',
                width: 1200,
                height: 630,
                alt: 'Luís Gabriel Barrichello',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Luís Gabriel - Sites e Landing Pages',
        founder: 'Luís Gabriel Barrichello',
        url: baseUrl,
        image: `${baseUrl}/assets/img/me.png`,
        description:
            'Criação de sites e landing pages profissionais para empresas e pequenos negócios.',
        areaServed: 'BR',
        sameAs: [
            'https://github.com/LuisBarrichello',
            'https://www.linkedin.com/in/luisgabrielbarrichello/',
            'https://www.instagram.com/dev.barrichello/',
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Laranjal Paulista',
            addressRegion: 'SP',
            addressCountry: 'BR',
        },
    };

    return (
        <html lang="pt-br" className={`${inter.variable} ${poppins.variable}`}>
            <body className="bg-white dark:bg-dark-10 text-gray-800 dark:text-white antialiased selection:bg-brand selection:text-white">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}></script>

                <Providers>
                    <Header />

                    <main className="relative">{children}</main>

                    <Footer />
                    
                    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-y-4 z-50">
                        <ThemeSwitcher />
                        <BackToTopButton />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
