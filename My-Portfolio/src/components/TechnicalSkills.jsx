import { motion } from 'framer-motion';

const TechnicalSkills = () => {
  return (
    <section
      id="technicalskills"
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
              Technical Skills
            </span>
          </h2>

          <div className="space-y-10">
            {/* Linux System Administration */}
            <div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                Programming Languages
              </h3>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 font-mono text-sm">
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                Developer Tools
              </h3>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 font-mono text-sm">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>IDLE</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
