import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Data />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}