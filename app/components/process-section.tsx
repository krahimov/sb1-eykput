import { Bot, DollarSign, FileCheck } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-24" id="how-it-works">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
                <p className="text-muted-foreground">
                  Simply upload your financial documents. Our AI will automatically
                  extract and verify all necessary information.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your application, cross-references data,
                  and ensures compliance with lending requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
                <p className="text-muted-foreground">
                  Receive instant feedback and approval status. No more waiting for
                  weeks to hear back from lenders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}