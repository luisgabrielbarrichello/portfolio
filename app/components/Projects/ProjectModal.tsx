'use client';

import { useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';

interface ProjectModalProps {
    project: {
        title: string;
        case_study: {
            problem: string;
            solution: string;
            learnings: string;
        };
    };
    onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';
        modalRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const sections = [
        {
            number: '01',
            title: 'O problema',
            content: project.case_study.problem,
        },
        {
            number: '02',
            title: 'A solução',
            content: project.case_study.solution,
        },
        {
            number: '03',
            title: 'Aprendizados',
            content: project.case_study.learnings,
        },
    ];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}>
            <div
                ref={modalRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-dark-20 border border-gray-200 dark:border-gray-800 shadow-2xl outline-none animate-in zoom-in-95 duration-200"
                onClick={(event) => event.stopPropagation()}>
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-start justify-between gap-6 p-6 sm:p-8 pb-5 bg-white dark:bg-dark-20 border-b border-gray-100 dark:border-gray-800">
                    <div className="min-w-0">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                            Estudo de caso
                        </span>

                        <h2
                            id="modal-title"
                            className="mt-3 font-poppins text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                            {project.title}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-10 transition-colors duration-200"
                        aria-label="Fechar estudo de caso">
                        <FiX className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                    <div className="space-y-8">
                        {sections.map((section) => (
                            <section
                                key={section.number}
                                className="grid grid-cols-[36px_1fr] sm:grid-cols-[48px_1fr] gap-3 sm:gap-5">
                                <span className="pt-1 text-xs font-semibold font-mono tracking-wider text-brand">
                                    {section.number}
                                </span>

                                <div>
                                    <h3 className="font-poppins text-lg font-bold text-gray-900 dark:text-white">
                                        {section.title}
                                    </h3>

                                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                        {section.content}
                                    </p>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-dark-10/50">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        LB.dev <span className="mx-1.5">/</span> Desenvolvimento
                        web
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
