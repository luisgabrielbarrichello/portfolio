'use client';

import { getWhatsappLink } from '@/app/lib/whatsapp';
import { FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';

function CTA() {
    return (
        <section
            id="cta"
            className="relative isolate overflow-hidden bg-[#080F20] text-white"
            aria-labelledby="cta-heading">
            {/* Background details */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Base */}
                <div className="absolute inset-0 bg-[#080F20]" />

                {/* Main blue illumination */}
                <div
                    className="absolute -left-[15%] top-[5%] h-[850px] w-[1000px] opacity-70"
                    style={{
                        background:
                            'radial-gradient(ellipse, rgba(37,99,235,0.24) 0%, rgba(29,78,216,0.10) 38%, transparent 72%)',
                    }}
                />

                {/* Large diagonal architectural shape */}
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 42% 100%)',
                        background:
                            'linear-gradient(135deg, rgba(37,99,235,0.13), rgba(15,27,53,0.04) 55%, rgba(37,99,235,0.10))',
                    }}
                />

                {/* Secondary diagonal light */}
                <div
                    className="absolute -right-[15%] -top-[40%] h-[140%] w-[38%] rotate-[25deg] border-l border-blue-400/10"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent, rgba(37,99,235,0.09), transparent)',
                    }}
                />

                {/* Large geometric outline */}
                <div
                    className="absolute -right-[8%] top-[8%] h-[650px] w-[650px] rotate-45 border border-blue-400/10"
                    style={{
                        borderRadius: '90px',
                    }}
                />

                {/* Inner geometric outline */}
                <div
                    className="absolute -right-[1%] top-[22%] h-[420px] w-[420px] rotate-45 border border-white/[0.07]"
                    style={{
                        borderRadius: '65px',
                    }}
                />

                {/* Blue light point */}
                <div
                    className="absolute right-[15%] top-[20%] h-[350px] w-[350px] rounded-full blur-[100px] opacity-40"
                    style={{
                        background: '#2563EB',
                    }}
                />

                {/* Golden accent */}
                <div
                    className="absolute bottom-[-35%] left-[35%] h-[400px] w-[600px] rounded-full blur-[130px] opacity-[0.10]"
                    style={{
                        background: '#B88A3B',
                    }}
                />

                {/* Fine texture */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            'radial-gradient(rgba(255,255,255,0.9) 0.7px, transparent 0.7px)',
                        backgroundSize: '18px 18px',
                    }}
                />

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>

            {/* Main content */}
            <div className="editorial-container relative z-10 py-24 md:py-36">
                {/* Top label */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold">
                        Próximo passo
                    </span>

                    <span className="text-xs font-mono text-gray-500">
                        LB.DEV / 2026
                    </span>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-14 md:pt-20">
                    {/* Heading */}
                    <div className="lg:col-span-8">
                        <p className="text-sm text-gray-400 mb-6">
                            Sua empresa está pronta para evoluir?
                        </p>

                        <h2
                            id="cta-heading"
                            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08]">
                            Vamos construir algo
                            <span className="block text-brand mt-2">
                                que faça a diferença.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-gray-400">
                            Uma presença digital profissional não é apenas sobre
                            ter um site. É sobre apresentar o valor do seu
                            negócio e facilitar o próximo contato com seus
                            clientes.
                        </p>
                    </div>

                    {/* Contact panel */}
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <div className="border border-white/10 bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 md:p-8">
                            <span className="text-xs text-gray-500 uppercase tracking-widest">
                                Vamos conversar?
                            </span>

                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Conte sua ideia.
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                Vamos entender o que você precisa e encontrar a
                                melhor solução para seu negócio.
                            </p>

                            <a
                                href={getWhatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Solicitar orçamento pelo WhatsApp"
                                className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-lg bg-brand hover:bg-brand-dark text-white px-5 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1">
                                <FaWhatsapp className="w-5 h-5 shrink-0" />
                                Solicitar orçamento
                                <FaExternalLinkAlt className="w-3 h-3 ml-auto shrink-0" />
                            </a>

                            <p className="mt-4 text-xs text-gray-500 text-center">
                                Primeiro contato sem compromisso.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom signature */}
                <div className="mt-20 md:mt-28 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
                    <span className="text-xs text-gray-500 tracking-wider">
                        LB.DEV — DESENVOLVIMENTO WEB
                    </span>

                    <span className="text-xs text-gray-500">
                        Transformando ideias em experiências digitais.
                    </span>
                </div>
            </div>
        </section>
    );
}

export default CTA;
