"use client"
import React from 'react'
import Card from '@/components/Card';
import {motion } from 'motion/react'

const page = () => {
    const team =[
        {
            sno:1,
            name:"Saumya Khushlani",
            src:"/saumya.jpg",
            linkedin:"https://www.linkedin.com/in/saumya-khushlani-333955312/",
            instagram:"https://www.instagram.com/saumya_khushlani/?__pwa=1"
        },
        {
            sno:2,
            name:"Aadi Kumar Jain",
            linkedin:"https://www.linkedin.com/in/aadi-jain-42a765319/",
            src:"/aadi.jpg",
            instagram:"https://www.instagram.com/aadijaintkg/?__pwa=1"

        },
        {
            sno:3,
            name:"Yatharth Upmanyu",
            src:"/yatharth.jpg",
            linkedin:"https://www.linkedin.com/in/yatharth-upmanyu-b85781320/",
            instagram:"https://www.instagram.com/yatharthupmanyu/?__pwa=1"
        },
        {
            sno:4,
            name:"Anupam Dwivedi",
            src:"/anupam.jpg",
            linkedin:"https://www.linkedin.com/in/anupam-dwivedi-2aa725325/",
            instagram:"https://www.instagram.com/anupamdwivedi0529/?__pwa=1"
        },
        {
            sno:5,
            name:"Krishna Gupta",
            src:"/krishna.jpg",
            linkedin:"https://www.linkedin.com/in/krishna-gupta-34777227a/",
            instagram:"https://www.instagram.com/krishnagupta192/?__pwa=1"

        },
        {
            sno:6,
            name:"Naitik Raghuwanshi",
            src:"/naitik.jpg",
            linkedin:"https://www.linkedin.com/in/naitikraghuwanshi/overlay/about-this-profile/",
            instagram:"https://www.instagram.com/raghuwanshi_naitik/?__pwa=1"
        }
    ]


    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='bg-[#101010]'>
      
      <div className="py-16 bg-[#101010]">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-500 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-white">
              Meet the dedicated individuals behind MANIT Bazzar
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap justify-center gap-8 items-start"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex-shrink-0"
              >
                <Card member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default page
