import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  INSTAGRAM,
  LINKEDIN,
  PERSONAL_GITHUB,
} from "../../constants/socialLinks";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import logo from "../../assets/images/N.png";

const Footer = () => {
  const socialLinks = [
    {
      name: "github",
      link: PERSONAL_GITHUB,
      icon: <FaGithub size={22} className="text-text-primary" />,
    },
    {
      name: "linkedin",
      link: LINKEDIN,
      icon: <FaLinkedin size={22} className="text-text-primary" />,
    },
    {
      name: "insta",
      link: INSTAGRAM,
      icon: <FaInstagram size={22} className="text-text-primary" />,
    },
  ];

  return (
    <footer className="bg-card-bg body-font">
      <div className="max-w-6xl mx-auto px-5 py-8 flex items-center justify-between sm:flex-row flex-col gap-2">
        <div className="flex items-center gap-2">
          <HashLink
            smooth
            to={"/#"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            {/* <span className="ml-3 text-lg md:text-xl text-theme-primary">
              Neel Narwadkar
            </span> */}
            <img height={40} width={40} src={logo} alt="Neel" />
          </HashLink>
          <p className="text-sm text-text-primary sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2">
            © {new Date().getFullYear()} Neel Narwadkar —
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            return (
              <Link target="_blank" to={item.link} key={item.name}>
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
