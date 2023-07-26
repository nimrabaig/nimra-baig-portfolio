import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./work.css";

const Work = () => {
  return (
    <div className="flex flex-col about">
      <div className="text-second-clr text-2xl font-semibold">
        Work Experience
      </div>
      <ul className="flex flex-col">
        {/* I */}
        <li>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="work">Junior Web Developer</div>
              <div className="flex gap-[5rem]">
                <div className="flex gap-2 items-center">
                  <div>
                    <HiOutlineOfficeBuilding className="icon" />
                  </div>
                  <span>Learning App</span>
                </div>
                <div className="country">Azerbaijan</div>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem] items-end">
              <div className="time">Full Time</div>
              <div>Sep 2021 - Dec 2021</div>
            </div>
          </div>
        </li>
        {/* II */}
        <li>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="work">Junior Web Developer</div>
              <div className="flex gap-[5rem]">
                <div className="flex gap-2 items-center">
                  <div>
                    <HiOutlineOfficeBuilding className="icon" />
                  </div>
                  <span>Learning App</span>
                </div>
                <div className="country">Azerbaijan</div>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem] items-end">
              <div className="time">Intership</div>
              <div>Sep 2021 - Dec 2021</div>
            </div>
          </div>
        </li>
        {/* III  */}
        <li>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="work">Junior Web Developer</div>
              <div className="flex gap-[5rem]">
                <div className="flex gap-2 items-center">
                  <div>
                    <HiOutlineOfficeBuilding className="icon" />
                  </div>
                  <span>Learning App</span>
                </div>
                <div className="country">Azerbaijan</div>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem] items-end">
              <div className="time">Intership</div>
              <div>Sep 2021 - Dec 2021</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Work;
