import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Palette, 
  Brain,
  Server,
  Smartphone,
  Globe,
  Zap
} from "lucide-react";

interface Genre {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: string[];
  experience: string;
}

const genres: Genre[] = [
  {
    id: "frontend",
    name: "Frontend Harmony",
    description: "Creating beautiful, interactive user experiences",
    icon: Palette,
    color: "from-pink-500 to-violet-500",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3", "SASS"],
    experience: "3+ years"
  },
  {
    id: "backend",
    name: "Backend Beats", 
    description: "Building robust server-side architecture",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    experience: "2+ years"
  },
  {
    id: "fullstack",
    name: "Full Stack Symphony",
    description: "End-to-end application development",
    icon: Code,
    color: "from-green-500 to-emerald-500", 
    skills: ["React + Node.js", "TypeScript", "REST APIs", "GraphQL", "Authentication", "Deployment", "Testing"],
    experience: "2+ years"
  },
  {
    id: "ai",
    name: "AI & Data Experimental",
    description: "Machine learning and data analysis",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: ["Python", "TensorFlow", "Pandas", "NumPy", "Data Visualization", "Web Scraping", "OpenAI API"],
    experience: "1+ year"
  },
  {
    id: "mobile",
    name: "Mobile Rhythms",
    description: "Cross-platform mobile development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    skills: ["React Native", "Expo", "Flutter", "iOS", "Android", "Mobile UI/UX"],
    experience: "1+ year"
  },
  {
    id: "devops",
    name: "DevOps Flow",
    description: "Deployment and infrastructure management",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD", "Linux", "Nginx"],
    experience: "1+ year"
  }
];

interface GenreSkillsProps {
  onGenreSelect?: (genre: string) => void;
}

export function GenreSkills({ onGenreSelect }: GenreSkillsProps) {
  return (
    <section id="genres" className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">📀 Genres & Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical skills organized like music genres - each representing a different aspect of my development expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {genres.map((genre) => (
            <Card 
              key={genre.id} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => onGenreSelect && onGenreSelect(genre.name)}
            >
              {/* Genre Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${genre.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 p-6 h-full flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{genre.name}</h3>
                    <p className="text-sm opacity-90">{genre.description}</p>
                  </div>
                  <genre.icon className="w-8 h-8 opacity-80" />
                </div>
              </div>
              
              {/* Genre Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {genre.experience}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {genre.skills.length} skills
                  </span>
                </div>
                
                {/* Skills Grid */}
                <div className="space-y-3 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {genre.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                >
                  Explore {genre.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Collaborate on a New Track?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and learn new technologies. 
              Let's create something amazing together!
            </p>
            <Button size="lg" className="gap-2">
              <Globe className="w-4 h-4" />
              Start a Collaboration
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}