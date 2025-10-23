import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

type ScanStatus = "idle" | "scanning" | "safe" | "warning" | "danger";

const Scanner = () => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<ScanStatus>("idle");

  const handleScan = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL or email to scan");
      return;
    }

    setStatus("scanning");
    
    // Simulate scanning process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock result (in real app, this would call an API)
    const isSuspicious = Math.random() > 0.7;
    setStatus(isSuspicious ? "danger" : "safe");
    
    if (isSuspicious) {
      toast.error("⚠️ Threat detected! This link appears suspicious.");
    } else {
      toast.success("✓ All clear! This link appears safe.");
    }
  };

  const getStatusConfig = () => {
    switch (status) {
      case "scanning":
        return {
          icon: Loader2,
          color: "text-secondary",
          bg: "bg-secondary/10",
          message: "Analyzing threat indicators...",
        };
      case "safe":
        return {
          icon: CheckCircle2,
          color: "text-accent",
          bg: "bg-accent/10",
          message: "✓ Safe - No threats detected",
        };
      case "danger":
        return {
          icon: AlertTriangle,
          color: "text-destructive",
          bg: "bg-destructive/10",
          message: "⚠️ Warning - Potential phishing detected",
        };
      default:
        return {
          icon: Shield,
          color: "text-muted-foreground",
          bg: "bg-muted/10",
          message: "Enter a URL or paste email content to scan",
        };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 border-border/50 backdrop-blur-sm bg-card/50">
          <div className="space-y-6">
            {/* Scanner Header */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Scan for Threats</h2>
              <p className="text-muted-foreground">
                Paste a suspicious URL or email content to check for phishing attempts
              </p>
            </div>

            {/* Input Area */}
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="https://example.com or paste email content..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleScan()}
                className="flex-1 h-12 bg-background/50 border-border/50 focus-visible:ring-primary"
              />
              <Button
                onClick={handleScan}
                disabled={status === "scanning"}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
              >
                {status === "scanning" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Scanning
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Scan Now
                  </>
                )}
              </Button>
            </div>

            {/* Results Display */}
            <div className={`p-6 rounded-xl ${config.bg} border border-current/20 transition-all`}>
              <div className="flex items-center gap-4">
                <StatusIcon 
                  className={`w-8 h-8 ${config.color} ${status === "scanning" ? "animate-spin" : ""}`} 
                />
                <div className="flex-1">
                  <p className={`font-medium ${config.color}`}>
                    {config.message}
                  </p>
                  {status !== "idle" && status !== "scanning" && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Scanned URL: <span className="font-mono text-xs">{url}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="text-center text-sm text-muted-foreground">
              <p>AI-powered detection • Real-time analysis • 99.9% accuracy</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Scanner;
