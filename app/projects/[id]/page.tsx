import React from "react";
import Container from "@/components/Container";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
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
    githubLink: "https://github.com/sumitdoescode/true-feedback",
    liveLink: "https://true-feedback.vercel.app/",
  },
];

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  return (
    <section className="py-20">
      <Container>
        {/* carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {project?.images.map((image, imageId) => (
              <CarouselItem key={imageId}>
                <div className="relative w-full aspect-video">
                  <Image src={image} alt={`Screenshot ${imageId}`} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority={imageId === 0} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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
            <Link href={project!.githubLink} target="_blank" className="w-full">
              <Button className="gap-2 w-full transition-all hover:scale-[1.02]">
                Github
                <Github size={20} />
              </Button>
            </Link>
            <Link href={project!.liveLink} target="_blank" className="w-full">
              <Button variant="secondary" className="gap-2 w-full transition-all hover:scale-[1.02]">
                Live
                <ExternalLink size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
