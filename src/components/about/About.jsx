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
              <small>5+ years working</small>
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
            I am Mahmudul Hasan Hasib, a full-stack web developer with
            real-world experience in <strong>Laravel</strong>,
            <strong> Express JS</strong>, <strong> React JS</strong>,
            <strong> Vue JS</strong>, <strong> Laravel Livewire</strong>,
            <strong> Alpine JS</strong>,<strong> Tailwind CSS</strong>,
            <strong> Bootstrap</strong>. As well as skilled in relational and
            non-relational databases, software design patterns. Also highly
            skilled in REST API and GraphQL. I love to share knowledge with
            others.
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
