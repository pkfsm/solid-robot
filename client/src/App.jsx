import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Batch from "./pages/Batch";
import Lecture from "./pages/Lecture";
import Nimda from "./pages/Nimda";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batch/:slug" element={<Batch />} />
        <Route path="/lecture/:id" element={<Lecture />} />
        <Route path="/nimda" element={<Nimda />} />
      </Routes>
    </BrowserRouter>
  );
}
