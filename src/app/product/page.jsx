// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { FiChevronRight } from 'react-icons/fi';

// const categories = [
//   { name: 'All Items', image: 'https://via.placeholder.com/100', link: '/all' },
//   { name: 'Coolers', image: 'https://via.placeholder.com/100', link: '/coolers' },
//   { name: 'Cycles', image: 'https://via.placeholder.com/100', link: '/cycles' },
//   { name: 'Mobiles', image: 'https://via.placeholder.com/100', link: '/mobiles' },
//   { name: 'PC & Laptops', image: 'https://via.placeholder.com/100', link: '/pcs' },
//   { name: 'Study Material', image: 'https://via.placeholder.com/100', link: '/study-material' },
//   { name: 'Sports', image: 'https://via.placeholder.com/100', link: '/sports' },
//   { name: 'Others', image: 'https://via.placeholder.com/100', link: '/others' },
// ];

// export default function CategoryPage() {
//   return (
//     <div className="min-h-screen bg-neutral-950 text-white px-4 py-10">
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
//         Browse by <span className="text-purple-500">Category</span>
//       </h1>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {categories.map((cat, idx) => (
//           <motion.div
//             key={cat.name}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.05 }}
//           >
//             <Link
//               href={cat.link}
//               className="flex flex-col items-center bg-neutral-900 hover:bg-neutral-800 transition-colors p-4 rounded-2xl shadow-lg group"
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-20 h-20 object-cover mb-4 rounded-xl group-hover:rotate-3 transition-transform"
//               />
//               <div className="text-sm sm:text-base font-medium flex items-center gap-1">
//                 {cat.name}
//                 <FiChevronRight className="text-purple-400 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }








'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiChevronRight,
  FiBox
} from 'react-icons/fi';
import {
  MdOutlineAcUnit,
  MdPhoneIphone,
  MdOutlineMenuBook,
  MdSportsSoccer
} from 'react-icons/md';
import {
  FaBicycle,
  FaLaptopCode,
  FaEllipsisH
} from 'react-icons/fa';

const categories = [
  { name: 'All Items', icon: <FiBox size={50} />, link: '/all' },
  { name: 'Coolers', icon: <MdOutlineAcUnit size={50} />, link: '/coolers' },
  { name: 'Cycles', icon: <FaBicycle size={50} />, link: '/cycles' },
  { name: 'Mobiles', icon: <MdPhoneIphone size={50} />, link: '/mobiles' },
  { name: 'PC & Laptops', icon: <FaLaptopCode size={50} />, link: '/pcs' },
  { name: 'Study Material', icon: <MdOutlineMenuBook size={50} />, link: '/study-material' },
  { name: 'Sports', icon: <MdSportsSoccer size={50} />, link: '/sports' },
  { name: 'Others', icon: <FaEllipsisH size={50} />, link: '/others' },
];

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
        Browse by <span className="text-purple-500">Category</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link
              href={cat.link}
              className="flex flex-col items-center bg-neutral-900 hover:bg-neutral-800 transition-colors p-6 rounded-2xl shadow-lg group text-center"
            >
              <div className="text-purple-400 mb-4 group-hover:rotate-3 transition-transform">
                {cat.icon}
              </div>
              <div className="text-sm sm:text-base font-medium flex items-center justify-center gap-1">
                {cat.name}
                <FiChevronRight className="text-purple-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
