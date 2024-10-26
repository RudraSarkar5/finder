"use client"
import PostCard from "@/components/Post"
import Button from "@/components/Button"
import Image from "next/image";

const Profile = () => {
    return (
        <div className="w-full h-full bg-red-500">
            <div className="profile-header h-[30%] bg-blue-900 flex justify-center items-center flex-col gap-2">
                <div className=" h-30 rounded-full bg-green-500 ">
                    <Image className="w-full h-full overflow-hidden object-fit rounded-full"  src="/unknown.jpeg" height={100} width={100} alt="profile image"/>
                </div>
                <div className="flex gap-8">
                    <Button name="edit"/>
                    <Button name="delete"/>
                    {/* <button className="px-2 py-1 bg-blue-500 rounded-lg">edit</button>
                    <button className="px-2 py-1 ml-10 bg-blue-500 rounded-lg">delete</button> */}
                </div>
            </div>
            <div className="bg-slate-500 h-[70%] flex  flex-col items-center gap-2 w-full wrap py-3 overflow-y-auto">
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        </div>
    )
}

export default Profile;
