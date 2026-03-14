import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const tech = [
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "TypeScript", icon: "/icons/ts.svg" },
    { name: "Node.js", icon: "/icons/node.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/next.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Mongoose", icon: "/icons/mongoose.svg" },
    { name: "Bun", icon: "/icons/bun.svg" },
    { name: "Hono", icon: "/icons/hono.svg" },
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
];

const TechStack = () => {
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-3xl font-bold">Tech Stack</h2>
                <p className="text-muted-foreground mt-2 text-lg">Tools and technologies I work with</p>

                {/* grid */}
                <div className="mt-10 flex items-start gap-4 flex-wrap shrink-0">
                    {tech.map(({ name, icon }, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger className="transition-all duration-300 hover:scale-120">
                                <Image src={icon} alt={name} width={48} height={48} />
                            </TooltipTrigger>
                            <TooltipContent className="bg-background text-foreground">
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TechStack;
