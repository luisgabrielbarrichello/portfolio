const supportPoints = [
    {
        number: '01',
        word: 'Atenção',
        text: 'Chama atenção nos primeiros segundos.',
    },
    {
        number: '02',
        word: 'Clareza',
        text: 'Explica o serviço rapidamente.',
    },
    {
        number: '03',
        word: 'Ação',
        text: 'Leva direto ao WhatsApp, sem fricção.',
    },
];

function BenefitSection() {
    return (
        <section
            id="concept-to-launch"
            className="py-24 md:py-36 bg-white dark:bg-dark-10 overflow-hidden"
            aria-labelledby="benefit-heading">
            <div className="editorial-container">
                <span className="eyebrow">02 / Além da primeira impressão</span>
            </div>

            <h2
                id="benefit-heading"
                className="mt-6 text-center text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] text-gray-900 dark:text-white select-none">
                CONFIANÇA
            </h2>

            <div className="editorial-container mt-10 md:mt-16">
                <p className="max-w-lg text-lg text-gray-600 dark:text-gray-400">
                    Um site não serve só para parecer bonito. Ele precisa fazer
                    o visitante confiar o suficiente para chamar no WhatsApp.
                </p>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {supportPoints.map((point) => (
                        <div key={point.number} className="hairline pt-6">
                            <span className="section-number">
                                {point.number}
                            </span>
                            <h3 className="mt-3 text-xl font-poppins font-bold text-gray-900 dark:text-white">
                                {point.word}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BenefitSection;
