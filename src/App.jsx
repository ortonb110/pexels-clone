import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error, Home, License, Explore } from "./Pages/index";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="license" element={<License />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
