import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { NavBar } from "./components";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
