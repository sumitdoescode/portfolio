import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ProjectCard from "@/components/ProjectCard";
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
];

const page = () => {
    return (
        <section className="py-20 h-screen flex items-center justify-center">
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
                            <BreadcrumbPage>Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h2 className="text-4xl font-bold font-mono tracking-tight">Projects</h2>

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
