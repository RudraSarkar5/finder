const Login = ()=>{
    return (
        <div className="w-full h-screen flex justify-center items-center ">
           <div className="w-1/3 h-[300px]  bg-slate-900 flex justify-center items-center flex-col gap-5">
                <h1 className="text-blue-200 text-4xl">Unmask</h1>
                <div>
                    <label>user name :</label>
                    <input className="px-3 py-1 text-black" type="text" placeholder="enter username" />
                </div>
                <div>
                    <label>password :</label>
                    <input className="px-3 py-1 text-black" type="password" placeholder="enter password"/>
                </div>
                <button  className="bg-blue-500 py-1 px-3 rounded-xl">Login</button>
                
           </div>
        </div>
    )
}

export default Login;