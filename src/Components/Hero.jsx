function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
              Smart India Hackathon 2026
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Building Smart Solutions for a Better India
            </h1>

            <p className="text-gray-400 text-lg mt-6">
              Our Smart India Hackathon project leverages modern technology,
              innovation, and AI-driven solutions to solve real-world challenges
              and create meaningful impact.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold">
                Explore Project
              </button>

              <button className="border border-gray-600 hover:border-cyan-400 px-8 py-3 rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="SIH Project"
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;