import React from "react";
import Container from "./Container";
import Image from "next/image";
import project1Image from "@/public/true-feedback/1.png";
import project2Image from "@/public/true-feedback/2.png";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import jsImage from "@/public/icons/js.svg";
import nodeImage from "@/public/icons/node.svg";
import nextImage from "@/public/icons/next.svg";
import nextLightImage from "@/public/icons/next-light.svg";
import tailwindImage from "@/public/icons/tailwind.svg";
import mongodbImage from "@/public/icons/mongodb.svg";

const Projects = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground mt-2">Projects that I am most proud of</p>
        {/* <Separator orientation="horizontal" className="my-4" /> */}

        {/* project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Link href={"/projects/1"}>
            <div className="">
              <Image src={project1Image} alt="Project 1" width={700} height={700} className="rounded-lg hover:scale-105 transition-all duration-300" />
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold font-mono tracking-tight">True Feedback</h1>
                  <Link href={"https://github.com/sumitdoescode/true-feedback"} target="_blank" className="hover:bg-muted rounded-full p-2 transition-all duration-300">
                    <Github size={24} className="hover:text-primary transition-all duration-300" />
                  </Link>
                </div>
                <p className="text-muted-foreground mt-2">True Feedback is a platform for collecting feedback from users. It is built with React, Next.js, and Node.js.</p>

                {/* tech stack */}
                <div className="mt-4">
                  <AvatarGroup className="gap-3">
                    <Avatar>
                      <AvatarImage src={jsImage.src} alt="JavaScript" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src={nodeImage.src} alt="Node.js" />
                      <AvatarFallback>Node</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src={nextLightImage.src} alt="Next.js" />
                      <AvatarFallback>Next</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src={tailwindImage.src} alt="Tailwind CSS" />
                      <AvatarFallback>Tailwind</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src={mongodbImage.src} alt="MongoDB" />
                      <AvatarFallback>MongoDB</AvatarFallback>
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default Projects;
