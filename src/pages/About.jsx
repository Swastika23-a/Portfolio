import PageWrapper from "../components/PageWrapper";
import realPic from "../assets/Untitled.jpg";

export default function About() {
  return (
    <PageWrapper>
      <section className="section-grid">
        <div className="section-card">
          <p className="section-tag">About Me</p>
          <h1 className="section-title">More than one role. I build full solutions.</h1>
          <p className="section-text">
            I am an IT graduate with interest and experience in software
            development, backend systems, authentication, responsive web
            applications, and practical project building.
          </p>
          <p className="section-text">
            I enjoy learning new tools, improving user experience, and creating
            digital solutions that are clean, useful, and reliable. I do not
            want to be limited to one title only — I’m interested in software,
            web, backend, and application-focused work.
          </p>
        </div>

        <div className="profile-card">
          <img src={realPic} alt="Swastika Thapa" className="about-photo" />
        </div>
      </section>
    </PageWrapper>
  );
}