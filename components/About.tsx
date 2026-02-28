import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        <p className="text-muted-foreground mt-2 text-lg">A quick introduction about me</p>

        {/* content */}
        <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8">
          <p className="text-foreground">
            I started with an interest in graphics and video editing, which eventually led me to web development. After learning <span className="font-mono">HTML, CSS, and JavaScript</span>, I developed a strong interest in UI and frontend
            development.
          </p>

          <p className="text-muted-foreground">
            As I progressed, I realized frontend alone wasn’t enough, so I started learning backend development using <span className="font-mono">Node.js, Express, and MongoDB</span>. This helped me understand how systems and the web work behind the
            scenes.
          </p>

          <p className="text-muted-foreground">
            I then moved to frameworks like <span className="font-mono">React and Next.js</span> to build full-stack applications, along with some knowledge of networking and deployment.
          </p>
        </div>

        {/* stats */}
        <div className="mt-10 max-w-md relative">
          {/* subtle gradient glow */}
          <div className="absolute inset-0 rounded-xl bg-linear-to-r from-orange-500/5 via-pink-500/5 to-red-500/5 blur-xl" />

          <div className="relative flex justify-between bg-muted/40 border border-white/5 rounded-xl p-5">
            <div>
              <p className="text-2xl font-semibold font-mono">10+</p>
              <p className="text-muted-foreground text-sm">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-semibold font-mono">12+</p>
              <p className="text-muted-foreground text-sm">Technologies</p>
            </div>

            <div>
              <p className="text-2xl font-semibold font-mono">2000+</p>
              <p className="text-muted-foreground text-sm">Learning Hours</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
