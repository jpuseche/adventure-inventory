function DetailedObject() {
    return(
        <div className="flex max-w-screen-xl my-24 w-full rounded-xl p-10 bg-gradient-to-r from-[#FFDC72] to-[#f0c132]">
            <div className="flex flex-col w-1/2">
                <h1 className="text-6xl font-bold text-[#685313] py-5">Object Name</h1>
                <span className="text-xl font-bold text-[#685313] py-5">Description:</span>
                <span className="text-xl font-bold text-[#685313] py-5">Type:</span>
                <span className="text-xl font-bold text-[#685313] py-5">Owner:</span>
                <span className="text-xl font-bold text-[#685313] py-5">Price:</span>
            </div>
            <div className="flex justify-center items-center w-1/2">
            <img src={process.env.PUBLIC_URL + '/sword.png'} width="300"/>
            </div>
        </div>
    );
}

export default DetailedObject;