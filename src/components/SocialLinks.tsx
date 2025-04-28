
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed left-4 bottom-0 z-40 hidden md:flex flex-col gap-4 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-portfolio-gray">
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub Profile"
      >
        <Github size={22} />
      </a>
      
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={22} />
      </a>
    </div>
  );
};

export default SocialLinks;
