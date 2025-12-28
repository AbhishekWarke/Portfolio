import Reveal from "../components/Reveal";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <Reveal>
      <section
        id="contact"
        className="py-28 px-6 max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
          I’m always open to discussing new opportunities, projects, or
          collaborations. Feel free to reach out — I’ll respond as soon as
          possible.
        </p>

        {/* Primary CTA */}
        <div className="mt-10">
          <a
            href="mailto:abhishek.warke2004@gmail.com"
            className="
              inline-block px-8 py-4 rounded-lg
              bg-gradient-to-r from-cyan-400 to-sky-400
              text-black font-medium
              transition-transform hover:scale-105
            "
          >
            Say Hello
          </a>
        </div>

        {/* Contact Info Card */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              group
              w-full max-w-md
              bg-white/5 border border-white/10
              backdrop-blur-sm
              rounded-2xl
              p-6
              text-left
              space-y-4
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-cyan-400/40
              hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-sky-400/5
            "
          >
            <div className="flex items-center gap-3 text-slate-300 text-sm transition group-hover:text-slate-200">
              <FiMapPin className="text-cyan-400" />
              <span>Indore, Madhya Pradesh, India</span>
            </div>

            <div className="flex items-center gap-3 text-slate-300 text-sm transition group-hover:text-slate-200">
              <FiMail className="text-cyan-400" />
              <a
                href="mailto:abhishek.warke2004@gmail.com"
                className="hover:text-white transition"
              >
                abhishek.warke2004@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-sm transition group-hover:text-slate-300">
              <FiMail className="text-slate-400 group-hover:text-slate-300 transition" />
              <a
                href="mailto:abhishekwarke214@gmail.com"
                className="hover:text-white transition"
              >
                abhishekwarke214@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-sm transition group-hover:text-slate-300">
              <FiPhone className="text-slate-400 group-hover:text-slate-300 transition" />
              <span>+91 79990 57712</span>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Contact;
