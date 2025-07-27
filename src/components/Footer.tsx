import { Heart, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gradient-ocean">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#resume" className="block text-muted-foreground hover:text-primary transition-colors">
                Resume
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gradient-ocean">Connect With Me</h3>
            <div className="flex space-x-3">
              <Button 
                variant="float" 
                size="icon" 
                className="hover:scale-110 transition-transform"
                onClick={() => window.open('https://www.instagram.com/sahibbaaa?igsh=MXAxeTQyaDEwOHlyMw%3D%3D&utm_source=qr', '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                variant="float" 
                size="icon" 
                className="hover:scale-110 transition-transform"
                onClick={() => window.open('https://www.linkedin.com/in/sahibaharoon', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="float" 
                size="icon" 
                className="hover:scale-110 transition-transform"
                onClick={() => window.open('https://github.com/sahibaharoon', '_blank')}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button 
                variant="float" 
                size="icon" 
                className="hover:scale-110 transition-transform"
                onClick={() => window.open('mailto:sahibaharoon.mec@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              📧 sahibaharoon.mec@gmail.com<br />
              📱 +91 8078472275<br />
              📍 Kochi, Kerala, India 🏖️
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sahiba Haroon. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with ♥️ By Sahiba Haroon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;