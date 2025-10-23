import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Don't Be the Next Victim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join millions of users who protect their digital life with PhishGuard. 
            Start scanning suspicious links and emails today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)] text-lg px-8"
          >
            Start Protecting Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 text-lg px-8"
          >
            Learn More
          </Button>
        </div>

        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          <div>✓ No credit card required</div>
          <div>✓ Free basic protection</div>
          <div>✓ Instant setup</div>
          <div>✓ Cancel anytime</div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
