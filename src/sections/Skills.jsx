import Reveal from "../components/Reveal";

const SkillCard = ({ title, content }) => {
  return (
    <div
      className="
        group
        relative
        bg-white/5 border border-white/10
        rounded-xl p-6
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-cyan-400/40
        hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-sky-400/5
      "
    >
      <h3 className="text-lg font-semibold text-white mb-4">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-slate-300 transition">
        {content}
      </p>
    </div>
  );
};

const Skills = () => {
  return (
    <Reveal>
      <section
        id="skills"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Languages"
            content="JavaScript, C++, C, HTML"
          />

          <SkillCard
            title="Frontend"
            content="React, CSS, Bootstrap"
          />

          <SkillCard
            title="Backend"
            content="Node.js, Express.js, MongoDB, Firebase"
          />

          <SkillCard
            title="Tools & Platforms"
            content="Git, GitHub, Postman, Vercel, Render"
          />

          <SkillCard
            title="Core Concepts"
            content="REST APIs, JWT Authentication, DSA, OOP"
          />

          <SkillCard
            title="Additional"
            content="File Uploads (Multer), API Testing"
          />
        </div>
      </section>
    </Reveal>
  );
};

export default Skills;
