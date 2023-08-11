import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from './sections/Inventory.js';
import DetailedObject from "./sections/DetailedObject.js";

function App() {
  return (
    <div className="bg-[#eefcf3] h-screen">
      <div className="flex justify-center text-white px-5 font-mono">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inventory/>}/>
            <Route path="/detailed-object" element={<DetailedObject/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
