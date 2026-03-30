import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="section-block contact-card">
        <p className="section-tag">Contact</p>
        <h1 className="section-title">Let’s connect</h1>
        <p className="section-text">
          I’m open to internships, trainee opportunities, junior roles, and
          collaborative projects in software, backend, web, and app-related work.
        </p>

        <div className="contact-grid">
          <a href="mailto:thapaswastika0@gmail.com" className="contact-item">
            <strong>Email</strong>
            <span>thapaswastika0@gmail.com</span>
          </a>

          <div className="contact-item">
            <strong>Phone</strong>
            <span>9864673379</span>
          </div>

          <a
            href="https://github.com/Swastika23-a"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <strong>GitHub</strong>
            <span>github.com/Swastika23-a</span>
          </a>

          <a
            href="https://www.linkedin.com/in/swastika-thapa-62595730b/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <strong>LinkedIn</strong>
            <span>swastika-thapa-62595730b</span>
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}