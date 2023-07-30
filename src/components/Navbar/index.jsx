import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import CTA from "../CTA";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="py-5">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center justify-between ">
          <Logo />
          <div className="flex gap-8 items-center">
            <ul className="flex gap-8 items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/tech">Tech</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <CTA />
            <div className="hidden">
              <CgMenuLeftAlt />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
