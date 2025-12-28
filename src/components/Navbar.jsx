import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Home */}
        <a href="#" className="flex items-center">
          <img
            src="/awlogo.png"
            alt="Abhishek Warke Logo"
            className="
            h-14 w-14
            object-contain
            transition-transform duration-200
            hover:scale-105
        "
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a
            href="/resume/Abhishek_Warke_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Resume
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 text-xl"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-6 gap-6 text-slate-300 text-sm">
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Projects
              </a>
              <a
                href="/resume/Abhishek Warke's Resume (Final).pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
