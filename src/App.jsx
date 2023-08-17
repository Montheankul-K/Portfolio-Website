import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/project" Component={Project} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
