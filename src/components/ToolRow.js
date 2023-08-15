function ToolRow(props) {
    const toolId = props.id;
    return(
        <div id={toolId} className="flex flex-col gap-4 my-2 p-6 text-white bg-[#212125] rounded mt-4">
            <span className="font-semibold text-4xl">{props.name}</span>
            <span className="flex justify-center bg-white my-2 p-5 rounded"><img src={`${process.env.PUBLIC_URL}/sword.png`} width="250"/></span>
            <span className="text-lg">{`Amount: ${props.amount}`}</span>
            <span className="text-lg">{`Unit Price: $${props.price}`}</span>
            <span className="text-lg">{`Total Price: $${props.totalPrice}`}</span>
            <span className="flex justify-end">
                <button onClick={() => props.deleteTool(toolId)} ><img src={`${process.env.PUBLIC_URL}/trash-solid.svg`} width="25" height="25"/></button>
            </span>
        </div>
    );
}

export default ToolRow