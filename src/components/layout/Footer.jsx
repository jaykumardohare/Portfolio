import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Jay Kumar Dohare</p>
            <p className="text-sm text-gray-400">© {year} All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/jaykumardohare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jaykumardohare/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;