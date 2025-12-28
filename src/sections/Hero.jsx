import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Abhishek Warke
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed">
          Full Stack Developer specializing in building secure, scalable, and
          real-world web applications using the MERN stack.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume/Abhishek_Warke_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-medium transition-transform hover:scale-105 hover:opacity-90"
          >
            View Resume
          </a>

          <a
            href="mailto:abhishek.warke2004@gmail.com"
            className="
              px-6 py-3 rounded-lg
              border border-slate-600
              text-slate-200
              flex items-center gap-2
              transition
              hover:border-slate-400
              hover:bg-white/5
            "
          >
            <FiMail />
            Email Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-6 text-slate-400 text-xl">
          <a
            href="https://github.com/AbhishekWarke"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishekwarke21"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-slate-500 text-sm"
          >
            Scroll ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
