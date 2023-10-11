import React from 'react'
import { NavLink } from 'react-router-dom'
function SignUp() {
  return (
    <div className='m h-[100vh] flex items-center  justify-center'>
        <div className="container  items-center flex justify-center ">
      <div className="card shadow-[0_5px_10px_0_rgba(0,0,0,0.3)] w-[400px] h-auto bg-[#25273c] text-white pt-2.5 pb-[30px] px-[30px] rounded-[10px]">
        <div className="card_title  text-center p-2.5">
          <h1 className='text-[26px] font-bold'>Create Account</h1>
        </div>
        <div className="form"  >
          <form >
            <input className='w-full bg-[#e2e2e2] rounded text-black text-[1.2rem] mx-0 my-[15px] px-5 py-3 border-[none];
' type="text" name="username" id="username" placeholder="UserName" required />
            <input className='w-full bg-[#e2e2e2] rounded text-black text-[1.2rem] mx-0 my-[15px] px-5 py-3 border-[none];
' type="email"  name="email" placeholder="Email" required />
            <input className='w-full bg-[#e2e2e2] rounded text-black text-[1.2rem] mx-0 my-[15px] px-5 py-3 border-[none];
' type="password" name="password" placeholder="Password" required />
            <input className='w-full bg-[#e2e2e2] rounded text-black text-[1.2rem] mx-0 my-[15px] px-5 py-3 border-[none];
' type="password"  name="password" placeholder="Confirm Password" required />
            <NavLink to="/"><button className='bg-[#4796ff] text-white text-base w-full mt-[15px] px-[15px] py-2.5 rounded-[5px] border-[none];
' type="submit">Sign Up</button></NavLink>
          </form>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default SignUp