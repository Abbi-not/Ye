import { X, ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  albumArt: string;
  year: string;
  tracks: number;
  technologies: string[];
  demo?: string;
  github?: string;
  longDescription?: string;
  features?: string[];
}

interface ProjectDetailsProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetails({ project, isOpen, onClose }: ProjectDetailsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-card w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-lg border border-border">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 sm:p-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <img
              src={project.albumArt}
              alt={project.title}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0 shadow-md"
            />
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold text-foreground truncate">{project.title}</h1>
              <p className="text-sm sm:text-base text-muted-foreground">{project.year} • {project.tracks} features</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="flex-shrink-0">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">About this Project</h2>
            <p className="text-foreground leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">Key Features</h2>
              <div className="grid gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            <Card className="p-3 sm:p-4 text-center bg-card/50">
              <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-base sm:text-lg font-semibold text-foreground">{project.year}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Released</div>
            </Card>
            <Card className="p-3 sm:p-4 text-center bg-card/50">
              <Users className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-base sm:text-lg font-semibold text-foreground">{project.tracks}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Features</div>
            </Card>
            <Card className="p-3 sm:p-4 text-center bg-card/50">
              <div className="w-5 h-5 text-primary mx-auto mb-2 text-lg">⭐</div>
              <div className="text-base sm:text-lg font-semibold text-foreground">5.0</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Rating</div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {project.demo && (
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline" className="flex-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
