
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <div className="w-64 h-64 rounded-full border-4 border-portfolio-blue overflow-hidden mx-auto md:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                alt="Developer Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-8 animate-slide-in-right">
            <p className="text-portfolio-blue font-medium mb-2">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">John Doe</h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-gray-medium font-semibold mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-portfolio-gray-medium max-w-md mb-8">
              I build exceptional and accessible digital experiences for the web.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#projects" 
                className="bg-portfolio-blue hover:bg-portfolio-blue-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue-light hover:text-white hover:border-portfolio-blue-light px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
