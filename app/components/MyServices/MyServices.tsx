import Button from '../common/Buttons/Button';
import IconChat from '@/app/assets/icons/icon-chat.svg';
import { getWhatsappLink } from '@/app/lib/whatsapp';
import { FaArrowRightLong } from 'react-icons/fa6';


const servicesData = [
    {
        number: '01',
        title: 'Landing Page',
        description:
            'Uma página focada em apresentar um serviço e transformar visitantes em contatos qualificados diretamente no WhatsApp.',
        cta: 'Quero uma Landing Page',
    },
    {
        number: '02',
        title: 'Site Institucional',
        description:
            'Uma presença digital completa para empresas que precisam transmitir credibilidade, apresentar catálogo de serviços e equipe.',
        cta: 'Quero um site',
    },
    {
        number: '03',
        title: 'Evolução & Manutenção',
        description:
            'Pequenas alterações, novas seções, melhorias contínuas de velocidade e suporte dedicado após a publicação.',
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
                                className="group md:col-span-2 flex items-center justify-end gap-3 text-sm font-semibold text-brand">
                                <span className="transition-colors duration-200 group-hover:text-brand-dark">
                                    {service.cta}
                                </span>

                                <FaArrowRightLong className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-14 hairline pt-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-20 border border-gray-200 dark:border-gray-800 transition-colors duration-300">
                        <div className="max-w">
                            <h3 className="text-lg font-poppins font-bold text-gray-900 dark:text-white">
                                Tem um projeto em mente?
                            </h3>

                            <p className="mt-.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                Receba uma proposta sem compromisso, com
                                cronograma e escopo definidos para o seu
                                projeto.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <Button
                                target="_blank"
                                variant={'ghost'}
                                content="Solicitar orçamento"
                                altImage="Ícone de conversa"
                                IconComponent={IconChat}
                                pathLink={getWhatsappLink()}
                                rel="noopener noreferrer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyServices;
