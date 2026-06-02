import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-b from-primary/20 via-primary/10 to-background">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      <div className="relative h-full flex flex-col md:flex-row items-end gap-8 p-8 md:p-12 max-w-7xl mx-auto">
        <img 
          src="/src/assets/profile.png" 
          alt="Abinet Argaw" 
          className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
        />
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Verified Developer
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
            Abinet Argaw
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <p className="text-lg text-muted-foreground">
              Full-Stack Developer • 4 Projects
            </p>
          </div>

          <div className="flex gap-3">
            <Button size="lg" className="rounded-full px-8">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Contact
            </Button>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="https://github.com/Abbi-not" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
