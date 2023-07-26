import Work from "./Work/Work";

const About = () => {
  return (
    <section>
      <div className="flex flex-col gap-[2rem] w-[80%] mx-auto">
        <div className="flex flex-col gap-[1rem]">
          <div className="text-second-clr text-2xl font-semibold">About Me</div>
          <div className="text-first-clr font-medium w-[44rem]">
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </div>
        </div>
        <Work />
      </div>
    </section>
  );
};

export default About;
