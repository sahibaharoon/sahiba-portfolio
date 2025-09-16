import { Button } from '@/components/ui/button';
import { ChevronDown, Waves, Heart } from 'lucide-react';
import sahibaAnimatedAvatar from '@/assets/sahiba-animated-avatar.png';
import oceanWaveBg from '@/assets/ocean-wave-bg.png';

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${oceanWaveBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 float-animation ocean-glow">
              <img 
                src={sahibaAnimatedAvatar} 
                alt="Sahiba Haroon" 
                className="w-full h-full object-cover animate-pulse hover:animate-bounce transition-all duration-300"
              />
            </div>
    
      
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient-ocean">Hi, I'm </span>
          <span className="text-gradient-sunset">Sahiba!</span>
          <span className="ml-3 text-4xl md:text-5xl">🌊</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
          <span className="font-semibold text-primary">Full-Stack Developer | UI/UX Explorer</span>
        </p>
        
        

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="ocean" 
            size="lg" 
            onClick={scrollToWork}
            className="text-lg px-8 py-3"
          >
            <Waves className="mr-2" />
            Dive Into My Work
          </Button>
          <Button 
            variant="sunset" 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-3"
          >
            <Heart className="mr-2" />
            Let's Connect
          </Button>
        </div>

       
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;