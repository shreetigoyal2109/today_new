import { motion } from 'framer-motion';

const experiences = [
  {
    role: ' AI/ML Intern',
    company: ' Brudite Pvt. Ltd.',
    duration: 'June 2025 – Present',
    points: [
      'Developed and trained machine learning models for predictive analytics.',
      'Assisted in deploying AI-based solutions to improve product intelligence.',
    ],
  },
  {
    role: 'C/C++ Intern',
    company: 'Samyak IT Solution Pvt. Ltd.',
    duration: 'Aug 2024 – Jan 2025',
    points: [
      'Created efficient system-level programs using C/C++.',
      'Worked on memory management and data structure optimization in real-world applications.',
    ],
  },

  {
    role: 'JAVA Intern',
    company: 'Devyut Softech Pvt. Ltd.',
    duration: 'July 2024',
    points: [
      'Built Java applications applying OOP concepts and design patterns.',
      'Contributed to the development of web-based modules using Java frameworks.',
    ],
  },


];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-primary-50 dark:bg-dark-900 py-20 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-dark-50 mb-12 font-mono">
            <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-2">
              Work Experience
            </span>
          </h2>

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h3 className="text-lg font-bold text-primary-800 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-primary-700 dark:text-dark-300 font-semibold">
                  {exp.company}
                </p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400">{exp.duration}</p>
                <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
