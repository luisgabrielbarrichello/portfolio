'use client';
import { useState } from 'react';

const projectTypes = [
    'Landing Page',
    'Site institucional',
    'Redesign',
    'Ainda não sei',
];

function QuoteForm() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [projectType, setProjectType] = useState(projectTypes[0]);
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = [
            `Olá, Luís! Meu nome é ${name}.`,
            company && `Empresa: ${company}.`,
            `Tenho WhatsApp: ${whatsapp}.`,
            `Tipo de projeto: ${projectType}.`,
            message && `Mensagem: ${message}`,
        ]
            .filter(Boolean)
            .join(' ');

        window.open(
            `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            '_blank',
        );
    };

    const inputClasses =
        'w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-10 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand';

    return (
        <section
            id="orcamento"
            className="py-20 md:py-28 bg-gray-50 dark:bg-dark-20"
            aria-labelledby="quote-heading">
            <div className="editorial-container max-w-xl">
                <span className="eyebrow block text-center">Contato</span>
                <h2 id="quote-heading" className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
                    Solicitar orçamento
                </h2>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    Preencha os dados e o próximo passo é continuar pelo
                    WhatsApp.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Nome
                        </label>
                        <input
                            id="name"
                            className={inputClasses}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                            Empresa
                        </label>
                        <input
                            id="company"
                            className={inputClasses}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">
                            WhatsApp
                        </label>
                        <input
                            id="whatsapp"
                            className={inputClasses}
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-1">
                            Tipo de projeto
                        </label>
                        <select
                            id="projectType"
                            className={inputClasses}
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}>
                            {projectTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Mensagem (opcional)
                        </label>
                        <textarea
                            id="message"
                            className={inputClasses}
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-brand text-white font-semibold py-3 hover:opacity-90 transition-opacity">
                        Solicitar orçamento
                    </button>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-500">
                        Seus dados são usados apenas para dar continuidade ao
                        contato via WhatsApp.
                    </p>
                </form>
            </div>
        </section>
    );
}

export default QuoteForm;
