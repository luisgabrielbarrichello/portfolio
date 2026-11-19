import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import IconDocument from '@/app/assets/icons/document.svg';

interface ProjectCardProps {
    project: {
        image_url: string;
        title: string;
        description: string;
        homepage?: string;
        featured?: boolean;
    };
    onOpenModal: () => void;
}

function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
    const { image_url, title, description, homepage, featured } = project;

    return (
        <article className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-dark-20 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Project Image */}
            <figure className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-dark-10">
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
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                fill
                            />
                        </a>
                    ) : (
                        <Image
                            src={image_url}
                            alt={`Prévia visual do projeto ${title}`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            fill
                        />
                    ))}
            </figure>

            {/* Project Information */}
            <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                    {description}
                </p>

                {/* Project Action */}
                <div className="mt-auto pt-6">
                    {featured ? (
                        <button
                            onClick={onOpenModal}
                            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
                            <IconDocument className="w-4 h-4" />
                            Ver estudo de caso
                            <FaArrowRightLong className="ml-1 w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </button>
                    ) : homepage ? (
                        <a
                            href={homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
                            Visualizar projeto
                            <FaArrowRightLong className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
