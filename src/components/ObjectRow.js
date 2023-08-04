function Object() {
    let elems = ["Wooden Sword", "it's just a wooden Sword", "Weapon", "Juan", "$10"]
    return(
        <div className={"grid grid-cols-5 gap-4 my-2"}>{elems}</div>
    );
}

export default Object