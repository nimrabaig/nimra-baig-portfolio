import { useState, useEffect } from "react";
import "./index.css";
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../db.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="w-[80%] mx-auto flex flex-col gap-[5rem]">
        <div className="flex flex-col gap-4">
          <div className="text-second-clr text-3xl font-semibold leading-6">
            Projects
          </div>
          <div className="text-first-clr text-lg font-normal leading-6">
            Here are some projects I've built so far
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-[2rem] ">
          {Object.keys(data).map((project) => (
            <div key={project} className="w-[21rem] h-[28rem] project">
              <img src={data[project].IMG} className="project__img" />
              <div className="p-[2rem] flex flex-col gap-3">
                <div className="text-black text-2xl leading-6">
                  {data[project].Name}
                </div>
                <div className="w-[17rem] text-first-clr text-sm  leading-6">
                  {data[project].Desc}
                </div>
                <div className="flex gap-2 w-[17rem]">
                  <div className="text-second-clr font-normal text-base leading-6">
                    Tech Stack:{" "}
                  </div>
                  <small className="text-second-clr font-light leading-6">
                    {data[project].Tech}
                  </small>
                </div>
                <div className="flex gap-[2rem] link ">
                  <div className="flex gap-2">
                    <div>
                      <AiOutlineLink className="w-[1.25rem] h-auto" />
                    </div>
                    <div>
                      <a
                        href={data[project].Live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <BsGithub className="w-[1.25rem] h-auto" />
                    </div>
                    <div>
                      <a
                        href={data[project].Code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
