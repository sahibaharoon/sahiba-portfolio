import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';
import cutePandaAi from '@/assets/cute-panda-ai.png';
import ecommerceProject from '@/assets/ecommerce-project.png';
import mathgptProject from '@/assets/mathgpt-project.png';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'MathGPT',
      description: 'A web-based platform to solve handwritten math problems with step-by-step solutions using JavaScript, HTML, CSS, and React JS.',
      category: 'Full-Stack Development',
      image: mathgptProject,
      technologies: ['JavaScript', 'HTML', 'CSS', 'React JS'],
      features: [
        'Handwritten math problem recognition',
        'Step-by-step solution generation',
        'Interactive user interface',
        'Real-time problem solving'
      ],
      demoLink: 'https://mathgptproject.onrender.com/',
      codeLink: 'https://github.com/sahibaharoon/mathgpt-miniproject-s6'
    },
    {
      id: 2,
      title: 'Smart PDF Summarizer',
      description: 'An AI-based web application that allows users to upload long PDF documents and receive a summary along with key topics using Python, HuggingFace, StreamLit, and PyMuPDF.',
      category: 'AI/Machine Learning',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center',
      technologies: ['Python', 'HuggingFace', 'StreamLit', 'PyMuPDF'],
      features: [
        'PDF document processing',
        'AI-powered text summarization',
        'Key topic extraction',
        'Cloud deployment ready'
      ],
      demoLink: 'https://pdfsummarizer-sahiba.streamlit.app',
      codeLink: 'https://github.com/sahibaharoon/pdfsummarizer'
    },
    {
      id: 3,
      title: 'AI Chatbot for Student Assistance',
      description: 'A friendly AI chatbot web app that allows users to ask questions and receive structured, conversational responses using Python, Flask, Together AI API, HTML, CSS, JavaScript, and SQLite.',
      category: 'AI/Machine Learning',
      image: cutePandaAi,
      technologies: ['Python', 'Flask', 'Together AI API', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
      features: [
        'Natural language processing',
        'Conversational AI responses',
        'User session management',
        'Database integration'
      ],
      highlight: "Hi! I'm Karmig 🐼",
      demoLink: 'https://sahibas-chatbot.onrender.com',
      codeLink: 'https://github.com/sahibaharoon/sahibas-chatbot'
    },
    {
      id: 4,
      title: 'Hotel Management Website',
      description: 'A comprehensive hotel management system with user authentication and backend API development using JavaScript, React.js, Node.js, and MySQL.',
      category: 'Back-End Development',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center',
      technologies: ['JavaScript', 'React.js', 'Node.js', 'MySQL'],
      features: [
        'User authentication system',
        'Room booking management',
        'Backend API development',
        'Database management'
      ],
      codeLink: 'https://github.com/sahibaharoon/HOTEL-MANAGEMENT-DBMS'
    },
    {
      id: 5,
      title: 'E-Commerce Website',
      description: 'A simple, fully responsive e-commerce website built using HTML, CSS, and JavaScript. Users can browse products, add items to a cart, and generate a bill with a unique order ID — all using browser localStorage.',
      category: 'Front End Development',
      image: ecommerceProject,
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      features: [
        'Responsive design',
        'Shopping cart functionality',
        'Order management',
        'Local storage integration'
      ],
      demoLink: 'https://ecommerce-site-1-7ltp.onrender.com',
      codeLink: 'https://github.com/sahibaharoon/ecommerce-site'
    },
    {
      id: 6,
      title: 'WhatsApp Chat Analyzer',
      description: 'A web application built with HTML, CSS, and JavaScript that analyzes WhatsApp chat exports to provide insights and statistics about conversations.',
      category: 'Front End Development',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=300&fit=crop&crop=center',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Chat export processing',
        'Statistical analysis',
        'Visual data representation',
        'Interactive insights'
      ],
      demoLink: 'https://whatsapp-analyser-one.vercel.app',
      codeLink: 'https://github.com/sahibaharoon/whatsapp-analyser'
    }
  ];

  const categories = ['All', 'Full-Stack Development','Back-End Development', 'Front End Development', 'AI/Machine Learning'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-ocean">Favourite Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Dive into my digital ocean of projects! 🌊 Each one crafted with love.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'ocean' : 'float'}
                onClick={() => setActiveFilter(category)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 wave-glow overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                {project.highlight && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.highlight}
                  </div>
                )}
                
                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies in hover */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Action Buttons in hover */}
                    <div className="flex gap-3">
                      {project.codeLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-black"
                          onClick={() => window.open(project.codeLink, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="bg-primary hover:bg-primary/80"
                          onClick={() => window.open(project.demoLink, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to explore more of my projects? 🌊
          </p>
          <Button 
            variant="wave" 
            size="lg" 
            className="px-8 py-3"
            onClick={() => window.open('https://github.com/sahibaharoon', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;