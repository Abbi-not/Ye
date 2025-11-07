import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Github } from "lucide-react";
import { ProjectDetails } from "./ProjectDetails";
import multiJobScraperImg from "@/assets/multi-job-scraper.jpg";
import vinylboxdImg from "@/assets/vinylboxd.jpg";
import tnatImg from "@/assets/tnat-platform.jpg";
import taskmanImg from "@/assets/taskman.jpg";

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

const projects: Project[] = [
  {
    id: 1,
    title: "Multi Job Scraper",
    description: "A Flask-based job aggregator that scrapes remote job listings from multiple sources",
    albumArt: multiJobScraperImg,
    year: "2024",
    tracks: 7,
    technologies: ["Python", "Flask", "BeautifulSoup", "Bootstrap"],
    github: "https://github.com/Abbi-not/Multi-scraper",
    longDescription: "A comprehensive job scraping application that aggregates remote job listings from multiple sources including We Work Remotely, RemoteOK, Remotive, and TrulyRemote. Features balanced job distribution and a clean Bootstrap-powered UI.",
    features: [
      "Scrapes jobs from multiple remote job sites",
      "Balanced job distribution across sources",
      "REST API to fetch jobs",
      "Bootstrap frontend with responsive job cards",
      "Load more button for dynamic job fetching",
      "Filters duplicate job listings",
      "Clean and intuitive user interface",
      "Easy setup with virtual environment"
    ]
  },
  {
    id: 2,
    title: "Vinylboxd",
    description: "A music discovery and rating platform inspired by Letterboxd",
    albumArt: vinylboxdImg,
    year: "2024",
    tracks: 29,
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/naolloan/Vinylboxd",
    longDescription: "A social music platform where users can discover, rate, and review albums. Built with a focus on creating a community around music appreciation, similar to how Letterboxd works for movies.",
    features: [
      "Album and artist browsing",
      "Song management system",
      "User authentication and profiles",
      "Rating and review functionality",
      "Social feed for music discovery",
      "Collaborative development with team",
      "Backend API with Node.js",
      "Music database integration"
    ]
  },
  {
    id: 3,
    title: "TNAT - Student Study Platform",
    description: "A Habesha student study buddy platform with Supabase backend",
    albumArt: tnatImg,
    year: "2024",
    tracks: 29,
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Shadcn UI"],
    github: "https://github.com/Abbi-not/tnat",
    longDescription: "A comprehensive study platform designed for Habesha students to collaborate, share knowledge, and build a learning community. Features include post sharing, community discussions, user profiles, and subject-based organization.",
    features: [
      "User authentication and profiles",
      "Community posts and discussions",
      "Subject-based organization",
      "Post likes and replies system",
      "Real-time updates with Supabase",
      "Profile customization and access",
      "Modern UI with Shadcn components",
      "Database relationships and foreign keys"
    ]
  },
  {
    id: 4,
    title: "TaskMan",
    description: "Task management system with Node.js and PostgreSQL",
    albumArt: taskmanImg,
    year: "2024",
    tracks: 15,
    technologies: ["Node.js", "PostgreSQL", "Express", "REST API"],
    github: "https://github.com/Abbi-not/taskman",
    longDescription: "A robust task management system built with Node.js and PostgreSQL. Provides a solid backend infrastructure for managing tasks, projects, and team collaboration with a focus on data integrity and performance.",
    features: [
      "PostgreSQL database integration",
      "RESTful API design",
      "Task creation and management",
      "Project organization",
      "User assignment and tracking",
      "Backend authentication",
      "Efficient data queries",
      "Scalable architecture"
    ]
  }
];

export function AlbumGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handlePlayProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <section id="albums" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            💿 Albums (Projects)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group bg-card border-border hover:bg-card/80 transition-all duration-300 overflow-hidden">
                {/* Album Art */}
                <div className="relative aspect-square p-4">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                    <img src={project.albumArt} alt={project.title} className="w-full h-full object-cover" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        size="icon" 
                        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
                        onClick={() => handlePlayProject(project)}
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
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}