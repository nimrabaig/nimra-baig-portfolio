import HTMLIMG from "../../assets/images/HTML.png";
import CSSIMG from "../../assets/images/CSS.png";
import JSIMG from "../../assets/images/JS.png";
import BootstrapIMG from "../../assets/images/Bootstrap.png";
import TailwindIMG from "../../assets/images/Tailwind.png";
import SASSIMG from "../../assets/images/SASS.png";
import ReactIMG from "../../assets/images/React.png";
import ReduxIMG from "../../assets/images/Redux.png";
import GitIMG from "../../assets/images/Git.png";
import GitHubIMG from "../../assets/images/GitHub.png";
import VSCODEIMG from "../../assets/images/VSCODE.png";
import FigmaIMG from "../../assets/images/Figma.png";

const Skills = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-[2rem]">
        <div className="flex flex-col items-center gap-[1rem]">
          <div className="text-second-clr text-3xl font-semibold leading-tight">
            My Tech Stack
          </div>
          <div className="text-first-clr text-2xl font-normal leading-tight">
            Technologies I’ve been working with recently
          </div>
        </div>
        <div className="flex flex-wrap gap-[4.5rem] items-center">
          <img src={HTMLIMG} alt="HTML" />
          <img src={CSSIMG} alt="CSS" />
          <img src={BootstrapIMG} alt="Bootstrap" />
          <img src={JSIMG} alt="JavaScript" />
          <img src={ReactIMG} alt="ReactJS" />
          <img src={TailwindIMG} alt="Tailwind" />
          <img src={SASSIMG} alt="SASS" />
          <img src={ReduxIMG} alt="Redux" />
          <img src={GitIMG} alt="Git" />
          <img src={GitHubIMG} alt="GitHub" />
          <img src={VSCODEIMG} alt="Visual Studio Code" />
          <img className="w-[7.5rem]" src={FigmaIMG} alt="Figma" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
