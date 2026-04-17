import Container from "./Container";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import HeroAvatar from "./HeroAvatar";

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
                <HeroAvatar />

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
                    <Link href="/projects">
                        <Button variant="default" size={"lg"} className={"cursor-pointer text-base px-4"}>
                            Dowload Resume
                            <Download />
                        </Button>
                    </Link>

                    <Link href="/projects">
                        <Button variant="secondary" size={"lg"} className={"cursor-pointer text-base px-4"}>
                            View Projects
                            <ExternalLink />
                        </Button>
                    </Link>
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
