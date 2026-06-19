import React from "react";

function Features() {
  const features = [
    {
      title: "Innovation",
      description:
        "Encourages students to develop innovative solutions for real-world problems.",
      icon: "💡",
    },
    {
      title: "Team Collaboration",
      description:
        "Work together with talented teammates to build impactful projects.",
      icon: "🤝",
    },
    {
      title: "Industry Exposure",
      description:
        "Connect with industry experts, mentors, and government organizations.",
      icon: "🏢",
    },
    {
      title: "Skill Development",
      description:
        "Enhance your coding, design, problem-solving, and presentation skills.",
      icon: "🚀",
    },
    {
      title: "National Recognition",
      description:
        "Get recognized at the national level for your innovative ideas.",
      icon: "🏆",
    },
    {
      title: "Career Opportunities",
      description:
        "Open doors to internships, placements, and startup opportunities.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Why Join SIH 2026?
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Smart India Hackathon provides students with a platform to solve
            real-world challenges and showcase their innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;