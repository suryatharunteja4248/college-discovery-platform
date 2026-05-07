import { Routes, Route } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import CollegeDetails from "./pages/CollegeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/compare" element={<Compare />} />

      <Route
        path="/college/:slug"
        element={<CollegeDetails />}
      />
    </Routes>
  );
}

export default App;