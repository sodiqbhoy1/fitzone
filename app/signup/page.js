import { FcGoogle } from "react-icons/fc";
import Navbar from "../navbar/page";

export default function Signup() {
    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Signup Form */}
            <div className="flex items-center justify-center pt-20">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">FITZONE</h2>
                    <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">Sign Up</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-[#EC7807] focus:border-[#EC7807] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-[#EC7807] focus:border-[#EC7807] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-[#EC7807] focus:border-[#EC7807] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-[#EC7807] focus:border-[#EC7807] outline-none"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-[#EC7807] focus:ring-[#EC7807] border-gray-300 rounded"
                                />
                                <label className="ml-2 block text-sm text-gray-700">
                                    I agree to the{" "}
                                    <a href="/terms" className="text-[#EC7807] hover:text-[#D96A00]">
                                        terms and conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#EC7807] text-white font-semibold rounded-md hover:bg-[#D96A00] focus:outline-none focus:ring-2 focus:ring-[#EC7807]"
                        >
                            Sign Up
                        </button>

                        <p className="text-sm text-gray-600 text-center">
                            Already have an account?{" "}
                            <a href="/login" className="text-[#EC7807] hover:text-[#D96A00]">
                                Login
                            </a>
                        </p>

                        <div className="flex items-center justify-center space-x-2">
                            <span className="h-px bg-gray-300 flex-1"></span>
                            <span className="text-sm text-gray-500">or</span>
                            <span className="h-px bg-gray-300 flex-1"></span>
                        </div>

                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-white text-gray-700 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center border border-gray-300"
                        >
                            <FcGoogle className="mr-2" />
                            Sign up with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}