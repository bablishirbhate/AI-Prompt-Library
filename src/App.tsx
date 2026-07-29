import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Prompts from "./pages/Prompts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/prompts" element={<Prompts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;