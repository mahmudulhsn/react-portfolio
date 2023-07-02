import { BsLinkedin, BsGithub, BsYoutube, BsTwitter } from "react-icons/bs";

const HeadersSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="__blank">
        <BsGithub />
      </a>
      <a href="https://youtube.com" target="__blank">
        <BsYoutube />
      </a>
      <a href="https://twitter.com" target="__blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeadersSocials;
