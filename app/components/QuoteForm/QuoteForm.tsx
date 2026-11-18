'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const projectTypes = [
    'Landing Page',
    'Site institucional',
    'Redesign',
    'Manutenção de site',
    'Ainda estou avaliando',
];

function QuoteForm() {
    const [name, setName] = useState('');
    const [projectType, setProjectType] = useState(projectTypes[0]);
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const text = [
            `Olá, Luís! ${name ? `Meu nome é ${name}.` : ''}`,
            `Tenho interesse em: ${projectType}.`,
            message && `Sobre meu projeto: ${message}`,
        ]
            .filter(Boolean)
            .join('\n');

        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    const inputClasses =
        'w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-10 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors';

    return (
        <section
            id="quote"
            className="py-24 md:py-32 bg-white dark:bg-dark-20 border-t border-gray-100 dark:border-gray-800"
            aria-labelledby="quote-heading">
            <div className="editorial-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Informações */}
                    <div className="max-w-lg">
                        <span className="eyebrow">Vamos conversar</span>

                        <h2
                            id="quote-heading"
                            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-900 dark:text-white tracking-tight leading-tight">
                            Seu projeto começa com uma boa conversa.
                        </h2>

                        <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            Conte o que sua empresa precisa. Vou entender seu
                            cenário e apresentar uma proposta alinhada aos seus
                            objetivos.
                        </p>

                        <div className="mt-10 space-y-5">
                            {[
                                'Atendimento direto, sem intermediários',
                                'Proposta alinhada à sua necessidade',
                                'Sem compromisso de contratação',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                                        ✓
                                    </span>

                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="bg-gray-50 dark:bg-dark-10 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
                                Conte sobre seu projeto
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Algumas informações para começarmos.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Como posso te chamar?
                                    <span className="text-gray-400 font-normal">
                                        {' '}
                                        (opcional)
                                    </span>
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Seu nome"
                                    className={inputClasses}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="projectType"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    O que você precisa?
                                </label>

                                <select
                                    id="projectType"
                                    className={inputClasses}
                                    value={projectType}
                                    onChange={(e) =>
                                        setProjectType(e.target.value)
                                    }>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Conte um pouco sobre sua ideia
                                    <span className="text-gray-400 font-normal">
                                        {' '}
                                        (opcional)
                                    </span>
                                </label>

                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Ex.: Preciso de um site para apresentar meus serviços e receber contatos..."
                                    className={`${inputClasses} resize-none`}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 rounded-lg bg-brand hover:bg-brand-dark text-white font-semibold py-4 px-6 transition-all duration-300 hover:-translate-y-0.5">
                                <FaWhatsapp className="w-5 h-5" />

                                <span>Continuar pelo WhatsApp</span>
                            </button>

                            <p className="text-xs text-center text-gray-500 dark:text-gray-500 leading-relaxed">
                                Seus dados serão utilizados apenas para dar
                                continuidade ao contato.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuoteForm;
