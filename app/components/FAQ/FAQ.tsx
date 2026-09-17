'use client';
import { useState } from 'react';

const faqs = [
    {
        question: 'Quanto custa?',
        answer: 'O investimento é definido de acordo com o escopo do projeto: número de páginas, complexidade e integrações. Te passo um valor fechado após entender sua necessidade.',
    },
    {
        question: 'Quanto tempo leva?',
        answer: 'O prazo varia conforme o tipo de projeto e é combinado antes de começarmos.',
    },
    {
        question: 'O que está incluído?',
        answer: 'Desenvolvimento do site, ajustes de conteúdo, responsividade para celular e publicação.',
    },
    {
        question: 'Preciso fornecer textos e imagens?',
        answer: 'Ajuda ter o material, mas não é obrigatório. Posso te orientar sobre o que reunir.',
    },
    {
        question: 'Como funciona o pagamento?',
        answer: 'Geralmente combinamos uma entrada e o restante na entrega. Detalhes ficam na proposta.',
    },
    {
        question: 'Onde o site fica publicado?',
        answer: 'Publico em uma hospedagem própria para o projeto; domínio e hospedagem podem ser contratados conforme a necessidade.',
    },
    {
        question: 'Posso pedir alterações depois?',
        answer: 'Sim, pequenas alterações e suporte após a publicação podem ser contratados conforme a necessidade.',
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            id="faq"
            className="py-20 md:py-28 bg-offwhite dark:bg-dark-10"
            aria-labelledby="faq-heading">
            <div className="editorial-container max-w-3xl">
                <span className="eyebrow">FAQ</span>
                <h2 id="faq-heading" className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Perguntas frequentes
                </h2>
                <div className="mt-10 w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={faq.question} className="py-4">
                                <button
                                    className="w-full flex items-center justify-between text-left font-poppins font-semibold text-gray-900 dark:text-white"
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }>
                                    {faq.question}
                                    <span className="ml-4 text-brand">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>
                                {isOpen && (
                                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
