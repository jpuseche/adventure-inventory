import Label from '../components/Label'

function goToCreateRoute() {
    console.log("it works");
}

function Inventory(props) {
    // label row
    let labelElems = ["Name", "Description", "Type", "Owner", "Price"];

    let labelRow = [];

    labelElems.forEach(elem => {
        labelRow.push(Label(elem));
    });

    // Object list (Inventory)
    let inventory = [];

    inventory.push(<div className={"grid grid-cols-" + labelElems.length + " gap-4 my-4 text-[#ffdc72]"}>{labelRow}</div>);

    props.objects.forEach(row => {
        let objectRow = [];
        row.forEach(elem => {
            objectRow.push(<span>{elem}</span>);
        });
        inventory.push(<div className={"grid grid-cols-" + labelElems.length + " gap-4 my-2"}>{objectRow}</div>);
    });
    
    return(
        <section className="bg-[#483838] h-screen">
            <div className="flex justify-center text-white font-mono">
                <div class="flex justify-center my-24 rounded-lg bg-gradient-to-b from-[#FFE595] via-[#f5d983] to-[#FED049] p-1">
                    <div className="max-w-screen-xl w-full rounded-lg p-10 bg-gradient-to-b from-[#42855B] to-[#90B77D]">
                        <h1 className="text-6xl font-bold flex justify-center text-[#FFDC72] mb-10">Inventory</h1>
                        {inventory}
                        <button className="bg-[#FFDC72] hover:bg-[#f0c132] py-2 px-4 my-2 text-[#685313]" onClick={goToCreateRoute}>Click me</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Inventory