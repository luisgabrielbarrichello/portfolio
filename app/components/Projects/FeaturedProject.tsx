import Image from 'next/image';
import Button from '../common/Buttons/Button';
import IconLink from '@/app/assets/icons/link.svg';
import IconDocument from '@/app/assets/icons/document.svg';

interface FeaturedProjectProps {
    project: {
        title: string;
        description: string;
        image_url: string;
        technologies: string[];
        homepage?: string;
        case_study?: {
            problem: string;
            solution: string;
        };
    };
    onOpenModal: () => void;
}

function FeaturedProject({ project, onOpenModal }: FeaturedProjectProps) {
    const { title, description, image_url, homepage, case_study } = project;

    return (
        <article className="group overflow-hidden rounded-2xl bg-white dark:bg-dark-20 border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
            {/* Project Image */}
            <figure className="relative aspect-[16/8] md:aspect-[21/9] overflow-hidden bg-gray-100 dark:bg-dark-10">
                {image_url &&
                    (homepage ? (
                        <a
                            href={homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visitar o site do projeto ${title}`}
                            className="absolute inset-0 block">
                            <Image
                                src={image_url}
                                alt={`Prévia visual do projeto ${title}`}
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                fill
                                priority
                            />
                        </a>
                    ) : (
                        <Image
                            src={image_url}
                            alt={`Prévia visual do projeto ${title}`}
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            fill
                            priority
                        />
                    ))}
            </figure>

            {/* Project Information */}
            <div className="p-6 sm:p-8 border-t border-gray-100 dark:border-gray-800">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                            Projeto principal
                        </span>

                        <h3 className="mt-2 font-poppins font-bold text-2xl md:text-3xl text-gray-900 dark:text-white">
                            {title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {case_study?.problem ?? description}
                        </p>
                    </div>

                    {/* Project Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        {case_study && (
                            <Button
                                variant="ghost"
                                content="Ver estudo de caso"
                                IconComponent={IconDocument}
                                altImage="Estudo de caso"
                                onClick={onOpenModal}
                            />
                        )}

                        {homepage && (
                            <Button
                                variant="outline"
                                content="Visualizar projeto"
                                IconComponent={IconLink}
                                altImage="Visualizar projeto"
                                pathLink={homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default FeaturedProject;
