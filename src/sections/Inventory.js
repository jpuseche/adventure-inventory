import ObjectRow from "../components/ObjectRow"
import { useState } from "react";
import {v4 as uuid} from 'uuid';

function Inventory() {
    // rows state
    const [objects, setObjects] = useState([]);

    const addObject = () => {
        let object = {};
        object.id = uuid();
        object.name = document.getElementById("name").value;
        object.description = document.getElementById("description").value;
        object.type = document.getElementById("type").value;
        object.owner = document.getElementById("owner").value;
        object.price = document.getElementById("price").value;

        setObjects([...objects, object]);
    }
    
    return(
        <div className="flex flex-col max-w-screen-xl my-24 w-full rounded-xl p-10 bg-gradient-to-r from-[#90B77D] to-[#42855B]">
            <div className="flex w-full">
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFDC72] to-[#f0c132] py-5">Inventory</h1>
            </div>
            <div className="bg-gradient-to-r from-[#FFDC72] to-[#f0c132] rounded-xl p-5">
                <span className="text-xl text-[#685313]">Input:</span>
                <div className="grid grid-cols-6 gap-4 text-[#6b6b6b] mt-2">
                    <input id="name" className="rounded-xl p-2" placeholder="Name"></input>
                    <input id="description" className="rounded-xl p-2" placeholder="Description"></input>
                    <input id="type" className="rounded-xl p-2" placeholder="Type"></input>
                    <input id="owner" className="rounded-xl p-2" placeholder="Owner"></input>
                    <input id="price" className="rounded-xl p-2" placeholder="Price"></input>
                    <div className="flex items-center">
                        <button className="flex justify-center bg-gradient-to-r from-[#e9e9e9] to-[#d9d8d8] hover:from-[#d2d2d2] hover:to-[#c1c1c1] py-2 px-4 text-[#6b6b6b] rounded-lg" onClick={addObject} type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 text-2xl gap-4 text-[#f9d158] rounded-xl w-full mt-10">
                <span className="px-5">Name</span>
                <span className="px-5">Description</span>
                <span className="px-5">Type</span>
                <span className="px-5">Owner</span>
                <span className="px-5">Price</span>
            </div>
            {objects.map((object) => (
                <ObjectRow key={object.id} id={object.id} name={object.name} description={object.description} type={object.type} owner={object.owner} price={object.price}/>
            ))}
        </div>
    );
}

export default Inventory;