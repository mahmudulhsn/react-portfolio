import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Somarven full-stack project - Group project",
    github: "https://github.com",
    demo: "https://mhhasib.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Breaking Bad Plain JavaScript group-project",
    github: "https://github.com",
    demo: "https://mhhasib.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Covid Data-Single page application-React-Redux",
    github: "https://github.com",
    demo: "https://mhhasib.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Recipe App- Built with Ruby & Ruby On Rails-Group project",
    github: "https://github.com",
    demo: "https://mhhasib.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Space Travelers Hub- React-Redux Group project",
    github: "https://github.com",
    demo: "https://mhhasib.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Awesome Books - displays, add books",
    github: "https://github.com",
    demo: "https://mhhasib.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
