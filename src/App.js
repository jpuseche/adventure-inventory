import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from './sections/Inventory.js';
import DetailedObject from "./sections/DetailedObject.js";

function App() {
  return (
    <div className="flex flex-col items-center font-mono">
      <div className="flex w-full bg-[#212125] p-5">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFDC72] to-[#f0c132]">Adventure Inventory</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inventory/>}/>
          <Route path="/detailed-object" element={<DetailedObject/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
