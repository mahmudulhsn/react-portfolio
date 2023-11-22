import "./portfolio.css";
import IMG1 from "../../assets/somoy-tv-logo.jpg";
import IMG2 from "../../assets/foodqo.jpg";
import IMG3 from "../../assets/modi-fit.jpg";
import IMG4 from "../../assets/kalmegha.jpg";
import IMG5 from "../../assets/quickmartbd.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Somoy TV Online Portal",
    github: "#",
    demo: "https://www.somoynews.tv/",
    description:
      "This is an online portal of Somoy TV. I worked as a lead backend engineer in this project. Technologies: Exrpress JS, Graphql, Nuxt js.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Foodqo",
    github: "#",
    demo: "https://foodqo.com",
    description:
      "This is a POS management with full inventory management for a restaurant. I worked as a lead backend engineer in this project. Technologies: Laravel, Rest API, Nuxt js.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Modifit",
    github: "#",
    demo: "https://www.modi-fit.jp",
    description:
      "This is a yoga management with booking management. I worked as a lead fullstack engineer in this project. Technologies: Laravel, Livewire, Tailwind CSS, Alpine JS.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Kaalmegha",
    github: "#",
    demo: "https://kaalmegha.com",
    description:
      "This is a resort management with booking management. I worked as a lead fullstack engineer in this project. Technologies: Laravel, Livewire, Tailwind CSS, Alpine JS.",
  },
  {
    id: 5,
    image: IMG5,
    title: "Quick Mart BD",
    github: "#",
    demo: "https://quickmartbd.com",
    description:
      "This is an online eCommerce site. I worked as a lead fullstack engineer in this project. Technologies: Laravel, Livewire.",
  },
  {
    id: 6,
    image: IMG6,
    title: "Awesome Books - displays, add books",
    github: "https://github.com",
    demo: "https://mhhasib.com",
    description: "I worked as a lead backend in this project.",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo, description }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <div className="bottom">
                <span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </span>

                <span className="portfolio__item-cta">
                  <a href={github} className="btn" target="__blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Live Demo
                  </a>
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
