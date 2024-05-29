import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <nav className="z-20 fixed top-0 left-0 right-0 w-full mx-auto font-reddit-mono  bg-background">
        <NavbarDesktop />
        <NavbarMobile />
      </nav>
    </>
  );
};

export default Navbar;
