import { FaX } from "react-icons/fa6";
import { NAV_LINK, navLinks } from "../../constants/navLinks";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LINKEDIN, PERSONAL_GITHUB } from "../../constants/socialLinks";
import { HashLink } from "react-router-hash-link";

const NavDrawer = ({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) => {
  return (
    <>
      <div
        className={`text-text-primary block min-[1150px]:hidden h-screen fixed inset-0 z-10 bg-background text-black transition-all duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-7 py-5 flex items-center justify-end">
          <button onClick={closeDrawer}>
            <FaX size={18} className="text-text-primary" />
          </button>
        </div>

        <div className="px-7 py-2">
          <ul className=" flex flex-col gap-10 text-nav-link">
            {navLinks.map((item: NAV_LINK, index) => {
              if (item.link.includes("#")) {
                return (
                  <li key={index} className="text-xl" onClick={closeDrawer}>
                    <HashLink
                      className="hover:text-nav-link-hover"
                      to={item.link}
                    >
                      {item.name}
                    </HashLink>
                  </li>
                );
              }

              return (
                <li key={index} className="text-xl">
                  <Link
                    className="hover:text-nav-link-hover"
                    to={item.link}
                    onClick={closeDrawer}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            <li>
              <div className="flex items-center gap-4 text-text-primary">
                <Link to={PERSONAL_GITHUB}>
                  <FaGithub size={21} />
                </Link>
                <Link to={LINKEDIN}>
                  <FaLinkedin size={21} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavDrawer;
