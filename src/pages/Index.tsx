import Hero from "@/components/Hero";
import Scanner from "@/components/Scanner";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Scanner />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Index;
