import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 max-w-6xl mx-auto font-reddit-mono px-7 bg-background">
        <NavbarDesktop />
        <NavbarMobile />
      </nav>
    </>
  );
};

export default Navbar;
