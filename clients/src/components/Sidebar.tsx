const Sidebar = () => {

    const items = ["Home", "Profile","Saved", "Logout"];

    return (
        <div className="h-full w-full border-r-2 border-white pl-20 pt-10 flex flex-col gap-5">
           <h1 className=" text-2xl text-blue-600">Unmask</h1>
           {
            items.map((item:string)=>{
                return <h1 className="hover:bg-blue-500 inline-block w-fit px-3 py-1 rounded-lg " key={item}>{item}</h1>
            })
           }
           <button className=" w-fit bg-blue-500 rounded-md px-4 py-2">Post</button>
        </div>
    );
};

export default Sidebar;
