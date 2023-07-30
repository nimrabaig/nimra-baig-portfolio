import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import "./index.css";

const Socials = () => {
  return (
    <div className="flex gap-3 items-center icons sm:hidden">
      <a href="https://github.com/BilgeGates">
        <AiFillGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100091496015332">
        <BsFacebook />
      </a>
      <a href="https://twitter.com/DeveloperKhatai">
        <BsTwitter />
      </a>
    </div>
  );
};

export default Socials;
