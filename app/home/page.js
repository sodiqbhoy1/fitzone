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

  const programs = [
    {
      title: "Workout Videos",
      description: "Access tohundreds of free, full-length workout videos."
    },
    {
      title: "Workout Programs",
      description: "Affordable and effective workout progams."
    },
    {
      title: "Meal Plans",
      description: "Plns built with registered dietitions and nutritionist."
    },
    {
      title: "YANYAN ALL ACCESS",
      description: "Add powerful features toyour membership."
    },
  ];


  return (
    <div>
      <Navbar />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 bg-black text-white">
        {/* Text Section */}
        <section className="max-w-full md:max-w-[50%] text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EC7807] mb-4">DON'T STOP!</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">WORKOUT</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">ATHOME</h1>
          <p className="text-[18px] md:text-[20px] text-[#EFEDE8A6] mb-8">
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

      {/* Achievement Section */}
      <section className="flex flex-wrap justify-center items-center gap-8 p-8 md:p-12 text-white border-b-2 border-[#EC7807] pb-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 bg-black rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]"
          >
            <h1 className="text-3xl font-bold text-[#EC7807] mb-2">{achievement.headings}</h1>
            <p className="text-sm mb-2">{achievement.one}</p>
            <p className="text-sm">{achievement.two}</p>
          </div>
        ))}
      </section>

      {/* not sure where to start */}
    
      <section class="py-8 bg-[#111111]">
  <div class="max-w-7xl mx-auto px-6">
    <h3 class="text-3xl font-semibold text-white text-center mb-6">Not sure where to start</h3>
    <p class="text-lg text-[#EFEDE8A6] text-center mb-8">Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
  </div>

  <div class="flex flex-wrap gap-3 justify-center ">
    {programs.map((program, index) => (
      <div key={index} className="bg-[#181717] rounded-lg p-6 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-white mb-4">{program.title}</h3>
        <p className="text-[#EFEDE8A6] text-sm">{program.description}</p>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}
