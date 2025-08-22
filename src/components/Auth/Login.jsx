import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('email', email);
    console.log('password', password);
    setEmail('');
    setPassword('');
  }

  return (
    <div 
    onSubmit={(e)=> {
      submitHandler(e)
    }}
    className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className='border-2 border-emerald-600 py-3 px-5 rounded-full outline-none bg-tranparent text-xl text-white' type="email" required 
                placeholder='Enter your email'
                />
                <input 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                className='border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 outline-none bg-tranparent text-xl text-white' 
                type="password" 
                required placeholder='Enter your password'
                />
                <button className='mt-5 bg-emerald-600 py-3 px-5 rounded-full outline-none text-xl text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login