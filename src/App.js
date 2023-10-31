import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogs from "./components/Blog/Blogs";
import Projects from "./components/Project/Projects";
import Certifications from "./components/Certificate/Certifications";
import ScrollToTop from "./components/ScrollToTop";
import Youtube from "./components/Youtube";
import DisplayPlaylist from "./components/DisplayPlaylist";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/displayPlaylist" element={<DisplayPlaylist />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
