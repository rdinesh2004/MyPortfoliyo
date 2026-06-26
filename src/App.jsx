// App.jsx

import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
function App() {

  return (

    <BrowserRouter>

      <div

        style={{

          minHeight: "100vh",

          width: "100%",

          overflow: "hidden",

          position: "relative",

          background:
            "linear-gradient(135deg,#edf5f9 0%,#dcecf5 45%,#ffffff 100%)"

        }}

      >
      
        <div

          style={{

            position: "relative",

            zIndex: 2

          }}

        >

          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </div>

      </div>

    </BrowserRouter>

  );

}

export default App;