import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Blogs from "./components/pages/Blog/Blogs";
import Projects from "./components/pages/Project/Projects";
import Certifications from "./components/pages/Certificate/Certifications";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import Youtube from "./components/pages/Youtube/Youtube";
import DisplayPlaylist from "./components/pages/Youtube/DisplayPlaylist";
import Testimonials from "./components/pages/Testimonials/Testimonials";
import LearnReactPage from "./components/pages/LearnReact/LearnReactPage";
import NotesPage from "./components/pages/Notes/NotesPage";
import LecturesPage from "./components/pages/Lectures/LecturesPage";

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
          <Route path="/questions" element={<LearnReactPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/lectures/:courseId/:lectureId?" element={<LecturesPage />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </Router>
    </div>
  );
}

export default App;
