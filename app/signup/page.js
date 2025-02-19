import { FcGoogle } from "react-icons/fc";
import Navbar from "../navbar/page";

export default function Signup() {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navbar */}
            <Navbar />

            {/* Signup Form */}
            <div className="flex items-center justify-center pt-20"> {/* Added padding-top to account for the navbar */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">FITZONE</h2>
                    <h1 className="text-2xl font-semibold text-white text-center mb-6">Sign Up</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 block text-sm text-gray-300">
                                    I agree to the <a href="/terms" className="text-blue-500 hover:text-blue-400">terms and conditions</a>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>

                        <p className="text-sm text-gray-400 text-center">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-500 hover:text-blue-400">
                                Login
                            </a>
                        </p>

                        <div className="flex items-center justify-center space-x-2">
                            <span className="h-px bg-gray-600 flex-1"></span>
                            <span className="text-sm text-gray-400">or</span>
                            <span className="h-px bg-gray-600 flex-1"></span>
                        </div>

                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-white text-gray-700 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center"
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