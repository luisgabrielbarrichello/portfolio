'use client';
import { useState } from 'react';
import projectsData from '../../data/projects.json';
import Button from '../common/Buttons/Button';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FeaturedProject from './FeaturedProject';
import IconChat from '@/app/assets/icons/icon-chat.svg';
import { getWhatsappLink } from '@/app/lib/whatsapp';

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

function Projects() {
    const [selectedProject, setSelectedProject] =
        useState<ProjectModalProps['project'] | null>(null);

    const featuredProject = projectsData[0];
    const secondaryProjects = projectsData.slice(1, 4);

    const openModal = (project: ProjectModalProps['project']) =>
        setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <section
                id="projects"
                className="py-24 md:py-36 bg-gray-50 dark:bg-dark-20">
                <div className="editorial-container">
                    <div className="max-w-xl">
                        <span className="eyebrow">Projetos</span>
                        <h2
                            id="title-section"
                            className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                            Trabalhos recentes
                        </h2>
                    </div>

                    <div className="mt-16">
                        <FeaturedProject
                            project={featuredProject}
                            onOpenModal={() => openModal(featuredProject)}
                        />
                    </div>

                    {secondaryProjects.length > 0 && (
                        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {secondaryProjects.map((project, index) => (
                                <div
                                    key={project.title}
                                    className={
                                        index === 0
                                            ? 'md:col-span-2'
                                            : 'md:col-span-1'
                                    }>
                                    <ProjectCard
                                        project={project}
                                        onOpenModal={() => openModal(project)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hairline pt-10">
                        <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                            Gostou do que viu?
                        </p>
                        <Button
                            target="target"
                            variant={'ghost'}
                            content="Quero um projeto assim"
                            altImage="icon chat"
                            IconComponent={IconChat}
                            pathLink={getWhatsappLink()}
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </>
    );
}

export default Projects;
