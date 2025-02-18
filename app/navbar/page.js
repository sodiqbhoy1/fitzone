import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-[#ec7807] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo with Link to Homepage */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer  transition">
            FITZONE
          </h1>
        </Link>

        {/* Links on the Right */}
        <div className="ml-auto flex space-x-6">
          <Link href="/signup" className="px-6 py-2 rounded-lg transition">
            Home
          </Link>
          <Link href="/signup" className="px-6 py-2 rounded-lg transition">
            About
          </Link>
          <Link href="/signup" className="px-6 py-2 rounded-lg transition">
            Programs
          </Link>
          <Link href="/signup" className="px-6 py-2 rounded-lg transition">
            Community
          </Link>
          <Link
            href="/signup"
            className="text-white px-6 py-2 border-[#ec7807] border-solid border-[1px] rounded-lg transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}
