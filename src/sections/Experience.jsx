import Reveal from "../components/Reveal";

const Experience = () => {
  return (
    <Reveal>
      <section
        id="experience"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Experience <span className="text-cyan-400">.</span>
        </h2>

        <div className="space-y-12">
          <div
            className="
              group relative pl-8
              border-l border-white/10
              hover:border-cyan-400/40
              transition-all duration-300
            "
          >
            {/* Timeline Dot */}
            <span
              className="
                absolute -left-[7px] top-2
                h-3.5 w-3.5 rounded-full
                bg-cyan-400
              "
            />

            {/* Card */}
            <div
              className="
                bg-white/5 border border-white/10
                rounded-xl p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-sky-400/5
              "
            >
              <h3 className="text-xl font-semibold text-white">
                AWS Cloud Trainee
              </h3>

              <p className="text-cyan-400/80 mt-1 text-sm">
                AWS Academy Program · June 2025 – July 2025
              </p>

              <p className="mt-4 text-slate-300 leading-relaxed group-hover:text-slate-200 transition">
                Completed hands-on cloud labs using EC2, S3, IAM, and VPC,
                gaining practical exposure to cloud infrastructure, security,
                and basic architecture concepts through simulated real-world
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Experience;
