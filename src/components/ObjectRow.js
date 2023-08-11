function ObjectRow(props) {
    return(
        <div className="border-b-4 border-b-[rgb(249,209,88)] rounded-xl mt-4">
            <div className="grid grid-cols-6 gap-4 my-2 w-full">
                <span className="px-5">{props.name}</span>
                <span className="px-5">{props.image}</span>
                <span className="px-5">{props.amount}</span>
                <span className="px-5">{props.price}</span>
                <span className="px-5">{props.total}</span>
                <span className="flex">
                    <a className="mr-8" href={"/detailed-object"}><img src={process.env.PUBLIC_URL + '/ellipsis-solid.svg'} width="25" height="25"/></a>
                    <a href=""><img src={process.env.PUBLIC_URL + '/trash-solid.svg'} width="25" height="25"/></a>
                </span>
            </div>
        </div>
    );
}

export default ObjectRow