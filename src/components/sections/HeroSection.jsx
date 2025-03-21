import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-dark to-secondary text-white pt-20 pb-16 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Jay Kumar Dohare</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              I love building websites and applications. I enjoy working with both the frontend and backend, creating user-friendly and efficient solutions.
            </p>
            <div className="flex space-x-4">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn border border-white hover:bg-white hover:text-dark">
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            {/* Placeholder for profile image */}
            <div className="bg-primary/20 rounded-full h-80 w-80 mx-auto flex items-center justify-center">
              <span className="text-lg">Jay Kumar Dohare</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;