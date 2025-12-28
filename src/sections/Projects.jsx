import Reveal from "../components/Reveal";

const ProjectCard = ({
  title,
  subtitle,
  description,
  tech,
  link,
  linkLabel,
}) => {
  return (
    <div
      className="
        group
        bg-white/5 border border-white/10
        rounded-xl p-8
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.015]
        hover:border-cyan-400/40
        hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-sky-400/5
      "
    >
      <h3 className="text-2xl font-semibold text-white mb-1">
        {title}
      </h3>

      <p className="text-slate-400">
        {subtitle}
      </p>

      <p className="mt-4 text-slate-300 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
        {tech.map((item, index) => (
          <span key={index}>
            {index !== 0 && "• "} {item}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          {linkLabel} →
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Reveal>
      <section
        id="projects"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="space-y-10">
          <ProjectCard
            title="AbhiNik"
            subtitle="Elevator Contract & Service Management System"
            description="A role-based MERN application designed to manage elevator contracts, service schedules, and customer complaints. Supports Admin and Customer roles with secure authentication and file handling."
            tech={["MERN", "Firebase", "JWT", "Multer"]}
            link="https://abhinik.vercel.app/"
            linkLabel="Live Demo"
          />

          <ProjectCard
            title="CatchThePhish"
            subtitle="Real-Time Phishing URL Detection System"
            description="A machine learning-based phishing detection system using a Random Forest model trained on thousands of URLs and deployed via a web interface and Chrome extension."
            tech={["Python", "Machine Learning", "React"]}
            link="https://catch-the-phish-ml.vercel.app/"
            linkLabel="Live Demo"
          />

          <ProjectCard
            title="CapAdvisor"
            subtitle="Personal Finance & Budget Tracking Platform"
            description="A full-stack finance platform for tracking expenses, loans, investments, and financial summaries using REST APIs and MongoDB-backed data models."
            tech={["Node.js", "MongoDB", "HTML/CSS"]}
            link="https://github.com/AbhishekWarke/CapAdvisor"
            linkLabel="GitHub"
          />
        </div>
      </section>
    </Reveal>
  );
};

export default Projects;
