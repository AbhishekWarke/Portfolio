import Reveal from "../components/Reveal";

const AboutCard = ({ children }) => {
  return (
    <div
      className="
        group
        relative
        bg-white/5 border border-white/10
        rounded-2xl
        p-8
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-cyan-400/40
        hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-sky-400/5
      "
    >
      <p
        className="
          text-slate-300
          leading-relaxed
          text-justify
          transition
          group-hover:text-slate-200
        "
      >
        {children}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <Reveal>
      <section
        id="about"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* Split Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <AboutCard>
            I’m a Full Stack Developer with hands-on experience in building
            real-world web applications using the MERN stack. I focus on
            writing clean, scalable code and designing systems that are
            secure, performant, and easy to maintain.
          </AboutCard>

          <AboutCard>
            I enjoy working on end-to-end products — from designing intuitive
            user interfaces to developing robust backend APIs. I’m
            particularly interested in authentication systems, REST APIs,
            and solving real-world problems through thoughtful engineering.
          </AboutCard>
        </div>
      </section>
    </Reveal>
  );
};

export default About;
