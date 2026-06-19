function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
            About Our Project
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Smart India Hackathon Solution
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Our project is developed as part of Smart India Hackathon
            to solve real-world challenges through innovative technology,
            data-driven insights, and user-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Why This Project?
            </h3>

            <p className="text-gray-300 leading-8 mb-4">
              The objective of this project is to address critical
              challenges faced by citizens and organizations by using
              modern technologies such as Artificial Intelligence,
              Cloud Computing, and Web Applications.
            </p>

            <p className="text-gray-300 leading-8">
              Our solution focuses on efficiency, accessibility,
              security, and scalability while providing a seamless
              experience for users.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">
            
            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h4 className="text-4xl font-bold text-cyan-400">100%</h4>
              <p className="text-gray-400 mt-2">Innovation</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h4 className="text-4xl font-bold text-cyan-400">AI</h4>
              <p className="text-gray-400 mt-2">Powered</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h4 className="text-4xl font-bold text-cyan-400">24/7</h4>
              <p className="text-gray-400 mt-2">Availability</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h4 className="text-4xl font-bold text-cyan-400">Secure</h4>
              <p className="text-gray-400 mt-2">Platform</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;