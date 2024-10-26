import Image from "next/image";

const ProfileTittle = ()=>{
    return (
        <div className=" h-full flex justify-start gap-2 items-center">
            <Image className="rounded-full" src="/unknown.jpeg" height={25} width={25} alt="profile-photo"/>
            <span>Rudra Sarkar</span>
        </div>
    )
}

export default ProfileTittle;