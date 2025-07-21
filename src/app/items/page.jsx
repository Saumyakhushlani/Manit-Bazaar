import React from 'react'
import NavbarDemo from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/ui/footer'

const page = () => {
    const data = [
        {
            id: "p001",
            name: "Wireless Headphones",
            description: "High-quality over-ear wireless headphones with noise cancellation.",
            price: 129.99,
            category: ["64c9a2b1f1e3ab45d7e12345"],
            image: "https://images.unsplash.com/photo-1518449075967-6d43d1d5b5fd?auto=format&fit=crop&w=800&q=80",
            createdAt: "2025-07-01T10:15:00Z",
            owner: "64c9a2b1f1e3ab45d7e67890",
            updatesAt: "2025-07-10T12:00:00Z"
        },
        {
            id: "p002",
            name: "Smart Watch",
            description: "Feature-packed smartwatch with fitness tracking and notifications.",
            price: 89.50,
            category: ["64c9a2b1f1e3ab45d7e12347"],
            image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
            createdAt: "2025-07-05T14:30:00Z",
            owner: "64c9a2b1f1e3ab45d7e67891",
            updatesAt: "2025-07-12T09:45:00Z"
        },
        {
            id: "p003",
            name: "Gaming Mouse",
            description: "Ergonomic gaming mouse with customizable RGB lighting.",
            price: 59.00,
            category: ["64c9a2b1f1e3ab45d7e12348"],
            image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3a43?auto=format&fit=crop&w=800&q=80",
            createdAt: "2025-07-08T08:20:00Z",
            owner: "64c9a2b1f1e3ab45d7e67892",
            updatesAt: "2025-07-15T18:10:00Z"
        },
        {
            id: "p004",
            name: "Mechanical Keyboard",
            description: "RGB backlit mechanical keyboard with tactile switches.",
            price: 75.49,
            category: ["64c9a2b1f1e3ab45d7e12349"],
            image: "https://images.unsplash.com/photo-1595225478378-8f1736c6a5b0?auto=format&fit=crop&w=800&q=80",
            createdAt: "2025-07-09T11:05:00Z",
            owner: "64c9a2b1f1e3ab45d7e67893",
            updatesAt: "2025-07-16T10:20:00Z"
        },
        {
            id: "p005",
            name: "Portable SSD",
            description: "500GB portable solid-state drive with fast read/write speeds.",
            price: 99.99,
            category: ["64c9a2b1f1e3ab45d7e12350"],
            image: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?auto=format&fit=crop&w=800&q=80",
            createdAt: "2025-07-10T16:40:00Z",
            owner: "64c9a2b1f1e3ab45d7e67894",
            updatesAt: "2025-07-17T08:55:00Z"
        },
        {
            id: "p006",
            name: "Webcam HD",
            description: "1080p HD webcam with built-in microphone and wide-angle lens.",
            price: 49.99,
            category: ["64c9a2b1f1e3ab45d7e12351"],
            image: "https://images.unsplash.com/photo-1617957743238-78a4a1e34d91?auto=format&fit=crop&w=800&q=80",
            createdAt: "2025-07-11T07:50:00Z",
            owner: "64c9a2b1f1e3ab45d7e67895",
            updatesAt: "2025-07-17T13:15:00Z"
        },
        {
            id: "p007",
            name: "Bluetooth Speaker",
            description: "Portable Bluetooth speaker with deep bass and long battery life.",
            price: 45.99,
            category: ["64c9a2b1f1e3ab45d7e12352"],
            image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
            createdAt: "2025-07-11T09:30:00Z",
            owner: "64c9a2b1f1e3ab45d7e67897",
            updatesAt: "2025-07-15T11:00:00Z"
        }
    ];

    return (
        <>
            <NavbarDemo />
            <div className='bg-[#fff8e6] flex flex-col justify-center items-center py-22 px-10'>
                <div className='text-purple-500 text-5xl font-semibold mb-5'>Discover Amazing Items</div>
                <div className='text-white text-xl'>Find pre‑loved books, gadgets, hostel essentials, and more – all from fellow MANITians.</div>
                <div className='text-white text-xl mb-6'>Browse a wide range of products and find exactly what you need.</div>
                <div className='flex flex-row flex-wrap md:gap-5 gap-10'>
                    {data.map((e) => (
                        <div key={e.sno} className=''>
                            <ProductCard data={e} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default page
