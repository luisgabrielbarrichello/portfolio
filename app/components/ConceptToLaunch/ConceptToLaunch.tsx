const stages = [
    {
        number: '01',
        title: 'Ideia & Entendimento',
        description:
            'Mapeamento dos serviços, público-alvo e objetivo central de contato para orientar cada decisão.',
        visual: 'idea',
    },
    {
        number: '02',
        title: 'Estrutura & Copy',
        description:
            'Arquitetura de informação e redação pensada para responder dúvidas e gerar autoridade imediata.',
        visual: 'structure',
    },
    {
        number: '03',
        title: 'Interface & Design',
        description:
            'Layout sofisticado, 100% responsivo para smartphones e alinhado ao posicionamento premium.',
        visual: 'design',
    },
    {
        number: '04',
        title: 'Experiência Final',
        description:
            'Hospedagem rápida, SEO configurado, testes no WhatsApp e seu negócio pronto para receber contatos.',
        visual: 'live',
    },
];


function StageVisual({ type }) {
    const visualBase =
        'w-full h-44 rounded-xl border flex items-center justify-center transition-colors duration-300';

    if (type === 'idea') {
        return (
            <div
                className={`${visualBase} bg-white dark:bg-dark-10 border-gray-200 dark:border-gray-800`}>
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center transition-all duration-500 group-hover:border-brand group-hover:animate-bounce-subtle">
                    <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-gray-400 group-hover:text-brand group-hover:animate-bounce transition-colors"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true">
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.8.6-1.3 1.4-1.5 2.5h-4c-.2-1.1-.7-1.9-1.5-2.5Z" />
                        <path d="M12 7v4" />
                    </svg>
                </div>
            </div>
        );
    }

    if (type === 'structure') {
        return (
            <div
                className={`${visualBase} bg-white dark:bg-dark-10 border-gray-200 dark:border-gray-800 p-5 flex-col gap-2.5`}>
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full" />
                <div className="h-2 w-5/6 bg-gray-100 dark:bg-gray-800 rounded-full" />
                <div className="h-8 w-full bg-gray-100 dark:bg-gray-800 rounded-md mt-1" />
            </div>
        );
    }

    if (type === 'design') {
        return (
            <div
                className={`${visualBase} bg-white dark:bg-dark-10 border-gray-200 dark:border-gray-800 p-5 flex-col gap-3`}>
                <div className="h-3.5 w-2/3 bg-gray-900 dark:bg-white rounded" />
                <div className="h-8 w-full bg-brand rounded-lg flex items-center px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>
                <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full" />
            </div>
        );
    }

    return (
        <div className={`${visualBase} flex-col bg-[#0B1220] border-gray-800`}>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-mono mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                LIVE
            </div>

            <span className="text-xs text-gray-400 font-mono">100% no ar</span>
        </div>
    );
}



function ConceptToLaunch() {
    return (
        <section
            id="process"
            className="py-24 md:py-36 bg-offwhite dark:bg-dark-10 transition-colors duration-300"
            aria-labelledby="concept-heading"
        >
            <div className="editorial-container">
                <span className="eyebrow">04 / Do conceito ao ar</span>

                <h2
                    id="concept-heading"
                    className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white max-w-2xl leading-tight"
                >
                    Uma ideia até virar experiência.
                </h2>
            </div>

            <div className="editorial-container mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {stages.map((stage, index) => {
                    const isFinal = index === 3;

                    return (
                        <article
                            key={stage.number}
                            className={`group rounded-2xl p-6 border transition-all duration-300 ${
                                isFinal
                                    ? 'bg-navy dark:bg-brand-light border-navy dark:border-gray-200 text-white dark:text-navy shadow-md hover:-translate-y-1'
                                    : 'bg-white dark:bg-dark-20 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1'
                            }`}>
                            <StageVisual type={stage.visual} />

                            <span
                                className={`block text-xs font-bold tracking-widest mt-6 mb-1 ${
                                    isFinal
                                        ? 'text-gold'
                                        : 'text-gray-500 dark:text-gray-400'
                                }`}>
                                {stage.number}
                            </span>

                            <h3
                                className={`text-lg font-poppins font-bold mb-2 ${
                                    isFinal
                                        ? 'text-white dark:text-navy'
                                        : 'text-gray-900 dark:text-white'
                                }`}>
                                {stage.title}
                            </h3>

                            <p
                                className={`text-xs leading-relaxed ${
                                    isFinal
                                        ? 'text-gray-300 dark:text-gray-600'
                                        : 'text-gray-600 dark:text-gray-400'
                                }`}>
                                {stage.description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default ConceptToLaunch;
