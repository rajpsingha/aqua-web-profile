
const Skills = () => {
  // Define skill categories
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "TypeScript"]
    },
    {
      category: "Frontend Development",
      skills: ["React", "HTML", "CSS", "Vue.js", "Angular", "TailwindCSS"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "Django", "Flask", "Spring Boot"]
    },
    {
      category: "Other Technologies",
      skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="bg-portfolio-gray-light">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue">{category.category}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
