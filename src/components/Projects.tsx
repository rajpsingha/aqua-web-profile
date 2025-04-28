
import { Github } from 'lucide-react';

const Projects = () => {
  // Define projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product listings, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      githubLink: "https://github.com",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management App",
      description: "A task management application with React and Firebase. Users can create, edit, and delete tasks, set priorities, deadlines, and track progress.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      githubLink: "https://github.com",
      tags: ["React", "Firebase", "CSS", "JavaScript"]
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecast application using React and OpenWeather API. Users can search for locations and view current weather conditions and forecasts.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      githubLink: "https://github.com",
      tags: ["React", "API", "Tailwind CSS"]
    },
    {
      title: "Personal Finance Tracker",
      description: "A finance tracking application using Vue.js and Chart.js. Users can track expenses, income, and visualize their financial data through interactive charts.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      githubLink: "https://github.com",
      tags: ["Vue.js", "Chart.js", "Vuex", "Firebase"]
    }
  ];

  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-portfolio-gray-dark">{project.title}</h3>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:text-portfolio-blue-dark"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={22} />
                  </a>
                </div>
                
                <p className="text-portfolio-gray-medium mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-portfolio-gray-light text-portfolio-gray-dark px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
