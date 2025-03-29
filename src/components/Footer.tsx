
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github 
} from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Integrations', href: '#' },
        { name: 'Changelog', href: '#' },
        { name: 'Documentation', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Community', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Github className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-background pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-bold text-white">S</span>
              </div>
              <span className="font-bold text-xl">Synergy</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              A highly intuitive, visually appealing, and feature-rich platform 
              that provides a seamless user experience for the modern digital landscape.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <Button 
                  key={i} 
                  variant="ghost" 
                  size="icon" 
                  asChild
                  className="h-9 w-9 rounded-full bg-muted/50 hover:bg-muted"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group, i) => (
            <div key={i} className="lg:col-span-2">
              <h4 className="font-medium mb-4 text-lg">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="lg:col-span-2">
            <h4 className="font-medium mb-4 text-lg">Subscribe</h4>
            <p className="text-foreground/70 mb-4">
              Stay updated with our latest features and releases.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>© {year} Synergy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
