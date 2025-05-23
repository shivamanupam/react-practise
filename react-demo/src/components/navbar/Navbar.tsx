import LoggedInUser from "../../pages/LoggedInUser/LoggedInUser";
import NavHeader from "./NavHeader";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavHeader />
          <LoggedInUser />
          <NavLinks />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
