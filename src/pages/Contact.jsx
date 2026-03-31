import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="section-block contact-card">
        <p className="section-tag">Contact</p>
        <h1 className="section-title">Let’s connect</h1>
        <p className="section-text">
          Open to internships, trainee opportunities, junior roles, and collaborative projects.
        </p>

        <form
          action="https://formspree.io/f/xxxxabcd"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="6" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-solid">Send Message</button>
        </form>

        <div className="contact-grid">
          <div className="contact-item">
            <strong>Phone</strong>
            <span>9864673379</span>
          </div>

          <a href="mailto:thapaswastika0@gmail.com" className="contact-item">
            <strong>Email</strong>
            <span>thapaswastika0@gmail.com</span>
          </a>

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