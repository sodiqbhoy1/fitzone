import Navbar from "../navbar/page";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section with Background Image */}
            <section 
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/banner.png')" }} // Replace with your image path
            >
                {/* Overlay to darken the background image */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-left px-8 max-w-2xl mx-auto">
                    <h2 className="text-4xl text-white font-bold mb-4">
                        Get more out of your <br />
                        <span className="text-white">Fitness Journey</span>
                    </h2>
                    <p className="text-white text-lg mb-6">
                        Join the community to track your progress
                    </p>
                    <p className="text-white mb-8">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.
                    </p>
                    <button className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
                        Create Account
                    </button>
                </div>
            </section>
        </div>
    );
}