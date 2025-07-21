"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "react-hot-toast"

const Page = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        scholarNo: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(`${formData.scholarNo}`.length !== 11){
            toast.error("Invalid Scholar Number")
            setFormData({
              scholarNo: "",
              password: "",
            });
        }
        try {
            const response = await axios.post("api/user/login",{username: formData.scholarNo, password: formData.password})

            router.push("/")
            toast.success("Login Successfully");
        } catch (error) {
            if(error.status === 401){
                toast.error("Username and Password required")
            }else if(error.status === 403){
                // toast.error("")
            }else {
                console.log("Internal Server Error : ", error);
                toast.error("Error 500 : Internal Server Error")

            }

        }
    }

    return (
        <div className="flex md:flex-row flex-col justify-center items-center w-full min-h-screen overflow-hidden">
        <Toaster/>
            <motion.div
                className="md:flex-1 flex-1/4 bg-[#e05548] h-screen flex flex-col items-center justify-center"
                animate={{ x: 0 }}
                initial={{ x: -1000 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="font-semibold md:text-6xl text-4xl text-[#fff86]">MANIT BAZAAR</div>
                <p className="mt-4 md:text-lg text-md text-[#000] max-w-md text-center font-sans">
                    Your Campus Marketplace – Buy, Sell & Connect with MANIT students.
                    Turn your unused items into someone else’s treasure!
                </p>
            </motion.div>

            <motion.div
                className="flex-2 md:flex-1 bg-[#fff8e6] h-screen flex md:items-center md:justify-center items-start justify-start md:mt-0 mt-15"
                animate={{ x: 0 }}
                initial={{ x: 1000 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm md:p-8 p-4 bg-neutral-700 rounded-xl shadow-lg flex flex-col gap-6 mx-4"
                >
                    <h2 className="text-3xl font-semibold text-white text-center tracking-tight">
                        Login
                    </h2>

                    <p className="text-center text-sm text-gray-300 -mt-4">
                        Login using your MANIT official credentials
                        that you use at <span className="text-[#e05548] font-medium">students.manit.ac.in</span>
                    </p>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="scholar" className="text-sm font-medium text-gray-300">
                            Scholar Number
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                id="scholar"
                                name="scholarNo"
                                required
                                value={formData.scholarNo}
                                onChange={handleChange}
                                className="
          w-full rounded-lg bg-neutral-800 border border-gray-700
          pr-32 pl-2 py-3 text-white text-sm
          focus:border-[#fff8e6] focus:ring-2 focus:ring-[#fff8e6] focus:outline-none
          transition-colors duration-200
        "
                                placeholder="Enter your Scholar Number"
                            />
                            <span
                                className="
          absolute inset-y-0 right-0 flex items-center pr-4
          text-gray-800 text-sm pointer-events-none
        "
                            >
                                @manit.ac.in
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="
        w-full rounded-lg bg-neutral-800 border border-gray-700
        px-4 py-3 text-white text-sm
        focus:border-[#fff8e6] focus:ring-2 focus:ring-[#fff8e6] focus:outline-none
        transition-colors duration-200
      "
                            placeholder="Enter your Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="
      mt-2 w-full rounded-lg bg-[#e05548] 
      text-white font-medium py-3 text-base
      transition-colors duration-200 shadow-md hover:shadow-lg
    "
                    >
                        Sign In
                    </button>
                </form>



            </motion.div>
        </div>
    )
}

export default Page
