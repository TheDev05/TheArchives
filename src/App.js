// import Main from "../src/cmp/Main";
import Modal from "../src/cmp/Modal";
import Explore from "../src/cmp/SearchMovies";
import SecondPage from "../src/cmp/SecondPage";
import FirstPage from "../src/cmp/FirstPage";
import Footer from "../src/cmp/Footer";
import "animate.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Characters" element={<Modal />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
