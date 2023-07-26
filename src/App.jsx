import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Tech from "./pages/Tech";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
