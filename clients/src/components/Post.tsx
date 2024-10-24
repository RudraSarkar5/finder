import Image from "next/image";
const PostCard = ()=>{

    return (
        <div className="w-[60%] h-[65%] m-2 bg-slate-900 p-2  grid grid-cols-12 mx-10 gap-2 ">
            <div className="col-span-1 ">
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s" 
                    alt="user_photo" 
                    width={25} // Adjust size as needed
                    height={25} 
                    className=" rounded-full object-cover" // Ensures it covers the container proportionally
                />

            </div>
            <div className="col-span-11 grid grid-rows-12 ">
                <div className=" row-span-1 ">Rudra Sarkar</div>
                <div className="row-span-9 bg-green-600 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla quia consequuntur ex distinctio perferendis iusto atque ullam accusamus dolore corrupti adipisci laborum non sunt porro, molestias asperiores, quis eaque!</p>
                </div>
                <div className="row-span-2 flex justify-around items-center bg-sky-900">
                    <h1>like</h1>
                    <h1>comment</h1>
                    <h1>save</h1>
                </div>
            </div>
        </div>
    )
}

export default PostCard;