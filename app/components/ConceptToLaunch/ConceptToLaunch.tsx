const stages = ['Ideia', 'Estrutura', 'Interface', 'Experiência final'];

function ConceptToLaunch() {
    return (
        <section
            id="concept-to-launch"
            className="py-24 md:py-36 bg-offwhite dark:bg-dark-10"
            aria-labelledby="concept-heading">
            <div className="editorial-container">
                <span className="eyebrow">04 / Do conceito ao ar</span>
                <h2
                    id="concept-heading"
                    className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white max-w-2xl leading-tight">
                    Uma ideia até virar experiência.
                </h2>
            </div>

            <div className="editorial-container mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stages.map((stage, index) => (
                    <div key={stage} className="flex flex-col gap-4">
                        <div className="relative aspect-[3/4] rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-dark-20 flex items-center justify-center p-6">
                            {index === 0 && (
                                <svg viewBox="0 0 100 100" className="w-2/3">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="30"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeDasharray="6 6"
                                        className="text-gray-400 dark:text-gray-600"
                                        strokeWidth="2"
                                    />
                                </svg>
                            )}
                            {index === 1 && (
                                <div className="w-full space-y-2">
                                    <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full" />
                                    <div className="h-2 w-4/5 bg-gray-300 dark:bg-gray-700 rounded-full" />
                                    <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-700 rounded-full" />
                                    <div className="h-10 w-full bg-gray-200 dark:bg-gray-800 rounded-md mt-3" />
                                </div>
                            )}
                            {index === 2 && (
                                <div className="w-full space-y-2">
                                    <div className="h-3 w-2/3 bg-gray-900 dark:bg-white rounded-full" />
                                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full" />
                                    <div className="h-8 w-2/3 bg-brand rounded-md mt-2" />
                                </div>
                            )}
                            {index === 3 && (
                                <div className="absolute inset-0 bg-gray-900 dark:bg-white flex items-center justify-center">
                                    <span className="text-xs font-bold tracking-widest text-white dark:text-gray-900">
                                        LIVE
                                    </span>
                                </div>
                            )}
                        </div>
                        <div>
                            <span className="section-number">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <p className="mt-1 font-poppins font-bold text-gray-900 dark:text-white">
                                {stage}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ConceptToLaunch;
