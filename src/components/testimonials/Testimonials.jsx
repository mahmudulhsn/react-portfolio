import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonials = [
  {
    avatar: AVATAR1,
    name: "Shahier Nashaat",
    review:
      "M H Hasib is one of the best teammates I have ever worked with, she is a very good listener, a fast learner provides help to anyone in the team if needed, and is very committed to the responsibilities that she has.",
  },
  {
    avatar: AVATAR2,
    name: "Chimwewme Sinyinza",
    review:
      "I had the chance to work with M H Hasib on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
  },
  {
    avatar: AVATAR3,
    name: "Chimwewme Sinyinza",
    review:
      "I had the chance to work with M H Hasib on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
  },
  {
    avatar: AVATAR4,
    name: "Chimwewme Sinyinza",
    review:
      "I had the chance to work with M H Hasib on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
