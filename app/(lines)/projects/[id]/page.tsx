import React from "react";
import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ProjectCarousel from "@/components/ProjectCarousel";
import { notFound } from "next/navigation";

interface IProject {
    id: number;
    name: string;
    images: string[];
    shortDescription: string;
    longDescription: React.ReactNode;
    techStack: { name: string; icon: string }[];
    githubLinks: { type: string; link: string }[];
    liveLink: string;
}
const projects: IProject[] = [
    {
        id: 1,
        name: "True Feedback",
        images: ["/projects/true-feedback/1.png", "/projects/true-feedback/2.png", "/projects/true-feedback/3.png", "/projects/true-feedback/4.png", "/projects/true-feedback/5.png"],
        shortDescription: "True Feedback is a platform where people can collect feedback from anonymous users.",
        longDescription: (
            <>
                <p>
                    Inspired by{" "}
                    <a href="https://www.youtube.com/@ChaiAurCode" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        <code>Chai Aur Code</code>
                    </a>{" "}
                    YouTube channel, I rebuilt this project with my own UI and tech stack.
                </p>

                <p>True Feedback is a platform where users can receive honest and anonymous feedback through a unique shareable link.</p>

                <p>Users can sign in with Google, share their profile link on platforms like WhatsApp or Instagram, and collect messages from anyone.</p>

                <p>It also gives full control to enable or disable messages and delete any unwanted feedback.</p>
            </>
        ),
        techStack: [
            { name: "JavaScript", icon: "/icons/js.svg" },
            { name: "Node.js", icon: "/icons/node.svg" },
            { name: "Next.js", icon: "/icons/next.svg" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
        ],
        githubLinks: [{ type: "frontend", link: "https://github.com/sumitdoescode/true-feedback" }],
        liveLink: "https://true-feedback.vercel.app/",
    },
    {
        id: 2,
        name: "Chatify",
        images: ["/projects/chatify/1.png", "/projects/chatify/2.png", "/projects/chatify/3.png", "/projects/chatify/4.png", "/projects/chatify/5.png"],
        shortDescription: "Chatify is a real-time messaging application.",
        longDescription: (
            <>
                <p>Chatify is a real-time messaging application where users can instantly send text messages and images to each other.</p>

                <p>
                    Real-time communication is implemented using <code>Socket.IO</code>, where WebSockets are configured from scratch to enable instant message delivery without requiring page refreshes.
                </p>

                <p>
                    Users can share images during conversations, which are stored using <code>Vercel Blob Storage</code> for reliable and scalable file handling.
                </p>

                <p>
                    The backend server is deployed on an <code>AWS EC2</code> instance to handle API requests and WebSocket connections, while the frontend is deployed on <code>Vercel</code> for fast global delivery.
                </p>

                <p>This architecture demonstrates building and deploying a full-stack real-time application using cloud infrastructure and modern web technologies.</p>
            </>
        ),
        techStack: [
            { name: "JavaScript", icon: "/icons/js.svg" },
            { name: "Bun", icon: "/icons/bun.svg" },
            { name: "Express", icon: "/icons/express.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
            { name: "Next.js", icon: "/icons/next.svg" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
        ],
        githubLinks: [
            { type: "frontend", link: "https://github.com/sumitdoescode/chatify-frontend" },
            { type: "backend", link: "https://github.com/sumitdoescode/chatify-backend" },
        ],
        liveLink: "https://chatify.page/",
    },
    {
        id: 3,
        name: "YouTube Backend",
        images: ["/projects/youtube-backend/1.jpg"],
        shortDescription: "YouTube Backend is a backend for a YouTube with tweets.",
        longDescription: (
            <>
                <p>A scalable YouTube-style backend built with Bun and Hono, designed to handle video content and user interactions efficiently.</p>

                <p>
                    The system uses <code>MongoDB</code> with <code>Mongoose</code> for data management, while media files are stored using <code>Cloudinary</code> and <code>Vercel Blob</code> for optimized storage and delivery.
                </p>

                <p>
                    Secure authentication is implemented using <code>Better Auth</code>, enabling session-based access control for protected routes.
                </p>

                <p>It includes core features like videos, playlists, tweets, comments, likes, subscriptions, and watch history, closely mimicking a real-world content platform.</p>

                <p>
                    Built around <strong>50+ production-grade APIs</strong>, covering complex real-world backend scenarios and scalable architecture patterns.
                </p>

                <p>Advanced querying with pagination, sorting, and filtering ensures efficient data retrieval across endpoints.</p>

                <p>
                    Input validation is handled using <code>Zod</code>, and global rate limiting improves API security and reliability.
                </p>

                <p>This project demonstrates a production-ready backend architecture for a modern content-driven platform.</p>
            </>
        ),
        techStack: [
            { name: "TypeScript", icon: "/icons/ts.svg" },
            { name: "Bun", icon: "/icons/bun.svg" },
            { name: "Hono", icon: "/icons/hono.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
            { name: "Cloudinary", icon: "/icons/cloudinary.svg" },
            { name: "AWS EC2", icon: "/icons/aws.svg" },
        ],
        githubLinks: [{ type: "backend", link: "https://github.com/sumitdoescode/youtube-backend" }],
        liveLink: "https://youtube-backend.sumitdoescode.me/",
    },
];

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
