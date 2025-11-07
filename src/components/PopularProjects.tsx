import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  albumArt: string;
  technologies: string[];
  github?: string;
}

interface PopularProjectsProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

export const PopularProjects = ({ projects, onProjectSelect }: PopularProjectsProps) => {
  return (
    <section className="px-8 md:px-12 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-6">Popular Projects</h2>
      
      <div className="space-y-2">
        {projects.slice(0, 5).map((project, index) => (
          <div
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] gap-4 items-center p-3 rounded-md hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <span className="text-muted-foreground w-6 text-center">{index + 1}</span>
            
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <img
                  src={project.albumArt}
                  alt={project.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                  <Play className="h-5 w-5 text-white fill-white" />
                </div>
              </div>
              
              <div className="min-w-0">
                <h3 className="font-medium text-foreground truncate group-hover:underline">
                  {project.title}
                </h3>
                <div className="flex gap-1 flex-wrap mt-1">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block text-sm text-muted-foreground">
              {project.description.substring(0, 50)}...
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
