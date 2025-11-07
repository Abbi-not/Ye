import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  albumArt: string;
  technologies: string[];
  github?: string;
}

interface ProjectShowcaseProps {
  title: string;
  projects: Project[];
  layout?: "horizontal" | "grid";
  onProjectSelect: (project: Project) => void;
}

export const ProjectShowcase = ({ 
  title, 
  projects, 
  layout = "horizontal",
  onProjectSelect 
}: ProjectShowcaseProps) => {
  return (
    <section className="px-8 md:px-12 py-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground hover:underline cursor-pointer">
          {title}
        </h2>
        <Button variant="link" className="text-sm text-muted-foreground hover:text-foreground">
          Show all
        </Button>
      </div>

      {layout === "horizontal" ? (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className="group min-w-[180px] md:min-w-[220px] bg-card/50 hover:bg-card transition-all cursor-pointer snap-start border-border/50 hover:border-border"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={project.albumArt}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-primary rounded-full p-3 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Play className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className="group bg-card/50 hover:bg-card transition-all cursor-pointer border-border/50 hover:border-border"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={project.albumArt}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-primary rounded-full p-3 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Play className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {project.description.substring(0, 30)}...
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};
