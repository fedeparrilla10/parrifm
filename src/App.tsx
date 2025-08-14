import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AllTeams from "./pages/AllTeams";
import Team from "./pages/Team";
import Selector from "./pages/Selector";
import AISelector from "./pages/AISelector";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<AllTeams />} />
          <Route path="teams/:id" element={<Team />} />
          <Route path="selector" element={<Selector />} />
          <Route path="ai_selector" element={<AISelector />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
