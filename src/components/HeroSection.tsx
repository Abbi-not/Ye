import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[400px] py-16 md:py-0 md:h-[50vh] bg-gradient-to-b from-primary/20 via-primary/10 to-background"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div className="relative w-full md:h-full flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 p-6 sm:p-8 md:p-12 max-w-7xl mx-auto">
        <img
          src={profileImg}
          alt="Abinet Argaw"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl flex-shrink-0"
        />

        <div className="flex-1 min-w-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Verified Developer
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight break-words">
            Abinet Argaw
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
            <p className="text-base sm:text-lg text-muted-foreground">
              Full-Stack Developer • 4 Projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              onClick={() => scrollToSection("#contact")}
            >
              Contact
            </Button>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="https://github.com/Abbi-not" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:abinetargaww@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
