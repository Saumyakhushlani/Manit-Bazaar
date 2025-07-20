"use client";
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ProductCard = ({ data }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);

    return (
        <>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className='bg-neutral-900 md:w-85 w-87 pb-5'
            >
                <img src={data.image} alt={data.name} className='w-full h-60 object-cover' />
                <div className='text-3xl text-purple-500 py-1 px-4'>{data.name}</div>
                <div className='text-2xl text-white px-4'>₹{data.price}</div>
                <div className='text-md text-white py-1 px-4'>{data.description}</div>
                <button
                    onClick={openModal}
                    className='w-1/2 py-1.5 mt-2 mx-4 bg-purple-500 text-black font-sans font-semibold rounded-lg'
                >
                    View Details
                </button>
            </motion.div>

            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className='fixed inset-0 bg-neutral-950 bg-opacity-90 flex justify-center items-center z-[100] overflow-y-auto'
                    >
                        <motion.div
                            className='bg-neutral-950 py-15  w-full h-full flex flex-col relative z-[1000]'
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <button
                                onClick={closeModal}
                                className='absolute top-4 right-4  text-white text-4xl font-bold z-10 hover:text-purple-400 transition-colors'
                            >
                                &times;
                            </button>

                            <div className='flex flex-col md:flex-row flex-grow-0 shrink-0  md:p-8 px-6 p-2'>
                                <div className='md:w-1/2 w-full mb-6 md:mb-0 md:pr-8'>
                                    <img src={data.image} alt={data.name} className='w-full h-96 object-cover rounded-lg' />
                                </div>

                                <div className='md:w-1/2 w-full flex flex-col justify-center'>
                                    <h2 className='text-5xl font-bold text-purple-400 mb-3'>{data.name}</h2>
                                    <p className='text-3xl text-white mb-4'>₹{data.price}</p>
                                    <p className='text-lg text-neutral-300'>{data.description}</p>
                                    <button
                                        onClick={closeModal}
                                        className='md:mt-8 mt-3 py-3 px-8 bg-purple-600 text-white font-semibold rounded-lg text-xl hover:bg-purple-700 transition duration-200 self-start md:self-end'
                                    >
                                        Close View
                                    </button>
                                </div>
                            </div>
                            <div className='md:p-6 p-2 px-6'>
                                <div className='text-5xl text-purple-400 font-semibold'>Contact</div>
                                <button className='bg-green-500 text-white flex gap-2 justify-center items-center w-full md:w-1/4 py-2 rounded-lg text-xl my-3'><FaWhatsapp />WhatsApp</button>
                                <button className='bg-red-500 text-white flex gap-2 justify-center items-center w-full md:w-1/4 py-2 rounded-lg text-xl'><MdOutlineMail />Mail</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProductCard;