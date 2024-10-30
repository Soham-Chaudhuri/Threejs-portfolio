import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SC</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-blue-500"
                : "text-blue-900 hover:text-blue-500 hover:bg-white"
            } px-2 py-1 rounded-md`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => 
            `${isActive ? 'text-blue-500' : 'text-blue-900 hover:text-blue-500 hover:bg-white'} px-2 py-1 rounded-md`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
