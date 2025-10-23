import { Shield, Zap, Lock, Eye, Brain, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description: "Advanced machine learning analyzes URLs, metadata, and message patterns to identify threats",
  },
  {
    icon: Zap,
    title: "Real-Time Protection",
    description: "Instant scanning before suspicious content reaches your inbox or browser",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Your privacy matters - all scans are encrypted and never stored",
  },
  {
    icon: Eye,
    title: "Hidden Danger Detection",
    description: "Uncovers disguised links, spoofed domains, and hidden redirects",
  },
  {
    icon: Shield,
    title: "Multi-Layer Defense",
    description: "Combines URL analysis, content scanning, and reputation checking",
  },
  {
    icon: Globe,
    title: "Global Threat Database",
    description: "Continuously updated with the latest phishing techniques worldwide",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Advanced Protection Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay one step ahead of cybercriminals with intelligent threat detection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
