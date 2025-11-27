import "./about.css";
import ME from "../../assets/mhhasib_about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>100+ web application</small>
            </article>
          </div>

          <p>
            I am Mahmudul Hasan Hasib, a Senior Backend Engineer with 6+ years
            of experience building scalable systems across SaaS, healthcare
            technology, and affiliate marketing platforms. Specialized in
            architecting multi-tenant applications, real-time data processing
            systems, and high-performance APIs serving millions of users.
            Proficient in
            <strong> Laravel</strong>, <strong>NestJS</strong>,{" "}
            <strong>Python/FastAPI</strong>, <strong> Express.js</strong>,{" "}
            <strong>React.js</strong>, <strong>Next.js</strong>,
            <strong>Vue.js</strong>, <strong>Livewire</strong>, and{" "}
            <strong>Alpine.js</strong>. Expert in database design with{" "}
            <strong>PostgreSQL</strong>, <strong> MySQL</strong>,
            <strong> MongoDB</strong>, and <strong>Redis</strong>. Experienced
            in cloud infrastructure (<strong>AWS</strong>,{" "}
            <strong>Docker</strong>), REST APIs, GraphQL, and OAuth2/JWT
            authentication. Passionate about mentoring teams, establishing
            coding standards, and delivering zero-downtime releases. I love
            solving complex technical challenges and sharing knowledge with the
            developer community.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
