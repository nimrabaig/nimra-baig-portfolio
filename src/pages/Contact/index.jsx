import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./index.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-between gap-10 flex-col ">
        <div className="text-second-clr text-4xl font-bold">
          For any questions please mail us:
        </div>
        <div className="text-4xl bg-clip-text font-bold email">
          example@gmail.com
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
