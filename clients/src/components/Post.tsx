"use client"
import Image from "next/image";
import userPhoto from "../../public/profile.webp"
import { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const PostCard = ()=>{

    const [commentVisible , setCommentVisible] = useState<boolean>(false);

    const handleClick = ()=>{
        setCommentVisible(!commentVisible);
    }


    return (
        <div className=" relative w-[60%] h-[65%] m-2 bg-slate-900 p-2  grid grid-cols-12 mx-10 gap-2 ">
            <div className="col-span-1 ">
                <Image 
                    src={userPhoto} 
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
                    <button onClick={handleClick}>comment</button>
                    <h1>save</h1>
                </div>
            </div>
            <div className={`absolute w-full h-full bg-red-500 grid grid-rows-12 py-2 px-3  ${!commentVisible&&"hidden"} `}>
                <div className="row-span-2 bg-blue-500 grid grid-cols-12 items-center  justify-between">
                    <div className="col-span-10 flex justify-between bg-green-500">
                        <input type="text" className="w-[70%] p-2 " placeholder="write comment..."  />
                        <button className="px-2 py-1 bg-blue-500 rounded-lg">add</button>
                    </div>
                    <div className="col-span-2 bg-pink-500 flex justify-end ">
                        <i onClick={handleClick} className="ri-arrow-go-back-line "></i>
                    </div>
                    
                </div>
                <div className="row-span-10 bg-green-500 overflow-y-scroll no-scrollbar ">
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    <div >
                        <h1>rudra sarkar</h1>
                        <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PostCard;