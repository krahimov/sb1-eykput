import { Bot, Clock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/50" id="features">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Complete your mortgage application in minutes, not weeks. Our AI processes
              documentation instantly.
            </p>
          </Card>
          <Card className="p-6">
            <Bot className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms ensure accurate data extraction and
              validation.
            </p>
          </Card>
          <Card className="p-6">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bank-Grade Security</h3>
            <p className="text-muted-foreground">
              Your data is protected with enterprise-level encryption and security
              protocols.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}