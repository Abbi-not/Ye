import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="p-6 space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Welcome to my digital universe, where code meets creativity and innovation takes center stage.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer who discovered the magic of programming during my computer science studies. 
              What started as curiosity about how websites work evolved into a deep love for creating digital experiences that matter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, I've journeyed through various technologies, from crafting beautiful user interfaces with React 
              to building robust backend systems with Node.js. Each project has been a new adventure, teaching me not just 
              about code, but about solving real-world problems through technology.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              What Drives Me
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe technology should be accessible, beautiful, and meaningful. Whether it's a sleek e-commerce platform 
              or a collaborative task management tool, I strive to create solutions that not only work flawlessly but also 
              delight users with intuitive design and smooth performance.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              What I Excel At
            </h3>
            <div className="space-y-3">
              <div className="bg-card rounded-lg p-4 border border-border">
                <h4 className="font-medium text-foreground mb-2">Frontend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks. 
                  I specialize in turning design concepts into pixel-perfect, performant web applications.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <h4 className="font-medium text-foreground mb-2">Backend Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Building scalable server-side applications with Node.js, designing RESTful APIs, and implementing 
                  secure authentication systems with databases like MongoDB and PostgreSQL.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <h4 className="font-medium text-foreground mb-2">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Breaking down complex challenges into manageable solutions, optimizing performance, and ensuring 
                  code maintainability through clean architecture and best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Coffee className="h-5 w-5 text-primary" />
              <h4 className="font-medium text-foreground">Fun Fact</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or probably debugging something with way too much coffee! ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};