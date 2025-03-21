import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    'React', 'Next.js', 'JavaScript', 'TypeScript', 
    'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js',
    'MongoDB'
  ];
  
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            I'm a passionate Full Stack Developer dedicated to creating beautiful, functional websites
            and applications. With skills in both frontend and backend development, I bring a comprehensive
            approach to every project.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="mb-4 text-gray-700">
              Hi, I'm Jay Kumar Dohare, a Full Stack Developer who loves building websites and applications. 
              I enjoy working with both the frontend and backend, creating user-friendly and efficient solutions.
            </p>
            <p className="mb-4 text-gray-700">
              My approach combines clean code principles with user-centered design, ensuring
              that the end product is not only functional but also intuitive and enjoyable to use.
            </p>
            <p className="text-gray-700">
              My goal is to keep learning and improving my skills while building projects that solve real-world problems.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white shadow-sm rounded-full text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
