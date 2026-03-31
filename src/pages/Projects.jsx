import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    title: "Food Delivery System",
    desc: "Full-stack Django application with authentication, ordering flow, delivery workflow, and responsive design.",
    tech: "Django • DRF • JWT • HTML • CSS",
    link: "https://github.com/Swastika23-a",
  },
  {
    title: "Meal-Mate Android App",
    desc: "Kotlin mobile application with Firebase integration for meal and nutrition tracking.",
    tech: "Kotlin • Firebase • Android",
    link: "https://github.com/Swastika23-a",
  },
  {
    title: "Secure Login System",
    desc: "Authentication system built with PHP, MySQL, HTML, CSS, and JavaScript with secure sessions.",
    tech: "PHP • MySQL • JavaScript",
    link: "https://github.com/Swastika23-a",
  },
  {
    title: "Student Depression Data Analysis",
    desc: "Python project focused on analyzing public datasets and presenting insights visually.",
    tech: "Python • Data Analysis • Visualization",
    link: "https://github.com/Swastika23-a",
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <section className="section-block">
        <p className="section-tag">Projects</p>
        <h1 className="section-title">Selected Work</h1>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-box premium-project-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 4,
                rotateY: -4,
                scale: 1.02,
              }}
            >
              <div className="project-glow"></div>
              <div className="project-inner">
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span>{project.tech}</span>

                <div className="project-actions">
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}