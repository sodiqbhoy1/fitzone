import { FcGoogle } from "react-icons/fc";
import Navbar from "../navbar/page";

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navbar */}
            <Navbar />

            {/* Login Form */}
            <div className="flex items-center justify-center pt-20"> {/* Added padding-top to account for the navbar */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">FITZONE</h2>
                    <h1 className="text-2xl font-semibold text-white text-center mb-6">Login</h1>

                    <form className="space-y-6">
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

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 block text-sm text-gray-300">Remember me</label>
                            </div>
                            <a href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-400">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>

                        <p className="text-sm text-gray-400 text-center">
                            Don't have an account?{" "}
                            <a href="/signup" className="text-blue-500 hover:text-blue-400">
                                Sign Up
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
                            Log in with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}