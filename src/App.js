import Main from "../src/cmp/Main";
import Modal from "../src/cmp/Modal";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Barten" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
