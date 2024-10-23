import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Mortgage Applications,
            <span className="text-primary"> Simplified by AI</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transform weeks of paperwork into minutes. Our AI-powered platform automates
            the entire mortgage application process, saving you time and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-background/60 backdrop-blur">
            <p className="text-4xl font-bold text-primary mb-2">85%</p>
            <p className="text-muted-foreground">Faster Processing</p>
          </Card>
          <Card className="p-6 text-center bg-background/60 backdrop-blur">
            <p className="text-4xl font-bold text-primary mb-2">60%</p>
            <p className="text-muted-foreground">Cost Reduction</p>
          </Card>
          <Card className="p-6 text-center bg-background/60 backdrop-blur">
            <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-muted-foreground">Accuracy Rate</p>
          </Card>
        </div>
      </div>
    </section>
  );
}