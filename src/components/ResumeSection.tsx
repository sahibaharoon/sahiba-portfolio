import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-ocean">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download or view my complete resume to learn more about my background, experience, and qualifications.
          </p>
        </div>

        <div className="text-center">
          <Card className="wave-glow max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-gradient-ocean">My Resume</CardTitle>
              <p className="text-muted-foreground">
                Download or view my complete professional resume
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
  variant="ocean" 
  className="w-full" 
  size="lg"
  onClick={() => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1OS5jjjVubRbUdpUi5CesXjZ6gBRTrHVX';
    link.download = 'Sahiba_Haroon_Resume.pdf'; // Optional filename
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
                onClick={() => window.open('https://drive.google.com/file/d/1OS5jjjVubRbUdpUi5CesXjZ6gBRTrHVX/view?usp=sharing', '_blank')}
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