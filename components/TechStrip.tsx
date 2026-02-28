import React from "react";
import { Code2, Database, Server, Globe } from "lucide-react";

const techStack = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind CSS", icon: Code2 },
];

const TechStrip = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {techStack.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/40 border border-white/5 
          transition-all duration-300 hover:bg-muted/60 hover:scale-105"
        >
          <Icon size={14} className="text-muted-foreground" />
          <span className="text-sm font-mono">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStrip;
