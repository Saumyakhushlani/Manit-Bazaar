"use client"
import React from 'react'
import { motion } from 'motion/react'
const Rules = () => {
    const rules = [
        { sno: 1, content: "User must <span class='text-purple-500 font-semibold'>login</span> or verify their identity using <span class='text-purple-500 font-semibold'>MANIT Credentials</span> (student.manit.ac.in) for verification." },
        { sno: 2, content: "Items must be <span class='text-purple-500 font-semibold'>legal</span>, <span class='text-purple-500 font-semibold'>non‑expired</span> and <span class='text-purple-500 font-semibold'>owned by you</span>." },
        { sno: 3, content: "Allowed listings include: <span class='text-purple-500 font-semibold'>academic materials</span>, <span class='text-purple-500 font-semibold'>electronics</span>, <span class='text-purple-500 font-semibold'>bicycles</span>, <span class='text-purple-500 font-semibold'>room essentials</span>, etc." },
        { sno: 4, content: "<span class='text-purple-500 font-semibold'>Prohibited:</span> stolen items, offensive content, drugs, weapons, counterfeit goods." },
        { sno: 5, content: "Be <span class='text-purple-500 font-semibold'>respectful</span> in chats, DMs, and negotiations." },
        { sno: 6, content: "Meet in <span class='text-purple-500 font-semibold'>safe public spaces</span> within campus for transactions." },
        { sno: 7, content: "MANIT Bazaar is <span class='text-purple-500 font-semibold'>not responsible</span> for personal disputes or losses, but we take <span class='text-purple-500 font-semibold'>user safety</span> seriously." },
        { sno: 8, content: "Add <span class='text-purple-500 font-semibold'>clear original photos</span>, <span class='text-purple-500 font-semibold'>honest descriptions</span>, and set a <span class='text-purple-500 font-semibold'>fair price</span>." },
        { sno: 9, content: "Remove your listing once the item is <span class='text-purple-500 font-semibold'>sold</span>." },
        { sno: 10, content: "Avoid <span class='text-purple-500 font-semibold'>duplicate</span> or <span class='text-purple-500 font-semibold'>spam listings</span>." },
        { sno: 11, content: "We may <span class='text-purple-500 font-semibold'>suspend</span> or <span class='text-purple-500 font-semibold'>remove</span> users who <span class='text-purple-500 font-semibold'>break the rules</span> without notice." },
    ];

    return (
        <div className='bg-neutral-950 py-15 md:px-10 px-5 flex flex-col justify-center items-center'>
            <motion.div className='text-purple-500 md:text-6xl text-5xl mb-5 font-semibold'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            ><span className='text-white'>User</span> Policy</motion.div>
            <motion.div className='text-white md:text-2xl text-xl md:max-w-2xl text-center md:mb-10 mb-4'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 ,delay:0.2}}
            >
                Policies aren't about control - they're about creating a space that works for everyone.
            </motion.div>
            {rules.map((e) => (
                <div
                    key={e.sno}
                    className="flex flex-col justify-start items-start mb-4 w-full max-w-6xl"
                >
                    <motion.div
                        whileInView={{x:0,opacity:1}}
                        initial={{x:-200,opacity:0}}
                        transition={{duration:0.1,delay:e.sno*0.05}}
                        className="text-white md:text-xl text-lg md:text-left "
                        dangerouslySetInnerHTML={{ __html: `${e.sno}. ${e.content}` }}
                    />
                </div>
            ))}
        </div>
    )
}

export default Rules
