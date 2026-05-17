import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'technicalskills', label: 'TechnicalSkills' },
  { id: 'values', label: 'Values' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (window.scrollY < 100) {
        setActiveSection(null);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-b from-primary-100 to-transparent dark:from-dark-900 dark:to-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('hero');
            }}
            whileHover={{ scale: 1.05 }}
            className="text-primary-900 dark:text-dark-50 font-mono text-xl tracking-wider cursor-pointer"
          >
            SG
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, label }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(id);
                }}
                className={`relative text-primary-700/80 hover:text-primary-900 dark:text-dark-200/80 dark:hover:text-dark-50 font-mono text-sm uppercase tracking-widest ${
                  activeSection === id ? 'text-primary-900 dark:text-dark-50' : ''
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-px bg-primary-700 dark:bg-dark-200"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  animate={{ scaleX: activeSection === id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

    </motion.nav>
  );
};

export default Navbar;
