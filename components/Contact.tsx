import React from "react";
import Container from "./Container";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 text-center relative">
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-red-500/5 blur-2xl pointer-events-none" />

      <Container>
        <h2 className="text-3xl font-bold">Let’s Build Something</h2>

        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Have an idea, project, or opportunity? Feel free to reach out — I’d love to connect and build something meaningful.</p>

        {/* buttons */}
        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-muted/40 border border-white/5 
            hover:bg-muted/60 transition-all duration-300"
          >
            <Mail size={16} />
            <span className="font-mono text-sm">Email</span>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-muted/40 border border-white/5 
            hover:bg-muted/60 transition-all duration-300"
          >
            <Github size={16} />
            <span className="font-mono text-sm">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-muted/40 border border-white/5 
            hover:bg-muted/60 transition-all duration-300"
          >
            <Linkedin size={16} />
            <span className="font-mono text-sm">LinkedIn</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
