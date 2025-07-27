import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent! 🌊",
      description: "Thank you for reaching out! I'll get back to you as soon as i can!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-ocean">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create something fun together!I'm always open to discussing new opportunities, 
            collaborations, or just having a chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="wave-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-ocean">Let's Connect</CardTitle>
                <p className="text-muted-foreground">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you! 🏖️
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
                      <div className="text-muted-foreground">Kochi, Kerala, India </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-bold mb-4 text-gradient-ocean">Follow My Digital Waves 🌊</h3>
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
          </div>

          {/* Contact Form */}
          <Card className="wave-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-ocean">Send a Message 💌</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
  action="https://formsubmit.co/sahibaharoon.mec@gmail.com"
  method="POST"
  className="space-y-6"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
      <Input
        id="name"
        name="name"
        type="text"
        required
        placeholder="Your name"
        className="focus:ring-primary focus:border-primary"
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
      <Input
        id="email"
        name="email"
        type="email"
        required
        placeholder="your.email@example.com"
        className="focus:ring-primary focus:border-primary"
      />
    </div>
  </div>

  <div className="space-y-2">
    <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
    <Input
      id="subject"
      name="subject"
      type="text"
      required
      placeholder="What's this about?"
      className="focus:ring-primary focus:border-primary"
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
    <Textarea
      id="message"
      name="message"
      required
      placeholder="Tell me about your project, idea, or just say hello! 🌊"
      rows={6}
      className="focus:ring-primary focus:border-primary resize-none"
    />
  </div>

  <Button 
    type="submit" 
    variant="wave" 
    size="lg" 
    className="w-full"
  >
    <Send className="w-5 h-5 mr-2" />
    Send Message 🌊
  </Button>
</form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;