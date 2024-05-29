import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import NavDrawer from "./NavDrawer";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../ThemeWrapper";

const NavbarMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="lg:hidden flex justify-between items-center py-5 px-7 max-w-6xl">
        <div>
          <h1 className="text-2xl text-text-primary font-medium font-lexend">
            Logo
          </h1>
        </div>
        <div className="flex items-center gap-5">
          {theme === "light" ? (
            <MdDarkMode
              onClick={toggleTheme}
              size={21}
              className="cursor-pointer text-text-primary"
            />
          ) : (
            <MdLightMode
              onClick={toggleTheme}
              size={21}
              className="cursor-pointer text-text-primary"
            />
          )}
          <button onClick={handleOpenDrawer}>
            <RiMenu3Line size={20} className="text-text-primary" />
          </button>
        </div>
      </div>

      <NavDrawer closeDrawer={handleCloseDrawer} isOpen={isDrawerOpen} />
    </>
  );
};

export default NavbarMobile;
