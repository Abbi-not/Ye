import { Mail, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-12 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          📡 Tour Dates (Contact)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Email Contact */}
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground text-sm">Drop me a line</p>
              </div>
            </div>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="mailto:abinetargaww@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                abinetargaww@gmail.com
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </Button>
          </Card>

          {/* GitHub Contact */}
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">GitHub</h3>
                <p className="text-muted-foreground text-sm">Check out my code</p>
              </div>
            </div>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a 
                href="https://github.com/Abbi-not" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                @Abbi-not
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </Button>
          </Card>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Building Fullstack Hits, One Track at a Time 🎵
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Open to collaborations, full-time opportunities, and music discussions
          </p>
        </div>
      </div>
    </section>
  );
}