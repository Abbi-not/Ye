import { useState } from "react";
import { ProjectDetails } from "@/components/ProjectDetails";
import { GenreProjects } from "@/components/GenreProjects";
import { HeroSection } from "@/components/HeroSection";
import { PopularProjects } from "@/components/PopularProjects";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import multiJobScraperImg from "@/assets/img_5893.webp";
import vinylboxdImg from "@/assets/pala.jpg";
import tnatImg from "@/assets/lapa.jpg";
import taskmanImg from "@/assets/lala.png";

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

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [view, setView] = useState<'home' | 'genre' | 'project'>('home');

  // Sample projects data
  const allProjects: Project[] = [
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

  const getProjectsByGenre = (genre: string): Project[] => {
    const genreProjectMap = {
      "Frontend Harmony": ["Vinylboxd", "TNAT - Student Study Platform"],
      "Backend Beats": ["Multi Job Scraper", "TaskMan"],
      "Full Stack Symphony": ["Vinylboxd", "TNAT - Student Study Platform", "TaskMan"],
      "AI & Data Experimental": ["Multi Job Scraper"],
      "Mobile Rhythms": [],
      "DevOps Flow": ["TaskMan", "Multi Job Scraper"]
    };

    const projectNames = genreProjectMap[genre as keyof typeof genreProjectMap] || [];
    return allProjects.filter(project => projectNames.includes(project.title));
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setView('genre');
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedProject(null);
    setSelectedGenre(null);
  };

  const renderContent = () => {
    switch (view) {
      case 'genre':
        return selectedGenre ? (
          <GenreProjects
            genre={selectedGenre}
            projects={getProjectsByGenre(selectedGenre)}
            onProjectSelect={handleProjectSelect}
            onBack={handleBackToHome}
          />
        ) : null;
      case 'project':
        return selectedProject ? (
          <ProjectDetails
            project={selectedProject}
            isOpen={true}
            onClose={handleBackToHome}
          />
        ) : null;
      default:
        return (
          <>
            <HeroSection />
            <PopularProjects 
              projects={allProjects} 
              onProjectSelect={handleProjectSelect} 
            />
            <ProjectShowcase 
              title="Featured Projects" 
              projects={allProjects}
              layout="horizontal"
              onProjectSelect={handleProjectSelect}
            />
            <ProjectShowcase 
              title="Full Stack Projects" 
              projects={allProjects.filter(p => ["Vinylboxd", "TNAT - Student Study Platform", "TaskMan"].includes(p.title))}
              layout="grid"
              onProjectSelect={handleProjectSelect}
            />
            <AboutSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {renderContent()}
    </div>
  );
};

export default Index;
