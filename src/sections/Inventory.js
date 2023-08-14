import ToolRow from "../components/ToolRow"
import { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";

function Inventory() {
    // rows state
    const [tools, setTools] = useState([]);
    useEffect(() => {
        getTools();
    }, []);

    function getTools() {
        fetch("http://localhost:8000/tools", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setTools(data);
        });
    }

    function createTool() {
        let name = document.getElementById("name").value;
        let imageSrc = document.getElementById("imageSrc").value;
        let amount = document.getElementById("amount").value;
        let price = document.getElementById("price").value;
        let totalPrice = amount * price;

        fetch("http://localhost:8000/tools", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, imageSrc, amount, price, totalPrice}),
        })
        .then(response => {
            return response.text();
        })
        .then(() => {
            getTools();
        });
    }

    function deleteTool(id) {
        fetch(`http://localhost:8000/tools/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            return response.text();
        })
        .then(() => {
            getTools();
        });
    }
    
    return(
        <div className="flex flex-col max-w-screen-xl my-24 w-full rounded-xl p-10 bg-[#3D5656]">
            <div className="flex w-full">
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFDC72] to-[#f0c132] py-5">Inventory</h1>
            </div>
            <div className="bg-gradient-to-r from-[#FFDC72] to-[#f0c132] rounded-xl p-5">
                <span className="text-xl text-[#685313]">Input:</span>
                <div className="grid grid-cols-6 gap-4 text-[#353535] mt-2">
                    <input id="name" className="rounded-xl p-2" placeholder="Name"></input>
                    <input id="imageSrc" className="rounded-xl p-2" placeholder="Image Src"></input>
                    <input id="amount" className="rounded-xl p-2" placeholder="Amount"></input>
                    <input id="price" className="rounded-xl p-2" placeholder="Price"></input>
                    <div className="flex items-center">
                        <button className="flex justify-center bg-gradient-to-r from-[#68B984] to-[#599e71] hover:from-[#5ba374] hover:to-[#4d8861] py-2 px-4 text-[#2b4b35] rounded-lg" onClick={createTool} type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 text-2xl gap-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFDC72] to-[#f0c132] rounded-xl w-full mt-10">
                <span className="px-5">Name</span>
                <span className="px-5">Image</span>
                <span className="px-5">Amount</span>
                <span className="px-5">Price</span>
                <span className="px-5">Total Price</span>
            </div>
            {tools.map((tool) => (
                <ToolRow key={tool.id} id={tool.id} name={tool.name} imageSrc={tool.image_src} amount={tool.amount} price={tool.price} totalPrice={tool.total_price} deleteTool={deleteTool}/>
            ))}
        </div>
    );
}

export default Inventory;