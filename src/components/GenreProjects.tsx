import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Github, ArrowLeft } from "lucide-react";

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

interface GenreProjectsProps {
  genre: string;
  projects: Project[];
  onProjectSelect: (project: Project) => void;
  onBack: () => void;
}

export function GenreProjects({ genre, projects, onProjectSelect, onBack }: GenreProjectsProps) {
  const getGenreInfo = (genreName: string) => {
    const genreMap = {
      "Hip Hop": { description: "Backend Development", color: "from-red-500 to-orange-500", icon: "🎤" },
      "Jazz": { description: "Frontend Development", color: "from-blue-500 to-purple-500", icon: "🎺" },
      "Electronic": { description: "DevOps & Cloud", color: "from-cyan-500 to-blue-500", icon: "🎧" },
      "Rock": { description: "Tools & Frameworks", color: "from-gray-600 to-gray-800", icon: "🎸" },
      "Experimental": { description: "AI & Data Analysis", color: "from-purple-500 to-pink-500", icon: "🎵" },
      "Classical": { description: "Database & Architecture", color: "from-yellow-500 to-red-500", icon: "🎻" }
    };
    return genreMap[genreName as keyof typeof genreMap] || genreMap["Jazz"];
  };

  const genreInfo = getGenreInfo(genre);

  return (
    <section id="genre-projects" className="px-4 sm:px-6 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-wrap">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${genreInfo.color} flex items-center justify-center text-xl sm:text-2xl flex-shrink-0`}>
              {genreInfo.icon}
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-4xl font-bold text-foreground break-words">
                {genre}
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground">
                {genreInfo.description} • {projects.length} projects
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group bg-card border-border hover:bg-card/80 transition-all duration-300 overflow-hidden">
              {/* Album Art */}
              <div className="relative aspect-square p-4">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={project.albumArt}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <Button 
                      size="icon" 
                      className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
                      onClick={() => onProjectSelect(project)}
                    >
                      <Play className="w-5 h-5 fill-current" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-4 pt-0">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>{project.year}</span>
                  <span>{project.tracks} tracks</span>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">{genreInfo.icon}</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No projects yet</h3>
            <p className="text-muted-foreground">
              Stay tuned for upcoming projects in {genre}!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
