function ToolRow(props) {
    const toolId = props.id;
    return(
        <div className="border-b-4 border-b-[rgb(249,209,88)] rounded-xl mt-4">
            <div id={toolId} className="grid grid-cols-6 gap-4 my-2 w-full">
                <span className="px-5">{props.name}</span>
                <span className="px-5">{props.imageSrc}</span>
                <span className="px-5">{props.amount}</span>
                <span className="px-5">{`$${props.price}`}</span>
                <span className="px-5">{`$${props.totalPrice}`}</span>
                <span className="flex">
                    <button onClick={() => props.deleteTool(toolId)} ><img src={`${process.env.PUBLIC_URL}/trash-solid.svg`} width="25" height="25"/></button>
                </span>
            </div>
        </div>
    );
}

export default ToolRow