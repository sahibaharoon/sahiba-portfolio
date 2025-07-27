import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import sahiba from '@/assets/sahiba.jpeg';

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
  
  {/* Profile Image */}
  <Card className="wave-glow flex justify-center items-center p-6">
    <img 
      src={sahiba}
      alt="Sahiba Haroon" 
      className="w-full h-auto"></img>
  </Card>
            
          </div>

          {/* Contact Form */}
          <Card className="wave-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-ocean">Send a Message 💌</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="https://formsubmit.co/70199d14090f08e79934d3576a0287ba" method="POST"
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