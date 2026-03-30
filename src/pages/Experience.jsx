import PageWrapper from "../components/PageWrapper";

export default function Experience() {
  return (
    <PageWrapper>
      <section className="section-block">
        <p className="section-tag">Experience</p>
        <h1 className="section-title">Recent Roles</h1>

        <div className="timeline-list">
          <div className="timeline-card">
            <h3>Python Django Web Developer (Trainee)</h3>
            <span>Code ITS</span>
            <p>
              Worked on web applications, backend APIs, authentication systems,
              database-related tasks, and practical software features using
              Django and DRF.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Mobile App Development Intern</h3>
            <span>Rev & Ride</span>
            <p>
              Contributed to UI components, testing, debugging, and app flow
              improvements while working on mobile development tasks.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}