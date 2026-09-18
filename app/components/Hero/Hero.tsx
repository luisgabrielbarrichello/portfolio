import Button from '../common/Buttons/Button';
import { getWhatsappLink } from '@/app/lib/whatsapp';

function Hero() {
    return (
        <section
            id="home"
            className="relative w-full overflow-hidden pt-24 pb-0 md:pt-32"
            role="region"
            aria-label="Hero Section">
            <div className="editorial-container">
                <span className="eyebrow">
                    Sites • Landing Pages • Experiências Digitais
                </span>
                <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-gray-900 dark:text-white tracking-tight max-w-4xl">
                        Seu negócio precisa de mais{' '}
                        <span className="text-brand">contatos</span>, não só de
                        um site bonito.
                    </h1>
                    <p className="max-w-xs text-base text-gray-600 dark:text-gray-400 lg:pb-2">
                        Crio sites e landing pages para pequenos negócios
                        apresentarem seus serviços, transmitirem confiança e
                        facilitarem novos contatos pelo WhatsApp.
                    </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
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

            {/* Large mockup, partially cropped by viewport */}
            <div className="relative mt-14 md:mt-20">
                <div className="editorial-container">
                    <div className="relative rounded-t-xl border border-b-0 border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-20 shadow-2xl shadow-gray-300/50 dark:shadow-black/50 overflow-hidden -mb-24 md:-mb-40">
                        <div className="flex items-center gap-1.5 px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                            <span className="ml-3 text-[11px] text-gray-400 dark:text-gray-600 truncate">
                                suaempresa.com.br
                            </span>
                        </div>
                        <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-widest text-brand font-semibold">
                                    Para pequenos negócios
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
