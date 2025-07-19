import React from 'react'
import axios from 'axios'

const page = () => {
  return (
    <div>
        <nav className='flex flex-row justify-between p-10'>
            <span className='text-2xl font-semibold'>Dashboard</span>
            <button className='bg-purple-500 px-5 py-1 rounded-full cursor-pointer hover:opacity-80'>Add Product</button>
        </nav>
         {/* your Products */}
        <div className='flex'>
            <h1 className='px-10 font-semibold text-lg'>Your Products</h1>
        </div>
        <div>
            <img src="" alt="" />

        </div>
    </div>
  )
}

export default page