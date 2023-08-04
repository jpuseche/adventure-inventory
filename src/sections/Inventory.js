import Label from '../components/Label'
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';

// function buildLabelRow(labelRow) {
//     let labelElems = ["Name", "Description", "Type", "Owner", "Price"];

//     labelElems.forEach(elem => {
//         labelRow.push(Label(elem));
//     });
// }

// function buildInventory(inventory, labelRow, updatedObjRows) {
//     inventory.push(<div className={"grid grid-cols-5 gap-4 my-4 text-[#ffdc72]"}>{labelRow}</div>);

//     updatedObjRows.forEach(row => {
//         let objectRow = [];
//         row.forEach(elem => {
//             objectRow.push(<span>{elem}</span>);
//         });
//         inventory.push(<div className={"grid grid-cols-5 gap-4 my-2"}>{objectRow}</div>);
//     });
// }

function Inventory(props) {
    let labelElems = ["Name", "Description", "Type", "Owner", "Price"];

    // rows state
    const [objects, setObjects] = useState([]);

    const addObject = object => {
        let newObject = {name:"Wooden Sword", description:"it's just a wooden Sword", type:"Weapon", owner:"Juan", price:"$10"};
        setObjects([...objects, newObject])
    }
    
    // // label row
    // let labelRow = [];
    // buildLabelRow(labelRow);

    // // Object list (Inventory)
    // let inventory = [];
    // buildInventory(inventory, labelRow, updatedObjRows);
    
    return(
        <div className="flex flex-col max-w-screen-xl my-24 w-full rounded-lg p-10 bg-gradient-to-r from-[#90B77D] to-[#42855B]">
            <div className="flex w-full">
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFDC72] to-[#f0c132] py-5 w-1/2">Inventory</h1>
                <div className="flex items-center">
                    <button className="flex justify-center bg-[#f9d158] hover:bg-[#dcb02c] py-2 px-4 my-2 text-[#685313] rounded-lg" onClick={addObject}>
                        Add Object
                    </button>
                </div>
            </div>
            {objects.map((object) => (
                <div className={"grid grid-cols-5 gap-4 my-2 w-full"}>
                    <span>{object.name}</span>
                    <span>{object.description}</span>
                    <span>{object.type}</span>
                    <span>{object.owner}</span>
                    <span>{object.price}</span>
                </div>
            ))}
        </div>
    );
}

export default Inventory;