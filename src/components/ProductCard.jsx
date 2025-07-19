"use client"
import React from 'react'
import { motion } from 'motion/react'

const ProductCard = ({ data }) => {
    return (
        <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:20}}
        transition={{duration:0.3}}
        className='bg-neutral-900 w-85'
        >
            <img src={data.image} alt={data.name} className='w-full h-60 object-cover'/>
            <div className='text-3xl text-purple-500 py-1 px-4'>{data.name}</div>
            <div className='text-2xl text-white  px-4'>₹{data.price}</div>
            <div className='text-md text-white py-1 px-4'>{data.description}</div>

        </motion.div>
  )
}

export default ProductCard
