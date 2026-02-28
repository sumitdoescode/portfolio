import React from "react";
import Container from "./Container";
import { Code2, Server, Globe, Palette } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 relative">
      {/* 🔥 very subtle orange gradient */}
      <div className="" />

      <Container>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground mt-2 text-lg">A quick introduction about me</p>

        {/* content */}
        <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8">
          <p className="text-foreground">
            I started with an interest in design, which led me to web development. After learning <span className="font-mono">HTML, CSS, JavaScript</span>, I got deeply into building clean and interactive UIs.
          </p>

          <p className="text-muted-foreground">
            To build complete applications, I learned backend using <span className="font-mono">Node.js, Express, MongoDB</span> and understood how the web works behind the scenes.
          </p>

          <p className="text-muted-foreground">
            Now I build full-stack apps with <span className="font-mono">React & Next.js</span>, focusing on performance and clean design.
          </p>
        </div>

        {/* visual row */}
        <div className="flex gap-2 sm:gap-4 mt-8 flex-wrap">
          <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
            <Palette size={16} />
            <span className="text-sm font-mono">Design</span>
          </div>

          <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
            <Code2 size={16} />
            <span className="text-sm font-mono">Frontend</span>
          </div>

          <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
            <Server size={16} />
            <span className="text-sm font-mono">Backend</span>
          </div>

          <div className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-md border border-white/5">
            <Globe size={16} />
            <span className="text-sm font-mono">Deployment</span>
          </div>
        </div>

        {/* stats */}
        <div className="mt-10 max-w-md relative rounded-xl p-px bg-linear-to-r from-orange-400/20 to-red-500/20">
          <div className="flex justify-between bg-muted/40 border border-white/5 rounded-xl p-5">
            <div>
              <p className="text-2xl font-semibold">5+</p>
              <p className="text-muted-foreground text-sm">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-semibold">10+</p>
              <p className="text-muted-foreground text-sm">Technologies</p>
            </div>

            <div>
              <p className="text-2xl font-semibold font-mono">2000+</p>
              <p className="text-muted-foreground text-sm">Learning Hours</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-10 max-w-md relative">
          <div className="absolute inset-0 rounded-xl bg-linear-to-r from-orange-500/5 via-pink-500/5 to-red-500/5 blur-xl" />

          <div className="relative flex justify-between bg-muted/40 border border-white/5 rounded-xl p-5">
            <div>
              <p className="text-2xl font-semibold">5+</p>
              <p className="text-muted-foreground text-sm">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-semibold">10+</p>
              <p className="text-muted-foreground text-sm">Technologies</p>
            </div>

            <div>
              <p className="text-2xl font-semibold font-mono">2000+</p>
              <p className="text-muted-foreground text-sm">Learning Hours</p>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default About;
