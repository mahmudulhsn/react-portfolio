import { BsLinkedin, BsGithub, BsYoutube, BsTwitter } from "react-icons/bs";
import {
  FaTwitterSquare,
  FaYoutubeSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const HeadersSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mahmudulhsn" target="__blank">
        <FaLinkedin className="social_icons" />
      </a>
      <a href="https://github.com/mahmudulhsn" target="__blank">
        <FaGithubSquare className="social_icons" />
      </a>
      <a href="https://youtube.com/mhhasib" target="__blank">
        <FaYoutubeSquare className="social_icons" />
      </a>
      <a href="https://twitter.com/mahmudulhsn" target="__blank">
        <FaTwitterSquare className="social_icons" />
      </a>
    </div>
  );
};

export default HeadersSocials;
