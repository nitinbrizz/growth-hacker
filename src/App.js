import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Carrer from "./components/Carrers";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  // return <LandingPage />;
  // return <About />;
  // return <Blogs />;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/carrers" element={<Carrer />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
