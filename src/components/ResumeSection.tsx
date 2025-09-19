import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-ocean">Resume & Contact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my resume or reach out to collaborate, chat, or connect.
          </p>
        </div>

        {/* Side-by-side layout */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-start">
          
          {/* Let's Connect Card - LEFT */}
          <Card className="wave-glow w-full md:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-ocean">Let's Connect</CardTitle>
              <p className="text-muted-foreground">
                Say Helloo
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4">
                <a 
                  href="mailto:sahibaharoon.mec@gmail.com"
                  className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-primary mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">sahibaharoon.mec@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+918078472275"
                  className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <Phone className="w-6 h-6 text-primary mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+91 8078472275</div>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-secondary/50 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Kochi, Kerala, India</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-bold mb-4 text-gradient-ocean">Follow My Digital Platforms</h3>
                <div className="flex space-x-4">
                  <Button 
                    variant="float" 
                    size="icon" 
                    className="hover:scale-110 transition-transform"
                    onClick={() => window.open('https://www.instagram.com/sahibbaaa?igsh=MXAxeTQyaDEwOHlyMw%3D%3D&utm_source=qr', '_blank')}
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="float" 
                    size="icon" 
                    className="hover:scale-110 transition-transform"
                    onClick={() => window.open('https://www.linkedin.com/in/sahibaharoon', '_blank')}
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="float" 
                    size="icon" 
                    className="hover:scale-110 transition-transform"
                    onClick={() => window.open('https://github.com/sahibaharoon', '_blank')}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Card - RIGHT */}
          <Card className="wave-glow w-full md:w-1/2">
            <CardHeader>
              <CardTitle className="text-xl text-gradient-ocean">My Resume</CardTitle>
              <p className="text-muted-foreground">
                Download or view my resume
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="ocean" 
                className="w-full" 
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/file/d/1Jlh1jsYgFP-SLqyJMQXcsv98M47eqeKy/view?usp=sharing';
                  link.download = 'Sahiba_Haroon_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={() => window.open('https://drive.google.com/file/d/1Jlh1jsYgFP-SLqyJMQXcsv98M47eqeKy/view?usp=sharing', '_blank')}
              >
                <Eye className="w-5 h-5 mr-2" />
                View Online
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
