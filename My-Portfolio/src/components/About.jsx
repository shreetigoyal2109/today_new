import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-primary-50 dark:bg-dark-900 py-20 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-dark-50 mb-12 font-mono">
            <span className="border-b-2 border-primary-200 dark:border-dark-700 pb-2">ABOUT</span>
          </h2>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-primary-700/80 dark:text-dark-200/80 font-mono leading-relaxed"
            >
              I’m an enthusiastic Computer Science undergraduate with hands-on internship experience in <span className="text-white font-medium">AI/ML, Java, and C/C++ development.</span> I’ve worked on real-time projects ranging from web platforms to intelligent healthcare systems, sharpening both my problem-solving and programming skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-primary-700/80 dark:text-dark-200/80 font-mono leading-relaxed"
            >
              With a strong foundation in <span className="text-white font-medium">C, C++, Python, and web technologies,</span> I aim to contribute to tech-driven solutions while continuously growing in dynamic environments. Passionate about learning, collaborating, and building tools that make a difference.

              <br /><br />
              <span className="text-white font-medium">Let’s connect and build something awesome together!</span>
              <br /><br />
            </motion.p>

        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;