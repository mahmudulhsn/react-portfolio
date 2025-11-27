import "./portfolio.css";
import IMG1 from "../../assets/somoy-tv-logo.jpg";
import IMG2 from "../../assets/foodqo.jpg";
import IMG3 from "../../assets/modi-fit.jpg";
import IMG4 from "../../assets/kalmegha.jpg";
import IMG5 from "../../assets/quickmartbd.jpg";
import IMG6 from "../../assets/sscl-bd.png";
import IMG7 from "../../assets/repocket.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Somoy TV Online Portal",
    github: "#",
    demo: "https://www.somoynews.tv/",
    description:
      "A high-traffic digital journalism platform powering Somoy News with millions of daily visitors and live TV broadcasting capabilities. As Senior Backend Web Developer, I designed database schemas for both REST and GraphQL APIs, optimized system performance, and built the core infrastructure supporting real-time news delivery. Technologies: Express.js, GraphQL, Nuxt.js, Redis, MySQL.",
  },
  {
    id: 2,
    image: IMG2,
    title: "FoodQo",
    github: "#",
    demo: "https://foodqo.com",
    description:
      "A multi-tenant SaaS restaurant management platform with database-per-tenant architecture serving multiple clients. As Lead Backend Engineer, I architected the core system, implemented Netflix-style subscription models with integrated customer support, and developed complex analytics queries. Built comprehensive POS and inventory management features with real-time order processing. Technologies: Laravel, REST API, Nuxt.js, Redis, MySQL.",
  },
  {
    id: 3,
    image: IMG7,
    title: "Repocket",
    github: "#",
    demo: "https://repocket.com",
    description:
      "A comprehensive affiliate marketing platform connecting users with 200+ advertising partners. As Senior Backend Engineer, I architected the core offer management system, built robust postback webhook infrastructure, and developed sophisticated transaction processing workflows with fraud prevention mechanisms. Implemented offer progression tracking, EPC calculations, and real-time attribution features enabling reliable reporting across the platform. Technologies: Laravel, NestJS, PostgreSQL, MongoDB, Firebase, Docker, Kubernetes, REST API.",
  },
  {
    id: 4,
    image: IMG3,
    title: "Modi-Fit (Yoga Project)",
    github: "#",
    demo: "https://www.modi-fit.jp",
    description:
      "A comprehensive yoga studio management system with class scheduling, membership management, and booking capabilities. As Lead Full-Stack Engineer, I architected scalable database structures, optimized database performance by 60%, and built modern, interactive interfaces with real-time updates. Technologies: Laravel, Livewire, Tailwind CSS, Alpine.js, PostgreSQL.",
  },
  {
    id: 5,
    image: IMG4,
    title: "Kaalmegha Resort",
    github: "#",
    demo: "https://kaalmegha.com",
    description:
      "A resort management platform with comprehensive booking management, room inventory tracking, and guest services coordination. As Lead Full-Stack Engineer, I developed the complete booking workflow, payment integration, and guest management system. Technologies: Laravel, Livewire, Tailwind CSS, Alpine.js.",
  },
  {
    id: 6,
    image: IMG5,
    title: "Quick Mart BD",
    github: "#",
    demo: "https://quickmartbd.com",
    description:
      "A full-featured eCommerce platform with product catalog management, shopping cart, payment processing, and order fulfillment. As Lead Full-Stack Engineer, I built the complete storefront and admin panel with inventory management and customer order tracking. Technologies: Laravel, Livewire.",
  },
  {
    id: 7,
    image: IMG6,
    title: "SSCL BD",
    github: "#",
    demo: "https://ssclbd.com",
    description:
      "A professional company portfolio website showcasing services, team, and client work. Technologies: HTML, CSS, JavaScript.",
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
