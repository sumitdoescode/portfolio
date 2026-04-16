import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface IProjectCard {
    id: number;
    name: string;
    image: string;
    description: string;
    techStack: { name: string; icon: string }[];
    githubLink: string;
    liveLink: string;
}

const ProjectCard = ({ id, name, image, description, techStack, githubLink, liveLink }: IProjectCard) => {
    return (
        <div key={id}>
            <Link href={`/projects/${id}`}>
                <Image src={image} alt={name} width={700} height={700} className="rounded-lg hover:scale-105 transition-all duration-300" />
            </Link>
            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold font-mono tracking-tight">{name}</h1>
                    <div className="flex items-center gap-2">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block hover:bg-muted rounded-full p-2 transition-all duration-300">
                            <Github size={24} />
                        </a>
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-background bg-muted-foreground rounded-full p-2 block">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
                <p className="text-muted-foreground mt-2">{description}</p>

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
