import "./index.css";
import MeImg from "../../assets/images/Me.jpg";

const Hero = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-2 md:items-center mt-12 items-center justify-between">
          <div className="text-second-clr text-4xl font-bold leading-tight tracking-tighter ">
            Hi everyone, <br /> My name is <br />
            <span className="text-4xl bg-clip-text font-bold leading-tight tracking-tighter left__col">
              Khatai Huseynzade
            </span>
            <br /> I am Front-End Developer
          </div>
          <div className="right__col w-[23rem] h-[23rem] relative">
            <img
              src={MeImg}
              className="absolute bottom-[15px] right-[15px] rounded-full w-[21rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
