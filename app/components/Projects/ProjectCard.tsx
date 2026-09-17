import IconDocument from '@/app/assets/icons/document.svg';
import Button from '../common/Buttons/Button';
import Image from 'next/image';

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
        <div className="group flex flex-col h-full">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {image_url && (
                    <Image
                        src={image_url}
                        alt={`Imagem ilustrativa do projeto "${title}"`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        fill
                    />
                )}
            </figure>
            <div className="pt-4 flex flex-col flex-grow">
                <h3 className="font-poppins font-bold text-lg text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                    {description}
                </p>
                <div className="mt-3 flex gap-4">
                    {featured && (
                        <button
                            onClick={onOpenModal}
                            className="text-sm font-semibold text-brand hover:underline inline-flex items-center gap-1.5">
                            <IconDocument className="w-4 h-4" />
                            Ver estudo de caso
                        </button>
                    )}
                    {!featured && homepage && (
                        <a
                            href={homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-brand hover:underline">
                            Visualizar →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
