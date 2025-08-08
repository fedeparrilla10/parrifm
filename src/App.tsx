import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AllTeams from "./pages/AllTeams";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<AllTeams />} />
          <Route path="/teams/:id" element={<Team />} />
          {/* <Route path="/random_team" element={<div>Random Team Page</div>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
