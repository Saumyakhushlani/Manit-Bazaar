"use client"
import React from 'react'
import Card from '@/components/Card';
import { motion } from 'motion/react'
import NavbarDemo from '@/components/Header';
import Footer from '@/components/ui/footer';

const page = () => {
  const team = [
    {
      sno: 1,
      name: "Saumya Khushlani",
      src: "/saumya.jpg",
      linkedin: "https://www.linkedin.com/in/saumya-khushlani-333955312/",
      instagram: "https://www.instagram.com/saumya_khushlani/?__pwa=1",
      email: "saumyakhushlani9@gmail.com"
    },
    {
      sno: 2,
      name: "Aadi Kumar Jain",
      src: "/aadi.jpg",
      linkedin: "https://www.linkedin.com/in/aadi-jain-42a765319/",
      instagram: "https://www.instagram.com/aadijaintkg/?__pwa=1",
      email: ""
    },
     {
      sno: 6,
      name: "Naitik Raghuwanshi",
      src: "/naitik.jpg",
      linkedin: "https://www.linkedin.com/in/naitikraghuwanshi/overlay/about-this-profile/",
      instagram: "https://www.instagram.com/raghuwanshi_naitik/?__pwa=1",
      email: "raghuwanshinaitik04@gmail.com"
    },
    {
      sno: 3,
      name: "Yatharth Upmanyu",
      src: "/yatharth.jpg",
      linkedin: "https://www.linkedin.com/in/yatharth-upmanyu-b85781320/",
      instagram: "https://www.instagram.com/yatharthupmanyu/?__pwa=1",
      email: ""
    },
    {
      sno: 4,
      name: "Anupam Dwivedi",
      src: "/anupam.jpg",
      linkedin: "https://www.linkedin.com/in/anupam-dwivedi-2aa725325/",
      instagram: "https://www.instagram.com/anupamdwivedi0529/?__pwa=1",
      email: ""
    },
    {
      sno: 5,
      name: "Krishna Gupta",
      src: "/krishna.jpg",
      linkedin: "https://www.linkedin.com/in/krishna-gupta-34777227a/",
      instagram: "https://www.instagram.com/krishnagupta192/?__pwa=1",
      email: ""
    },
   
  ];

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
    hidden: { opacity: 0, y: 20 },
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
    <div className="bg-neutral-950 min-h-screen">
      <NavbarDemo />

      <section className="bg-neutral-950 pt-25  px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-5xl mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-500 mb-6">
            Welcome to MANIT Bazzar
          </h1>
          <p className="text-lg sm:text-xl text-neutral-950 leading-relaxed bg-neutral-100 max-w-2xl px-6 py-6 rounded-xl font-sans border-r-6 border-purple-500">
            <span className="font-semibold text-purple-600">MANIT Bazzar</span> is the official
            student-driven marketplace for <span className="font-medium">MANIT Bhopal</span>.
            Here you can <span className="text-purple-600">buy</span> and <span className="text-purple-600">sell</span> anything from
            books, notes, gadgets, and hostel essentials to furniture and hobby gear -
            all within the safety of our campus community.
          </p>
          <p className="mt-6 text-neutral-100 text-lg sm:text-xl max-w-3xl">
            Our goal is simple: to help students save money, reduce waste, and build a culture
            of reusing and sharing. Join the movement and make your campus life smarter and greener.
          </p>
        </div>
      </section>

      <div className="py-16 bg-neutral-950">
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
      <Footer/>
    </div>
  );
}

export default page;
