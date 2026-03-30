import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import ghibliPic from "../assets/image.png";

export default function Home() {
  return (
    <PageWrapper>
      <section className="hero-grid">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-pill">
            IT Graduate • Software Builder • Creative Problem Solver
          </div>

          <h1 className="hero-title">
            Hi, I’m <span>Swastika Thapa</span>
          </h1>

          <h2 className="hero-subtitle">
            Building modern digital experiences across web, backend, software,
            and application-focused projects.
          </h2>

          <p className="hero-text">
            I enjoy turning ideas into practical solutions. My work focuses on
            clean interfaces, secure systems, backend logic, and projects that
            solve real-world problems with strong design and functionality.
          </p>

          <div className="hero-actions">
            <a href="/Swastika_Thapa_CV.pdf" download className="btn btn-solid">
              Download CV
            </a>

            <Link to="/projects" className="btn btn-outline">
              View Projects
            </Link>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>4+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Roles</p>
            </div>
            <div className="stat-card">
              <h3>Multi</h3>
              <p>Web • Backend • App</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <div className="hero-image-wrap">
            <div className="hero-image-glow"></div>

            <motion.img
              src={ghibliPic}
              alt="Ghibli portrait"
              className="hero-image"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}