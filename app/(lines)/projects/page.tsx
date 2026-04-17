import React from "react";
import Container from "@/components/Container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const page = () => {
    return (
        <section className="py-20">
            <Container>
                {/* breadcrumb */}
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h2 className="mt-6 text-4xl font-bold font-mono tracking-tight">Projects</h2>

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

export default page;
