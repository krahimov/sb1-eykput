import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-24">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Mortgage Process?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/80">
          Join thousands of satisfied customers who have simplified their mortgage
          applications with our AI platform.
        </p>
        <Button size="lg" variant="secondary" className="text-lg">
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}