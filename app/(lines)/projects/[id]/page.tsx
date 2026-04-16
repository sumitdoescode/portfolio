import React from "react";
import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/data/projects";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const project = projects.find((p) => p.id === Number(id));
    if (!project) {
        return (
            <section className="py-20 h-screen flex items-center justify-center">
                <Container>
                    <h2 className="text-4xl font-bold font-mono tracking-tight">Project Not Found</h2>
                    <p className="text-muted-foreground mt-2 text-lg">The project you are looking for does not exist.</p>
                    <Button className="mt-6" size="lg">
                        <Link href="/projects" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Go Back
                        </Link>
                    </Button>
                </Container>
            </section>
        );
    }

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
                            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{project?.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* carousel */}
                <ProjectCarousel images={project!.images} />

                {/* project details */}
                <div className="mt-12 max-w-3xl">
                    <h2 className="text-3xl font-bold font-mono tracking-tight">{project?.name}</h2>
                    <p className="text-muted-foreground mt-2 text-lg">{project?.shortDescription}</p>

                    {/* description */}
                    <div className="mt-6 space-y-4 text-lg leading-8">{project?.longDescription}</div>

                    {/* tech stack */}
                    <p className="text-sm text-muted-foreground mt-6">Tech Stack</p>
                    <AvatarGroup className="gap-4 mt-3">
                        {project?.techStack.map(({ name, icon }) => (
                            <Tooltip key={name}>
                                <TooltipTrigger>
                                    <Avatar className="size-10 border-2 border-background transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                                        <AvatarImage src={icon} alt={name} />
                                        <AvatarFallback>{name[0]}</AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </AvatarGroup>

                    {/* buttons */}
                    <div className="flex gap-3 mt-6 max-w-md">
                        {project?.githubLinks?.map(({ type, link }: { type: string; link: string }) => (
                            <Link href={link} target="_blank" className="w-full" key={type}>
                                <Button className="gap-2 w-full transition-all hover:scale-[1.02]">
                                    Github ({type})
                                    <Github size={20} />
                                </Button>
                            </Link>
                        ))}

                        {project?.liveLink && (
                            <Link href={project.liveLink} target="_blank" className="w-full">
                                <Button variant="secondary" className="gap-2 w-full transition-all hover:scale-[1.02]">
                                    Live
                                    <ExternalLink size={20} />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default page;
