import Button from '../common/Buttons/Button';
import { getWhatsappLink } from '@/app/lib/whatsapp';

function Hero() {
    return (
        <section
            id="home"
            className="relative w-full overflow-hidden pt-20 pb-0 md:pt-28"
            role="region"
            aria-label="Apresentação da LB.dev">
            <div className="editorial-container">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-brand-light border border-gray-200 mb-8">
                    <span className="relative flex h-1.5 w-1.5">
                        {/* Radar */}
                        <span className="absolute -inset-0.5 inline-flex rounded-full bg-brand-dark opacity-50 animate-ping [animation-duration:2s]"></span>

                        {/* Ponto central */}
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-dark"></span>
                    </span>
                    <span className="eyebrow">
                        Sites • Landing Pages • Experiências Digitais
                    </span>
                </div>

                {/* Hero Content */}
                <div
                    className="
                    grid grid-cols-1
                    lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]
                    gap-8 lg:gap-16 xl:gap-20
                    items-end
                ">
                    {/* Main Heading */}
                    <div>
                        <h1
                            className="
                            text-[clamp(3rem,6vw,5.5rem)]
                            leading-[1.1]
                            font-black
                            text-gray-900 dark:text-white
                            tracking-[-0.055em]
                            max-w-[820px]
                        ">
                            Seu negócio precisa de{' '}
                            <span
                                className="
                                text-brand
                                underline decoration-brand/30
                                decoration-wavy underline-offset-8
                            ">
                                mais contatos
                            </span>
                            , não só de um site bonito.
                        </h1>
                    </div>

                    {/* Supporting Content */}
                    <div
                        className="
                        w-full max-w-[420px]
                        lg:justify-self-end
                        lg:pb-3
                    ">
                        <p
                            className="
                            text-lg md:text-xl
                            leading-relaxed
                            text-gray-600 dark:text-gray-400
                        ">
                            Crio sites e landing pages para pequenos negócios
                            apresentarem seus serviços, transmitirem confiança e
                            facilitarem novos contatos pelo WhatsApp.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <Button
                                variant="purple-blue"
                                content="Quero criar meu site"
                                pathLink={getWhatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand rounded-lg"
                            />

                            <Button
                                variant="outline"
                                content="Ver projetos"
                                pathLink="#projects"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Browser Mockup */}
            <div className="relative mt-16 md:mt-20">
                <div className="editorial-container">
                    <div
                        className="
                        relative rounded-t-xl
                        border border-b-0 border-gray-200
                        dark:border-gray-800
                        bg-white dark:bg-dark-20
                        shadow-2xl shadow-gray-300/50
                        dark:shadow-black/50
                        overflow-hidden
                        -mb-24 md:-mb-40
                    ">
                        <div
                            className="
                            flex items-center gap-1.5
                            px-5 py-3
                            border-b border-gray-200
                            dark:border-gray-800
                        ">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-300"></span>

                            <span
                                className="
                                ml-3 text-[11px]
                                text-gray-400 dark:text-gray-600
                                truncate
                            ">
                                suaempresa.com.br
                            </span>
                        </div>

                        <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <span
                                    className="
                                    text-[10px] uppercase
                                    tracking-widest text-brand font-semibold
                                ">
                                    Para pequenos e grandes negócios
                                </span>

                                <div className="h-5 md:h-7 w-4/5 rounded-full bg-gray-900 dark:bg-white"></div>
                                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                <div className="h-2.5 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>

                                <div className="flex gap-3 pt-3">
                                    <div className="h-10 w-36 rounded-md bg-brand"></div>
                                    <div className="h-10 w-28 rounded-md border border-gray-300 dark:border-gray-700"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-md bg-gray-100 dark:bg-dark-10 aspect-square"></div>
                                <div className="rounded-md bg-gray-100 dark:bg-dark-10 aspect-square"></div>
                                <div className="rounded-md bg-gray-100 dark:bg-dark-10 aspect-square col-span-2 h-16"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-24 md:h-40 bg-gray-50 dark:bg-dark-20"></div>
            </div>
        </section>
    );
}

export default Hero;
