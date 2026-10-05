import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import MyStudent from "./pages/MyStudent";
import Projects from "./pages/Projects";


function App() {

  return (

    <BrowserRouter>

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }}
      >

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/skills"
            element={<Skill />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/mystudent"
            element={<MyStudent />}
          />

          {/* PROJECTS */}

          <Route
            path="/projects"
            element={<Projects />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}


export default App;