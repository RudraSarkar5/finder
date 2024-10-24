import PostCard from "@/components/Post";

const Home = ()=>{
    return (
        <div className="h-full w-full">
            <div className='h-[10%] bg-violet-700 flex justify-center items-center gap-2'>
                <input className='p-2' placeholder='search post' type="text" />
                <button className='w-fit bg-blue-500 rounded-md px-4 py-2'>search</button>
            </div>
            <div className='bg-slate-600 h-[90%] flex flex-wrap justify-center   overflow-y-scroll '>
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

export default Home;