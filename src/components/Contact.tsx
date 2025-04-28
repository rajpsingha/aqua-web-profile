
const Contact = () => {
  return (
    <section id="contact" className="bg-portfolio-gray-light">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-portfolio-gray-medium mb-6 text-center">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray-medium mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-portfolio-gray rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray-medium mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-portfolio-gray rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray-medium mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-2 border border-portfolio-gray rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray-medium mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-portfolio-gray rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-blue-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
