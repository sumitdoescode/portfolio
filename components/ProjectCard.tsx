import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { Project } from "@/data/projects";

const ProjectCard = ({ id, name, images, shortDescription, techStack, githubLinks, liveLink }: Project) => {
    const primaryGithubLink = githubLinks[0]?.link;

    return (
        <div key={id}>
            <Link href={`/projects/${id}`}>
                <Image src={images[0]} alt={name} width={700} height={700} className="rounded-lg hover:scale-105 transition-all duration-300" />
            </Link>
            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold font-mono tracking-tight">{name}</h1>
                    <div className="flex items-center gap-2">
                        {primaryGithubLink && (
                            <a href={primaryGithubLink} target="_blank" rel="noopener noreferrer" className="block hover:bg-muted rounded-full p-2 transition-all duration-300">
                                <Github size={24} />
                            </a>
                        )}
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-background bg-muted-foreground rounded-full p-2 block">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
                <p className="text-muted-foreground mt-2">{shortDescription}</p>

                {/* tech stack */}
                <AvatarGroup className="gap-3 group mt-4">
                    {techStack.map(({ icon, name }, index) => {
                        return (
                            <Tooltip key={index}>
                                <TooltipTrigger>
                                    <Avatar className="border-2 border-background transition-all duration-300 hover:scale-110">
                                        <AvatarImage src={icon} alt={name} />
                                        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </AvatarGroup>
            </div>
        </div>
    );
};

export default ProjectCard;
