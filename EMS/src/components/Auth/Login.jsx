import React, { useState, useSyncExternalStore } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


 const submitHandler =(e)=>{
  e.preventDefault()
 handleLogin(email,password)
  setEmail('')
  setPassword('')
 }




  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-red-500 rounded p-20  ">
        <form
        onSubmit={(e)=>{
           submitHandler(e)
        }}
          className='flex flex-col items-center gap-10 justify-center ' >
            <input value={email}
            onChange={ (e)=>{
              setEmail(e.target.value)
            }}
             required type="email" placeholder="Enter your Email " className=" p-5 border-2 border-red-500 bg-tranparent text-grey-400 text-2xl rounded-full text-center outline-none  "/>
            <input value={password} onChange={ (e)=>{
              setPassword(e.target.value)
            }} required type="password" placeholder="Enter your password "  className=" p-5 border-2 border-red-500 bg-tranparent text-grey-400 text-2xl rounded-full text-center outline-none  " />
            <button className="outline-none bg-red-500 rounded-full px-10 py-5  text-2xl">LogIn</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
