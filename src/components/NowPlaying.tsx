import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, SkipBack, SkipForward, Heart, ExternalLink, Github } from "lucide-react";
import multiJobScraperImg from "@/assets/img_5893.webp";
import vinylboxdImg from "@/assets/lala.png";
import tnatImg from "@/assets/lapa.jpg";
import taskmanImg from "@/assets/pala.jpg";

interface NowPlayingProps {
  onProjectSelect?: (project: any) => void;
}

export function NowPlaying({ onProjectSelect }: NowPlayingProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Simple projects data for now playing
  const projects = [
    {
      title: "Multi Job Scraper",
      description: "A Flask-based job aggregator that scrapes remote job listings from multiple sources",
      albumArt: multiJobScraperImg,
      technologies: ["Python", "Flask", "BeautifulSoup", "Bootstrap"],
      letter: "M",
      id: 1,
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
      title: "Vinylboxd", 
      description: "A music discovery and rating platform inspired by Letterboxd",
      albumArt: vinylboxdImg,
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      letter: "V",
      id: 2,
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
      title: "TNAT - Student Study Platform",
      description: "A Habesha student study buddy platform with Supabase backend", 
      albumArt: tnatImg,
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      letter: "T",
      id: 3,
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
      title: "TaskMan",
      description: "Task management system with Node.js and PostgreSQL",
      albumArt: taskmanImg,
      technologies: ["Node.js", "PostgreSQL", "Express", "REST API"],
      letter: "T",
      id: 4,
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

  const currentProject = projects[currentProjectIndex];

  const handleNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prev) => prev === 0 ? projects.length - 1 : prev - 1);
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (onProjectSelect) {
      onProjectSelect(currentProject);
    }
  };

  const handleProjectClick = () => {
    if (onProjectSelect) {
      onProjectSelect(currentProject);
    }
  };

  return (
    <>
      <section id="home" className="relative px-6 py-16 bg-gradient-to-br from-background via-card to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-primary rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Abinet Argaw
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Building Fullstack Hits, One Track at a Time 🎵
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Music Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Current Track Info */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div 
                className="w-14 h-14 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={handleProjectClick}
              >
                <img src={currentProject.albumArt} alt={currentProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 cursor-pointer" onClick={handleProjectClick}>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground truncate hover:text-primary transition-colors">
                    {currentProject.title}
                  </h4>
                  <div className="flex items-center gap-1 text-primary">
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs">Now Playing</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {currentProject.description}
                </p>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary shrink-0">
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            {/* Player Controls */}
            <div className="flex flex-col items-center gap-2 px-8">
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-foreground w-8 h-8"
                  onClick={handlePrevious}
                >
                  <SkipBack className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  className="bg-primary hover:bg-primary/90 w-8 h-8 rounded-full"
                  onClick={handlePlay}
                >
                  <Play className="w-4 h-4 fill-current" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-foreground w-8 h-8"
                  onClick={handleNext}
                >
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>0:00</span>
                <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-primary transition-all duration-300"></div>
                </div>
                <span>3:42</span>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2 flex-1 justify-end">
              <div className="flex flex-wrap gap-1">
                {currentProject.technologies.slice(0, 3).map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}