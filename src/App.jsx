import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
