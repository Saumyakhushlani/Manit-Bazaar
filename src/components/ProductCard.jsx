import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X, ShoppingBag, Star } from 'lucide-react';

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
                className='bg-neutral-900 md:w-85 w-87 pb-5 min-h-90'
            >
                <img src={data.image} alt={data.name} className='w-full h-60  object-cover' />
                <div className='text-2xl text-purple-500 py-1 px-4'>{data.name}</div>
                <div className='text-xl text-white px-4'>₹{data.price}</div>
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 mt-8 md:pt-8'
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className='bg-white pb-3 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl'
                            
                        >
                            <div className='relative bg-gradient-to-r from-purple-600 to-violet-600 p-2 text-white'>
                                <button
                                    onClick={closeModal}
                                    className='absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200'
                                >
                                    <X size={24} />
                                </button>
                                <div className='flex items-center gap-3'>
                                    <ShoppingBag size={32} />
                                    <div>
                                        <h2 className='text-2xl font-bold'>Product Details</h2>
                                        <p className='text-white/80'>Everything you need to know</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row overflow-y-auto max-h-[calc(90vh-120px)]'>
                                <div className='lg:w-1/2 p-6'>
                                    <div className='relative rounded-2xl overflow-hidden bg-gray-100'>
                                        <img 
                                            src={data.image} 
                                            alt={data.name} 
                                            className='w-full h-80 lg:h-96 object-cover' 
                                        />
                                        
                                    </div>
                                </div>

                                <div className='lg:w-1/2 p-6 flex flex-col'>
                                    <div className='flex-1'>
                                        <h3 className='text-3xl font-bold text-gray-900 mb-2'>{data.name}</h3>
                                        
                                        <div className='flex items-center gap-4 mb-6'>
                                            <span className='text-4xl font-bold text-purple-600'>₹{data.price}</span>
                                            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
                                                In Stock
                                            </span>
                                        </div>

                                        <div className='bg-gray-50 rounded-2xl p-4 mb-6'>
                                            <h4 className='font-semibold text-gray-900 mb-2'>Description</h4>
                                            <p className='text-gray-600 leading-relaxed'>{data.description}</p>
                                        </div>

                                        <div className='bg-blue-50 rounded-2xl p-4 mb-6'>
                                            <h4 className='font-semibold text-gray-900 mb-2'>Seller Information</h4>
                                            <div className='flex items-center gap-3'>
                                                <div className='w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold'>
                                                    {data.ownerDetails?.name?.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className='font-medium text-gray-900'>{data.ownerDetails?.name}</p>
                                                    <p className='text-sm text-gray-500'>Verified Seller</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='space-y-3'>
                                        <h4 className='text-lg font-semibold text-gray-900 mb-4'>Get in Touch</h4>
                                        
                                        <a
                                            href={`https://wa.me/${data.ownerDetails?.phone}?text=Hello! I'm interested in ${data.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                                        >
                                            <Phone size={20} />
                                            <span>WhatsApp Now</span>
                                        </a>
                                        
                                        <a
                                            href={`mailto:${data.ownerDetails?.email}?subject=Interested in ${data.name}&body=Hello, I am interested in your product: ${data.name}`}
                                            className="group bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                                        >
                                            <Mail size={20} />
                                            <span>Send Email</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProductCard;