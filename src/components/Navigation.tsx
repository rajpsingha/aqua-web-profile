
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navigation background when scrolled
      setScrolled(window.scrollY > 20);

      // Determine which section is in view
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-3" : "py-6"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold text-portfolio-blue">JD</span>
        
        <ul className="hidden md:flex gap-8">
          {['home', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a 
                href={`#${section}`} 
                className={cn(
                  "text-lg font-medium capitalize transition-colors",
                  activeSection === section 
                    ? "text-portfolio-blue" 
                    : "text-portfolio-gray-medium hover:text-portfolio-blue"
                )}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        
        <button className="md:hidden text-portfolio-blue">
          <span className="sr-only">Open menu</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
