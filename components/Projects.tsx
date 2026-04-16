import React from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
                <p className="text-muted-foreground mt-2 text-lg">Projects that I am most proud of</p>

                {/* project cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-6 md:gap-8 mt-10">
                    {/* each project card */}
                    {projects.map((project) => {
                        return <ProjectCard key={project.id} {...project} />;
                    })}
                </div>
            </Container>
        </section>
    );
};
export default Projects;
