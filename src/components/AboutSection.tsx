import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const skills = {
    programming: ['Python','C', 'Java'],
    databases: ['MySQL', 'MongoDB'],
    interests: [ 'Web Development','Machine Learning', 'AI'],
    creative: ['Social Media Management', 'Content Creation'],
    soft: ['Leadership', 'Communication', 'Problem Solving', 'Creativity']
  };

  const achievements = [
    '🌊 Publicity Head for EXCEL 2025 Techno-Managerial Fest',
    '📜 Licensee for TEDxMEC 2026',
    '🎤 Speaker Head at TEDxMEC 2024',
    '✨ Curation Head of TEDxMEC 2025',
    '💼 Completed IBM SkillsBuild Internship Program'
  ];

  const socialAccounts = [
    {
      name: 'Model Engineering College Official Students Account',
      handle: '@mec.ac.in',
      url: 'https://www.instagram.com/mec.ac.in/profilecard/?igsh=MW55bHB4bjVkcXg5cQ=='
    },
    {
      name: 'TEDxMEC Official Account',
      handle: '@tedxmec',
      url: 'https://www.instagram.com/tedxmec?igsh=MWt1eWhzNmw4aTJoMw%3D%3D&utm_source=qr'
    },
    {
      name: 'CSE 2026 Batch A account',
      handle: '@csyea26',
      url: 'https://www.instagram.com/csyea26?igsh=NWd6MzYxOXdnMHkw&utm_source=qr'
    },
    {
      name: 'Personal Handle',
      handle: '@sahibbaaa',
      url: 'https://www.instagram.com/sahibbaaa?igsh=MXAxeTQyaDEwOHlyMw%3D%3D&utm_source=qr'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-ocean">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Science student with a deep love for technology, 
            beach adventures, and creating digital waves that make a difference. 🌊
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="float-animation wave-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-ocean flex items-center justify-center text-white font-bold text-xl mr-4">
                    SH
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sahiba Haroon</h3>
                    <p className="text-primary font-medium">👩‍💻 Full-Stack Developer | UI/UX Explorer</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <GraduationCap className="w-5 h-5 mr-3 text-primary" />
                    <span>B.Tech in Computer Science at Govt. Model Engineering College, KTU</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* My Journey */}
            <Card className="wave-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient-ocean">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My journey started as a medical aspirant who found herself enchanted by the world of engineering 
                  and coding. What began as curiosity has blossomed into a love for creating innovative 
                  digital solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I love making my own little projects - each one teaching me something new about technology 
                  and problem-solving. Currently pursuing my Computer Science degree, I'm constantly exploring 
                  new technologies and figuring out my way through them.
                </p>
              </CardContent>
            </Card>

            {/* Beach Lover */}
            <Card className="bg-gradient-to-br from-accent/10 to-orange-100/50 border-accent/20 wave-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-accent" />
                  <span className="text-gradient-sunset">Travel Enthusiast</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me dreaming about or exploring beautiful beaches 🏖️
                   I'm passionate about traveling, discovering new cultures, 
                  and meeting new people. There's something 
                  magical about the sound of waves and the feeling of sand between your toes that 
                  brings peace to my mind.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Skills & Achievements */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="wave-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-ocean">Skills & Expertise</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'React', 'HTML/CSS', 'Node.js'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      {['MongoDB', 'Supabase', 'MySQL'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Google Vision', 'TensorFlow', 'Machine Learning'].map((skill) => (
                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill) => (
                        <Badge key={skill} className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Creativity</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.creative.map((skill) => (
                        <Badge key={skill} className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((skill) => (
                        <Badge key={skill} className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="wave-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-primary" />
                  <span className="text-gradient-ocean">Key Achievements</span>
                </h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Social Media Management */}
            <Card className="wave-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-gradient-ocean">Social Media Management</span>
                </h3>
                <div className="space-y-2">
                  {socialAccounts.map((account, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                      <span className="text-sm font-medium">{account.name}</span>
                      {account.url ? (
                        <a
                          href={account.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {account.handle}
                        </a>
                      ) : (
                        <span className="text-sm text-primary">{account.handle}</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;