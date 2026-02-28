import React from "react";
import Container from "./Container";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="py-20 text-center relative">
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-500/5 via-pink-500/5 to-red-500/5 blur-2xl pointer-events-none" />

      <Container>
        <h2 className="text-3xl font-bold">Let’s Build Something</h2>

        <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-lg">Have an idea, project, or opportunity? Feel free to reach out — I’d love to connect and build something meaningful.</p>

        {/* buttons */}
        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <Link href="mailto:sumit.does.code@gmail.com">
            <Button variant="default" size="lg">
              <Mail size={16} />
              <span className="font-mono text-sm">Email</span>
            </Button>
          </Link>

          <Link href="https://github.com/sumitdoescode" target="_blank">
            <Button variant="outline" size="lg">
              <Github size={16} />
              <span className="font-mono text-sm">GitHub</span>
            </Button>
          </Link>

          <Link href="https://www.linkedin.com/in/sumit-raj-14808a3a8/" target="_blank">
            <Button variant="secondary" size="lg">
              <Linkedin size={16} />
              <span className="font-mono text-sm">LinkedIn</span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
