import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ProjectCard from "./ProjectCard";

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
    {
        id: 2,
        name: "Chatify",
        image: "/projects/chatify/2.png",
        description: "Chatify is a real-time messaging application.",
        techStack: [
            {
                name: "JavaScript",
                icon: "/icons/js.svg",
            },
            {
                name: "Bun",
                icon: "/icons/bun.svg",
            },
            {
                name: "Express",
                icon: "/icons/express.svg",
            },
            {
                name: "MongoDB",
                icon: "/icons/mongodb.svg",
            },
            {
                name: "Next.js",
                icon: "/icons/next.svg",
            },
            {
                name: "Tailwind CSS",
                icon: "/icons/tailwind.svg",
            },
        ],
        githubLink: "https://github.com/sumitdoescode/chatify-backend",
        liveLink: "https://chatify.page/",
    },
    {
        id: 3,
        name: "YouTube Backend",
        image: "/projects/youtube-backend/1.jpg",
        description: "YouTube Backend is a backend for a YouTube clone.",
        techStack: [
            {
                name: "TypeScript",
                icon: "/icons/ts.svg",
            },
            {
                name: "Bun",
                icon: "/icons/bun.svg",
            },
            {
                name: "Hono",
                icon: "/icons/hono.svg",
            },
            {
                name: "MongoDB",
                icon: "/icons/mongodb.svg",
            },
            {
                name: "Cloudinary",
                icon: "/icons/cloudinary.svg",
            },
            {
                name: "AWS EC2",
                icon: "/icons/aws.svg",
            },
        ],
        githubLink: "https://github.com/sumitdoescode/youtube-backend",
        liveLink: "https://youtube-backend.sumitdoescode.me/",
    },
    {
        id: 4,
        name: "Strongly",
        image: "/projects/strongly/1.png",
        description: "Strongly is a gym attendance taking platform built for gym goers + gym owners to track attendance and progress.",
        techStack: [
            {
                name: "TypeScript",
                icon: "/icons/ts.svg",
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
            {
                name: "Vercel",
                icon: "/icons/vercel.svg",
            },
        ],
        githubLink: "https://github.com/sumitdoescode/strongly",
        liveLink: "https://strongly.sumitdoescode.me/",
    },
];

const Projects = () => {
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
                <p className="text-muted-foreground mt-2 text-lg">Projects that I am most proud of</p>
                {/* <Separator orientation="horizontal" className="my-4" /> */}

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
