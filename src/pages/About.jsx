import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import realPic from "../assets/Untitled.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPhp,
} from "react-icons/fa";
import {
  SiDjango,
  SiPython,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

const skillIcons = [
  { icon: FaHtml5, className: "html" },
  { icon: FaCss3Alt, className: "css" },
  { icon: FaJs, className: "js" },
  { icon: SiPython, className: "python" },
  { icon: SiDjango, className: "django" },
  { icon: FaPhp, className: "php" },
  { icon: SiMysql, className: "mysql" },
  { icon: FaBootstrap, className: "bootstrap" },
  { icon: SiTailwindcss, className: "tailwind" },
  { icon: SiFirebase, className: "firebase" },
  { icon: FaGitAlt, className: "git" },
  { icon: FaGithub, className: "github" },
];

export default function About() {
  return (
    <PageWrapper>
      <section className="about-premium">
        <motion.div
          className="about-premium-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">About Me</p>

          <h1 className="about-premium-title">
            Focused on web development, frontend experiences, and practical
            software solutions.
          </h1>

          <p className="about-premium-text">
            I am an IT graduate with strong interest in web development and
            frontend development, along with hands-on experience in backend
            systems, authentication, and responsive applications.
          </p>

          <p className="about-premium-text">
            I enjoy building interfaces that look modern, feel smooth, and work
            reliably while also understanding the backend logic behind them.
          </p>

          <div className="about-focus-tags">
            <span>Web Development</span>
            <span>Frontend Development</span>
            <span>Responsive UI</span>
            <span>Backend Logic</span>
            <span>Authentication</span>
          </div>
        </motion.div>

        <motion.div
          className="about-premium-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-photo-shell">
            <div className="about-photo-glow"></div>
            <img src={realPic} alt="Swastika Thapa" className="about-photo-premium" />
          </div>
        </motion.div>
      </section>

      <section className="about-skills-section">
        <motion.div
          className="about-skills-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Skills</p>

          <div className="skills-logo-grid">
            {skillIcons.map(({ icon: Icon, className }, index) => (
              <motion.div
                key={index}
                className={`skill-logo-card ${className}`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="about-lower-cards">
        <motion.div
          className="about-lower-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>What I enjoy building</h3>
          <p>
            I enjoy creating web applications with clean layouts, responsive
            design, user-friendly interfaces, and backend functionality.
          </p>
        </motion.div>

        <motion.div
          className="about-lower-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <h3>What makes my work strong</h3>
          <p>
            I like combining frontend presentation with backend thinking, so the
            final product is attractive, practical, secure, and functional.
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
}