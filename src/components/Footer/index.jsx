import Logo from "../Logo";
import CTA from "../CTA";
import "./index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center py-[2rem] down flex-wrap ">
          <Logo />
          <div className="flex justify-end items-center gap-[2.5rem] ">
            <span>+91 12345 09876</span>
            <span>info@example.com</span>
            <CTA />
          </div>
        </div>
        <div className="flex justify-between items-center py-[2rem] flex-wrap gap-[1rem]">
          <ul className="flex gap-5 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tech">Tech Stack</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="text-second-clr text-base font-normal leading-6">
            The project and construction belong to
            <span className="custom bg-clip-text leading-tight tracking-tighter">
              Khatai Huseynzade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
