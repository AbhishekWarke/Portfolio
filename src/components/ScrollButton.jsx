import { useEffect, useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const ScrollButton = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={atTop ? scrollToBottom : scrollToTop}
      title={atTop ? "Scroll to Bottom" : "Scroll to Top"}
      className="
        fixed bottom-5 right-5 z-50
        h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14
        rounded-full
        bg-gradient-to-r from-cyan-400 to-sky-400
        text-black
        flex items-center justify-center
        shadow-lg shadow-cyan-400/20
        transition
        hover:opacity-90
        active:scale-95
      "
    >
      {atTop ? (
        <IoChevronDown size={20} />
      ) : (
        <IoChevronUp size={20} />
      )}
    </button>
  );
};

export default ScrollButton;
