import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../ThemeWrapper";
import { LINKEDIN, PERSONAL_GITHUB } from "../../constants/socialLinks";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/N.png";

const NavbarDesktop = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hidden lg:flex justify-between py-5 items-center max-w-6xl mx-auto px-7">
      <div>
        <Link to={`/`}>
          <h1 className="text-text-primary text-3xl font-lexend">
            <img height={40} width={40} src={logo} alt="Neel" />
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex text-nav-link font-medium items-center gap-4 text-lg">
          {navLinks.map(({ link, name }, index) => {
            if (link.includes("#")) {
              return (
                <li key={index}>
                  <HashLink
                    className="hover:text-nav-link-hover"
                    to={link}
                    smooth
                  >
                    {name}
                  </HashLink>
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className="hover:text-nav-link-hover" to={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 text-text-primary">
          <Link target="_blank" to={PERSONAL_GITHUB}>
            <FaGithub size={21} />
          </Link>
          <Link target="_blank" to={LINKEDIN}>
            <FaLinkedin size={21} />
          </Link>
        </div>

        <div className="text-text-primary flex items-center">
          {theme === "light" ? (
            <button>
              <MdDarkMode
                onClick={toggleTheme}
                size={21}
                className="cursor-pointer"
              />
            </button>
          ) : (
            <button>
              <MdLightMode
                onClick={toggleTheme}
                size={21}
                className="cursor-pointer"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
