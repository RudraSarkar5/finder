"use client"
import ProfileTittle from "@/components/ProfileTittle"
import Comment from "@/components/Comment"
import Button from "@/components/Button"
import { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const PostCard = ()=>{

    const [commentVisible , setCommentVisible] = useState<boolean>(false);

    const handleClick = ()=>{
        setCommentVisible(!commentVisible);
    }


    return (
        <div className=" relative w-[60%] h-96 my-4 px-3 py-1  bg-blue-900    ">
            <div className="h-[10%] flex justify-between ">
                <ProfileTittle/>
                <i className="ri-edit-box-line text-white"></i>
            </div>
            <div className=" h-[75%] pl-5 my-2 bg-gray-900 overflow-y-scroll no-scrollbar ">
                <p>Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nesciunt illum distinctio ratione neque ipsum veritatis aliquid fugiat error hic! Quibusdam, iusto vel. Facere, magni laudantium molestiae dolor libero vel deserunt aperiam reiciendis totam distinctio eligendi quam ipsam rem ex, numquam dolorem nihil corporis ad a asperiores unde enim? Magnam quod hic distinctio temporibus cum exercitationem explicabo eligendi, quisquam repellat molestiae consequatur rem aliquam vel cumque alias ut officiis libero? Assumenda laudantium quam, placeat, unde soluta nesciunt culpa magni sint iste error aperiam nihil quidem ad, dolores cupiditate obcaecati voluptas odio quasi laboriosam. Amet eligendi consequuntur necessitatibus at nostrum nihil vel soluta culpa repellendus, incidunt reprehenderit. Corporis alias maxime ut sequi a qui, ex distinctio totam quod, enim autem, quia in. Possimus dignissimos cumque consequuntur molestias aperiam dolorem ducimus, tenetur ipsa nam. Modi odit aspernatur perferendis, saepe rem unde tenetur culpa officiis! Nisi, modi vitae quasi totam doloremque eveniet architecto soluta ullam mollitia possimus ipsam ut quaerat temporibus inventore commodi dolore, corporis quibusdam. Tempore, dolor, harum unde eaque dicta temporibus, vero illum aspernatur optio assumenda ipsa ipsum! Illo quibusdam odit dicta labore velit optio placeat repellendus fuga officiis omnis incidunt beatae doloribus dolorum itaque, maiores consequuntur vitae a! Reiciendis voluptatem a natus sint culpa facere nam dolorem, ea vitae incidunt voluptatum quisquam, accusamus doloremque et! Odio, cum dignissimos adipisci blanditiis similique veniam eligendi, maiores reprehenderit distinctio consequuntur, deleniti vel itaque eaque. Iure tenetur ea amet qui? Suscipit, nihil mollitia molestias cumque sed, odio iure excepturi officiis amet, similique natus. Maxime quibusdam sit qui officia dolorem corrupti temporibus id ipsum voluptatem! Necessitatibus quas ad, obcaecati nemo sit, dolor sint commodi laboriosam hic enim saepe molestias culpa nihil in atque adipisci, similique cum? Praesentium recusandae aspernatur impedit fuga voluptatibus nobis, accusantium quia, error obcaecati quod nesciunt. Voluptatem aperiam ea fugit assumenda magni? amet consectetur adipisicing elit. Dignissimos soluta quae architecto id assumenda illum nulla exercitationem temporibus qui, at quam sapiente harum repellat praesentium nesciunt laboriosam deserunt laudantium dolor delectus? Ducimus aspernatur natus veniam architecto! Cum, recusandae, quod voluptatum eligendi animi nostrum quas reprehenderit ipsa at voluptate ullam ab.</p>
               
            </div>
            <div className="h-[10%]  flex justify-around">
                    <button onClick={handleClick} className="px-3 bg-black rounded-md">comments</button>
                    <button className="px-3 bg-black rounded-md">save</button>

            </div>
            <div className={` w-full h-full py-1 px-2 absolute top-0 left-0   bg-blue-900  ${!commentVisible&&"hidden"} `}>
                <div className="h-[20%] w-full   flex  items-center  justify-between">
                    <div className="w-[80%] flex justify-between ">
                        <input type="text" className="w-[80%] p-2 bg-blue-500" placeholder="write comment..."  />
                        <button className="px-2  bg-blue-500 rounded-lg">add</button>
                    </div>
                    <div className="w-[20%]   flex justify-end ">
                        <i onClick={handleClick} className="ri-arrow-go-back-line text-2xl "></i>
                    </div>
                    
                </div>
                <div className="h-[80%] overflow-y-scroll no-scrollbar ">
                    <div >
                        <Comment/>
                    </div>
                    <div >
                        <Comment/>
                    </div>
                    <div >
                        <Comment/>
                    </div>
                    <div >
                        <Comment/>
                    </div>
                    <div >
                        <Comment/>
                    </div>
                    <div >
                        <Comment/>
                    </div>
                    
                   
                  
                    
                </div>
            </div>
        </div>
    )
}

export default PostCard;