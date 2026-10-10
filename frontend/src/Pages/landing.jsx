export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white relative overflow-hidden">

      {/* 🌌 BACKGROUND BASE */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020] via-[#0F1A3A] to-[#111B3D]"></div>

      {/* 🔵 PURPLE + BLUE GLOW BLOBS */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-yellow-500 rounded-full blur-[160px] opacity-40 text-white"></div>
      <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-40"></div>
      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[180px] opacity-20"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center px-12 py-6">
        <h1 className="text-2xl font-bold tracking-wide">TaskFlow</h1>

        <ul className="hidden md:flex gap-10 text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Features</li>
          <li className="hover:text-white cursor-pointer transition">How it works</li>
          <li className="hover:text-white cursor-pointer transition">Pricing</li>
        </ul>

        <div className="flex gap-4">
          <button className="text-gray-300 hover:text-white transition">
            Login
          </button>

          <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-12 mt-16">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Manage Projects <br />
            Smarter & Faster
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            A powerful task management system to organize projects, assign tasks,
            track progress, and boost productivity in one place.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              Get Started
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Live Demo
            </button>
          </div>

          {/* SMALL STATS */}
          <div className="flex gap-8 mt-10 text-gray-400 text-sm">
            <p>✔ No Credit Card</p>
            <p>✔ Free Setup</p>
            <p>✔ Easy to Use</p>
          </div>
        </div>

        {/* RIGHT SIDE DASHBOARD MOCK */}
        <div className="mt-12 md:mt-0">
          <div className="w-[430px] h-[300px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400">Dashboard Preview</p>
              <p className="text-xs text-gray-500 mt-2">
                (You will replace this with real UI later)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 mt-28 px-12 text-center">
        <h2 className="text-3xl font-bold">Powerful Features</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {[
            "Task Management",
            "Project Tracking",
            "Team Collaboration",
            "Secure System",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 backdrop-blur-xl"
            >
              <p className="text-gray-200 font-semibold">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 mt-28 px-12 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12 text-gray-300">

          <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            1. Create Project
          </div>

          <div className="text-gray-500">→</div>

          <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            2. Add Tasks
          </div>

          <div className="text-gray-500">→</div>

          <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            3. Track Progress
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 mt-28 text-center px-12">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl py-16 px-8">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to boost your productivity?
          </h2>

          <p className="text-gray-300 mt-4">
            Start managing your projects smarter today.
          </p>

          <button className="mt-8 bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
            Get Started Now
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 mt-28 px-12 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between text-gray-400">
        <p>© 2026 TaskFlow. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </footer>

    </div>
  );
};

