import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home}>
          Home
        </Route>
      </Routes>
    </div>
  );
}

export default App;
