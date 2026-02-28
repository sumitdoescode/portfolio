import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
const projects = [
  {
    id: 1,
    name: "True Feedback",
    image: "/projects/true-feedback/1.png",
    description: "True Feedback is a platform where people can collect feedback from anonymous users.",
    techStack: [
      {
        name: "JavaScript",
        icon: "/icons/js.svg",
      },
      {
        name: "Node.js",
        icon: "/icons/node.svg",
      },
      {
        name: "Next.js",
        icon: "/icons/next.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
      },
    ],
    githubLink: "https://github.com/sumitdoescode/true-feedback",
    liveLink: "https://true-feedback.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>
        <p className="text-muted-foreground mt-2 text-lg">Projects that I am most proud of</p>
        <Separator orientation="horizontal" className="my-4" />

        {/* project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-6 md:gap-8 mt-14">
          {/* each project card */}
          {projects.map(({ id, name, image, description, techStack, githubLink, liveLink }) => {
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
                              <AvatarFallback>{name[0]}</AvatarFallback>
                            </Avatar>
                          </TooltipTrigger>
                          <TooltipContent className="bg-background text-foreground">
                            <p>{name}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </AvatarGroup>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Projects;
