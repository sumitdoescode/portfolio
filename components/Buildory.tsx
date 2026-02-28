import React from "react";
import Container from "./Container";
import { Rocket, Users, Briefcase } from "lucide-react";

const Buildory = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold">Buildory</h2>
        <p className="text-muted-foreground mt-2">A small solo web development agency I started out of curiosity.</p>

        <div className="mt-8 max-w-3xl relative">
          {/* 🔥 soft gradient like project card */}
          <div className="absolute inset-0 rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-red-500 opacity-5 blur-2xl" />

          <div className="relative border rounded-xl p-6 bg-background/80 backdrop-blur">
            {/* ✅ stats wrapper with subtle bg */}
            <div className="flex gap-6 bg-muted/40 rounded-lg p-4 border border-white/5">
              <div className="flex items-center gap-2">
                <Rocket className="text-orange-400" size={18} />
                <div>
                  <p className="text-xl font-semibold">1000+</p>
                  <p className="text-xs text-muted-foreground">Outreach</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="text-pink-400" size={18} />
                <div>
                  <p className="text-xl font-semibold">25+</p>
                  <p className="text-xs text-muted-foreground">Businesses</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Briefcase className="text-red-400" size={18} />
                <div>
                  <p className="text-xl font-semibold">3</p>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                </div>
              </div>
            </div>

            {/* description */}
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I reached out to many potential clients, interacted with businesses, and delivered websites for a few clients. Along the way, I learned tools like Figma, improved my design skills, and understood the importance of communication and
              selling.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Buildory;
