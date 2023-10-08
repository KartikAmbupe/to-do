import React from 'react'
import GoogleButton from 'react-google-button'
function Login() {
  return (
    <div className='bg-black h-[100vh]'>
        <div className="title text-[white] tracking-[10px] text-[50px] font-semibold flex items-center justify-center py-12 ">
            TODO...
        </div>
        <div className="login-form-wrap  w-fit text-center rounded-[6px] shadow-[0px_30px_50px_0px_rgba(0,0,0,0.2)] m-auto pt-8">
        <h2 className='font-bold text-center text-[1.9rem] text-white mb-[25px]'>Login</h2>
        <form className="login-form  px-[70px] py-0"  >
          <input
            type="email"
            placeholder="Email Address"
            
            required
          />
          <input
            type="password"
            placeholder="Password"
            
            required
          />
          <input type="submit" value="Login" />
        </form>
        <div className='other text-white font-[650] mb-4'>
          <p>OR</p>
          <div className='G flex w-full justify-center mt-1'><GoogleButton type='light' /></div>
        </div>
        <div className="create-account-wrap rounded-[7px] bg-[#eeedf1] text-[#8a8b8e] text-sm w-full cursor-pointer px-0 py-2.5 rounded-[0_0_4px_4px];
">
          <p>
            Not a member? <span className='hover:text-[royalblue] underline text-[purple]'>Create Account</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login