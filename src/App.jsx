import { Routes, Route } from "react-router-dom";
import { Apply, Home } from "./pages";
import { NavBar } from "./components";

function App() {
  
  return (
    <>
      <div className="relative">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
