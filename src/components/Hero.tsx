
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const features = [
    "24/7 AI health consultation",
    "Symptom analysis & tracking",
    "Medication reminders",
    "Secure health data storage"
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-block gradient-border px-3 py-1 text-sm font-medium bg-background border border-primary/20">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse-slow"></span>
                HIPAA Compliant Technology
              </span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight gradient-text">
            Your AI Healthcare <br/> Assistant
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Advanced AI-powered healthcare support at your fingertips.
            Personalized health insights, symptom analysis, and medical guidance.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button size="lg" className="button-glow">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              See Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground/70">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1.5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative mt-8 mb-12 w-full max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="glass-panel rounded-xl overflow-hidden shadow-xl">
            <div className="w-full aspect-[16/9] bg-muted/20 flex items-center justify-center">
              <div className="w-full max-w-3xl h-4/5 rounded-lg overflow-hidden relative glass-panel">
                <div className="p-4 border-b border-border/40 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                  </div>
                  <div className="h-6 w-64 bg-muted/20 rounded-md"></div>
                  <div className="w-6"></div>
                </div>
                <div className="grid grid-cols-5 h-[calc(100%-44px)]">
                  <div className="border-r border-border/40 p-3 space-y-3">
                    <div className="w-full h-6 bg-muted/20 rounded-md"></div>
                    <div className="w-3/4 h-6 bg-muted/20 rounded-md"></div>
                    <div className="w-5/6 h-6 bg-muted/20 rounded-md"></div>
                    <div className="w-2/3 h-6 bg-muted/20 rounded-md"></div>
                  </div>
                  <div className="col-span-4 p-3 grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-video rounded-md bg-muted/20 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-background dark:bg-card shadow-lg rounded-full px-6 py-3 flex items-center">
            <div className="flex space-x-3 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>5-Star Rating</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
