import Inventory from './sections/Inventory.js';

let objects = [];

function App() {
  return (
    <section className="bg-[#FAEBE0] h-screen">
      <div className="flex justify-center text-white px-5 font-mono">
        <Inventory/>
      </div>
    </section>
  );
}

export default App;
