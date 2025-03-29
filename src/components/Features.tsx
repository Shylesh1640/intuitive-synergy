
import { 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Clock, 
  Cloud, 
  Bot 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
      title: "Secure Authentication",
      description: "Multi-factor authentication and OAuth integration provides top-tier security for all user accounts."
    },
    {
      icon: <Bot className="h-6 w-6 text-purple-500" />,
      title: "AI Integration",
      description: "Smart recommendation engine and chatbot for a personalized user experience that learns and adapts."
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "Real-Time Updates",
      description: "Instant notifications and live updates ensure you never miss important information."
    },
    {
      icon: <Cloud className="h-6 w-6 text-sky-500" />,
      title: "Cloud Integration",
      description: "Seamlessly sync and access your data across all devices with robust cloud infrastructure."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-emerald-500" />,
      title: "Offline Mode",
      description: "Continue working even with limited connectivity with our robust offline capabilities."
    },
    {
      icon: <Clock className="h-6 w-6 text-rose-500" />,
      title: "Dark Mode",
      description: "Reduce eye strain and save battery with beautiful dark mode interface that adjusts automatically."
    },
  ];

  return (
    <section 
      id="features" 
      className="py-20 px-4 relative bg-muted/30"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Powerful Features for Modern Users
          </h2>
          <p className="text-lg text-foreground/80">
            Our platform combines cutting-edge technology with intuitive design to deliver 
            a seamless experience that meets all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg transition-all hover:translate-y-[-4px] hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 mb-4">{feature.description}</p>
              <Button variant="link" className="p-0 h-auto font-medium text-primary">
                Learn more
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="rounded-full">
            View All Features
          </Button>
        </div>
      </div>
    </section>
  );
}
