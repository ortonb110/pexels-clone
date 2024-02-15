import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error, Home, License, Explore, HomeVideos } from "./Pages/index";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      {/* <NavBar searchBar={true} backgroundColor={'white'}/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="license" element={<License />} />
        <Route path="videos" element={<HomeVideos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
