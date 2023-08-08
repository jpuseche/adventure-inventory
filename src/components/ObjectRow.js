function ObjectRow(props) {
    return(
        <div className="border-b-4 border-b-[#f9d158] rounded-xl mt-4">
            <div className="grid grid-cols-5 gap-4 my-2 w-full">
                <span className="px-5">{props.name}</span>
                <span className="px-5">{props.description}</span>
                <span className="px-5">{props.type}</span>
                <span className="px-5">{props.owner}</span>
                <span className="px-5">{props.price}</span>
            </div>
        </div>
    );
}

export default ObjectRow