import Image from "next/image";
import Navbar from "../navbar/page";

export default function Homepage() {

    const achievements = [
    {
      headings: "500+",
      one: "Happy Members",
      two: "Our community is growing fast",

    },
    {
      headings: "5+",
      one: "Year Experience",
      two: "Experience in various workouts",

    },
    {
      headings: "13+",
      one: "Certified Trainers",
      two: "Guidance at every step.",

    },
    {
      headings: "90%",
      one: "Customer Satisfaction",
      two: "We ensure your progress satisfaction",

    },
    ];

  return (
    <div>
      <Navbar />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 bg-black text-white">
        {/* Text Section */}
        <section className="max-w-full md:max-w-[50%] text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EC7807] mb-4">DON'T STOP!</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">WORKOUT</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">ATHOME</h1>
          <p className="text-[20px] text-[#EFEDE8A6] mb-8 ">
            A huge selection of health and fitness content, healthy recipes, and transformation stories to help you get fit and stay fit!
          </p>
          <button className="bg-[#EC7807] text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#ec7907d5] transition-colors">
            Start your journey
          </button>
        </section>

        {/* Images Section */}
        <section className="flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
          <img
            src="/lady.png"
            alt="fitzone"
            className="w-full md:w-[250px] lg:w-[300px] rounded-lg shadow-lg object-cover"
          />
          <img
            src="/man.png"
            alt="fitzone"
            className="w-full md:w-[250px] lg:w-[300px] rounded-lg shadow-lg object-cover"
          />
        </section>
      </div>

      {/* achievement section */}

<section className="flex justify-center items-center gap-8 p-8 md:p-12 text-white border-b-2 border-[#EC7807] pb-2 ">

{achievements.map((achievement)=>(
    
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[32px] font-bold ">{achievement.headings}</h1>
      <p className="text-[12px] ">{achievement.one}</p>
      <p className="text-[12px] ">{achievement.two}</p>
    </div>
))}


</section>

    </div>
  );
}
