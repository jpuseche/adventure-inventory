import ToolRow from "../components/ToolRow"
import { useState, useEffect } from "react";

const apiUrl = process.env.API_URL;

console.log(apiUrl);

function Inventory() {
    // rows state
    const [tools, setTools] = useState([]);
    useEffect(() => {
        getTools();
    }, []);

    function emptyFields() {
        document.getElementById("name").value = "";
        document.getElementById("imageSrc").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("price").value = "";
    }

    function getTools() {
        fetch(`${apiUrl}/tools`, {
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

        fetch(`${apiUrl}/tools`, {
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
            emptyFields();
        });
    }

    function deleteTool(id) {
        fetch(`${apiUrl}/tools/${id}`, {
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
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center bg-[#212125] w-full px-5 py-24">
                <div className="flex items-center max-w-screen-xl p-10 w-full">
                    <div className="flex flex-col gap-4 text-white w-1/2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDC72] to-[#f0c132] text-xl text-[#685313]">Add a new Tool:</span>
                        <input id="name" className="bg-[#212125] border-b border-b-[#FFDC72] p-2" placeholder="Name"></input>
                        {/* <input id="imageSrc" className="bg-[#212125] border-b border-b-[#FFDC72] p-2" placeholder="Image Src"></input> */}
                        <input id="amount" className="bg-[#212125] border-b border-b-[#FFDC72] p-2" placeholder="Amount"></input>
                        <input id="price" className="bg-[#212125] border-b border-b-[#FFDC72] p-2" placeholder="Price"></input>
                        <button className="flex justify-center mt-6 text-2xl font-semibold bg-gradient-to-r from-[#FFDC72] to-[#f0c132] hover:scale-95 hover:transition py-2 px-4 text-[#685313] rounded-lg w-20" onClick={createTool} type="submit">
                            Add
                        </button>
                    </div>
                    <div className="w-1/2 ml-4">
                        <img src={`${process.env.PUBLIC_URL}/backpack-icon.png`}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-gradient-to-r from-[#FFDC72] to-[#f0c132] w-full">
                <div className="grid xl:grid-cols-4 gap-4 my-20 p-5 rounded">
                    {tools.map((tool) => (
                        <ToolRow key={tool.id} id={tool.id} name={tool.name} imageSrc={tool.image_src} amount={tool.amount} price={tool.price} totalPrice={tool.total_price} deleteTool={deleteTool}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Inventory;