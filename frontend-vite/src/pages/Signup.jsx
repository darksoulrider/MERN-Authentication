import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='p-4 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg' />
                <input type="email" placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg' />
                <input type="password" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' />
                <button className='bg-slate-800 text-white py-2 rounded-lg hover:opacity-95 uppercase disabled:opacity-70'>Sign up</button>
            </form>
            <div className='flex gap-3 mt-4'>
                <p>Have an account ? </p>
                <Link to='/sign-in'>
                    <span className='text-blue-900 font-semibold'>Sign in</span>
                </Link>

            </div>
        </div>
    )
}

export default Signup