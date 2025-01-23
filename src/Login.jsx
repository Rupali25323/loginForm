import React, { useState } from 'react'

const Login = () => {
  const[isLogin,setisLogin]=useState(true)
  return (
    <div>
          <div className='container'>
<div className='second-container'>
<div className='toggle-buttons'>
  <button className={isLogin?"active":""}onClick={()=>setisLogin(true)}>login</button>
  <button className={!isLogin?"active":""}onClick={()=>setisLogin(false)}>SignUp</button>
</div>
{isLogin?<>
<div className='form'>
<h2>login</h2>
<input type="text"placeholder='Enter your name' />
<input type="text"placeholder='Enter your email' />
<button>Submit</button>
<a href="#">forgot password?</a>
<p>Not a member <a href="#" onClick={()=>setisLogin(false)}>signup</a></p>
</div>
</>:<>
<div className='form'>
<h2>login</h2>
<input type="text"placeholder='Enter your name' />
<input type="text"placeholder='Enter your email' />
<button>Submit</button>
</div>
</>}
</div>
      </div>
    </div>
  )
}

export default Login
