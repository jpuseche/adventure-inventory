import Inventory from './sections/Inventory.js';

function App() {
  let objects = [["Wooden Sword", "it's just a wooden Sword", "Weapon", "Juan", "$10"],["Wooden Shield", "it's just a wooden Shield", "Shield", "Juan", "$10"]];

  return (
    <Inventory objects={objects}/>
  );
}

export default App;
