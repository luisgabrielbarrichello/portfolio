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
        <div className="flex flex-col gap-8">
            <figure className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
                {image_url && (
                    <Image
                        src={image_url}
                        alt={`Imagem ilustrativa do projeto "${title}"`}
                        sizes="100vw"
                        className="object-cover"
                        fill
                        priority
                    />
                )}
            </figure>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                    <span className="eyebrow">Projeto principal</span>
                    <h3 className="mt-3 font-poppins font-bold text-3xl md:text-4xl text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
                        {case_study?.problem ?? description}
                    </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
                    {case_study && (
                        <Button
                            IconComponent={IconDocument}
                            altImage="Ver estudo de caso"
                            variant={'ghost'}
                            content="Ver estudo de caso"
                            onClick={onOpenModal}
                        />
                    )}
                    {homepage && (
                        <Button
                            target="target"
                            variant={'outline'}
                            content="Visualizar projeto"
                            IconComponent={IconLink}
                            altImage="Visualizar projeto"
                            pathLink={homepage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default FeaturedProject;
