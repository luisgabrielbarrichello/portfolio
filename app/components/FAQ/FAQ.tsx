'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

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
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="py-24 md:py-32 bg-offwhite dark:bg-dark-10 border-t border-gray-200/70 dark:border-gray-800"
            aria-labelledby="faq-heading">
            <div className="editorial-container max-w-4xl">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="eyebrow">FAQ</span>

                    <h2
                        id="faq-heading"
                        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Perguntas frequentes
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Tire suas dúvidas sobre o desenvolvimento, prazos e
                        funcionamento dos projetos.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const answerId = `faq-answer-${index}`;

                        return (
                            <article
                                key={faq.question}
                                className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
                                    isOpen
                                        ? 'bg-white dark:bg-dark-20 border-brand/30 dark:border-brand/40 shadow-sm'
                                        : 'bg-white dark:bg-dark-20 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                                }`}>
                                {/* Question */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand">
                                    <h3 className="font-poppins text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </h3>

                                    <span
                                        className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                                            isOpen
                                                ? 'bg-brand text-white'
                                                : 'bg-gray-100 dark:bg-dark-10 text-gray-500 dark:text-gray-400 group-hover:text-brand'
                                        }`}>
                                        <FiChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    id={answerId}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    aria-hidden={!isOpen}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                        isOpen
                                            ? 'grid-rows-[1fr]'
                                            : 'grid-rows-[0fr]'
                                    }`}>
                                    <div className="overflow-hidden">
                                        <div className="mx-5 sm:mx-6 border-t border-gray-100 dark:border-gray-800">
                                            <p className="py-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
