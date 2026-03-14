import React from "react";
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "@/components/ui/avatar";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const techSkills = [
    {
        name: "HTML",
    },
    {
        name: "CSS",
    },
    {
        name: "Tailwind CSS",
    },
    {
        name: "JavaScript",
    },
    {
        name: "React",
    },
    {
        name: "Next.js",
    },
    {
        name: "Node.js",
    },
    {
        name: "Express",
    },
    {
        name: "MongoDB",
    },
    {
        name: "Mongoose",
    },
    {
        name: "Figma",
    },
];

const Hero = () => {
    return (
        <section className="py-20">
            <Container>
                <Avatar className="size-44 relative">
                    <AvatarImage src="/main/avatar.jpg" alt="@sumit" />
                    <AvatarFallback className="text-2xl font-bold">SR</AvatarFallback>

                    {/* Green dot */}
                    <span className="absolute bottom-4 right-4 flex size-4">
                        {/* Ping animation */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

                        {/* Solid dot */}
                        <span className="relative inline-flex size-4 rounded-full bg-green-600 border-2 border-background"></span>
                    </span>
                </Avatar>

                {/* content */}
                <div className="mt-5">
                    <h1 className="text-5xl font-bold">Hi, I am Sumit</h1>
                    <h2 className="text-xl mt-2 font-semibold font-mono text-muted-foreground tracking-tight">A Full Stack Web Developer</h2>
                    <p className="text-lg mt-4 text-muted-foreground">I build websites, web apps, and digital solutions with ✨ stunning UI using React, Next.js, and Node.js.</p>
                </div>

                {/* tech skills */}
                <div className="flex gap-2 mt-4 flex-wrap">
                    {techSkills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                            <span className="font-mono">{skill.name}</span>
                        </Badge>
                    ))}
                </div>

                <div className="flex items-center gap-2 mt-8">
                    <Button variant="default" size={"lg"} className={"cursor-pointer text-base px-4"}>
                        Dowload Resume
                        <Download />
                    </Button>
                    <Button variant="secondary" size={"lg"} className={"cursor-pointer text-base px-4"}>
                        View Projects
                        <ExternalLink />
                    </Button>
                </div>

                {/* socials */}
                <div className="flex items-center gap-4 mt-8">
                    <Link href={"https://www.github.com/sumitdoescode"} target="_blank">
                        <Github size={30} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/sumit-raj-14808a3a8"} target="_blank">
                        <Linkedin size={30} />
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
