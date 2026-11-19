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
    const [selectedProject, setSelectedProject] = useState<
        ProjectModalProps['project'] | null
    >(null);

    const featuredProject = projectsData[0];
    const secondaryProjects = projectsData.slice(1, 3);

    const openModal = (project: ProjectModalProps['project']) =>
        setSelectedProject(project);

    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <section
                id="projects"
                className="py-24 md:py-36 bg-offwhite dark:bg-dark-10 transition-colors duration-300">
                <div className="editorial-container">
                    {/* Section Header */}
                    <div className="max-w-xl">
                        <span className="eyebrow">Projetos</span>

                        <h2
                            id="title-section"
                            className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                            Trabalhos recentes
                        </h2>
                    </div>

                    {/* Featured Project */}
                    <div className="mt-12 md:mt-14">
                        <FeaturedProject
                            project={featuredProject}
                            onOpenModal={() => openModal(featuredProject)}
                        />
                    </div>

                    {/* Secondary Projects */}
                    {secondaryProjects.length > 0 && (
                        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            {secondaryProjects.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    project={project}
                                    onOpenModal={() => openModal(project)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <div className="mt-16 md:mt-20">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-20 border border-gray-200 dark:border-gray-800 transition-colors duration-300">
                            <div>
                                <h3 className="text-lg font-poppins font-bold text-gray-900 dark:text-white">
                                    Gostou do que viu?
                                </h3>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Vamos transformar sua ideia em um projeto
                                    digital.
                                </p>
                            </div>

                            <Button
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="ghost"
                                content="Quero um projeto assim"
                                altImage="Conversar pelo WhatsApp"
                                IconComponent={IconChat}
                                pathLink={getWhatsappLink()}
                            />
                        </div>
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
