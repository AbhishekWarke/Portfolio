import Reveal from "../components/Reveal";

const Education = () => {
  return (
    <Reveal>
      <section
        id="education"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Education <span className="text-cyan-400">.</span>
        </h2>

        <div
          className="
            group relative
            bg-white/5 border border-white/10
            rounded-xl p-8
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:border-cyan-400/40
            hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-sky-400/5
          "
        >
          {/* Accent bar */}
          <span
            className="
              absolute left-0 top-6 bottom-6 w-[3px]
              bg-cyan-400/80 rounded-full
            "
          />

          <h3 className="text-xl font-semibold text-white">
            Bachelor of Technology in Computer Science Engineering
          </h3>

          <p className="text-cyan-400/80 mt-1 text-sm">
            Medicaps University, Indore · 2022 – 2026
          </p>

          <p className="mt-4 text-slate-300 group-hover:text-slate-200 transition">
            CGPA: <span className="text-white font-medium">8.66 / 10</span>
          </p>
        </div>
      </section>
    </Reveal>
  );
};

export default Education;
