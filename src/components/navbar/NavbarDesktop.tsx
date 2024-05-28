import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../ThemeWrapper";
import { LINKEDIN, PERSONAL_GITHUB } from "../../constants/socialLinks";

const NavbarDesktop = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hidden lg:flex justify-between py-5 items-center">
      <div>
        <Link to={`/`}>
          <h1 className="text-text-primary text-3xl">Logo</h1>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex text-nav-link font-medium items-center gap-4 text-lg">
          {navLinks.map(({ link, name }, index) => {
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
          <Link to={PERSONAL_GITHUB}>
            <FaGithub size={21} />
          </Link>
          <Link to={LINKEDIN}>
            <FaLinkedin size={21} />
          </Link>
        </div>

        <div className="text-text-primary flex items-center">
          {theme === "light" ? (
            <MdDarkMode
              onClick={toggleTheme}
              size={21}
              className="cursor-pointer"
            />
          ) : (
            <MdLightMode
              onClick={toggleTheme}
              size={21}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
