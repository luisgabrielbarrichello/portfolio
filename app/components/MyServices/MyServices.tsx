import Button from '../common/Buttons/Button';
import IconChat from '@/app/assets/icons/icon-chat.svg';
import { getWhatsappLink } from '@/app/lib/whatsapp';

const servicesData = [
    {
        number: '01',
        title: 'Landing Page',
        description:
            'Uma página focada em apresentar um serviço e transformar visitantes em contatos.',
        cta: 'Quero uma Landing Page',
    },
    {
        number: '02',
        title: 'Site Institucional',
        description:
            'Uma presença digital completa para empresas que precisam transmitir credibilidade e apresentar seus serviços.',
        cta: 'Quero um site',
    },
    {
        number: '03',
        title: 'Evolução & Manutenção',
        description:
            'Pequenas alterações, atualizações e suporte após a publicação.',
        cta: 'Quero conversar sobre manutenção',
    },
];

function MyServices() {
    return (
        <section
            id="my-services"
            className="py-20 md:py-28 bg-offwhite dark:bg-dark-10"
            aria-labelledby="services-heading">
            <div className="editorial-container">
                <div className="max-w-xl">
                    <span className="eyebrow">Serviços</span>
                    <h2
                        id="services-heading"
                        className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        O que eu posso criar para sua empresa
                    </h2>
                </div>

                <div className="mt-14 flex flex-col">
                    {servicesData.map((service) => (
                        <div
                            key={service.title}
                            className="hairline py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                            <span className="section-number md:col-span-1">
                                {service.number}
                            </span>
                            <h3 className="md:col-span-3 font-poppins font-bold text-xl text-gray-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="md:col-span-6 text-gray-600 dark:text-gray-400">
                                {service.description}
                            </p>
                            <a
                                href={getWhatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="md:col-span-2 md:text-right text-sm font-semibold text-brand hover:underline whitespace-nowrap">
                                {service.cta} →
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hairline pt-10">
                    <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                        Tem um projeto em mente?
                    </p>
                    <Button
                        target="target"
                        variant={'ghost'}
                        content="Solicitar orçamento"
                        altImage="icon chat"
                        IconComponent={IconChat}
                        pathLink={getWhatsappLink()}
                        rel="noopener noreferrer"
                    />
                </div>
            </div>
        </section>
    );
}

export default MyServices;
