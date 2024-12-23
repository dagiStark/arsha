import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { navbarLinks } from "../../constants";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(activeIndex);

  useEffect(() => {
    // Handle background visibility on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Handle active section tracking
    const observerOptions = { threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveIndex(entry.target.id);
        }
      });
    }, observerOptions);

    // Attach observer to each section
    navbarLinks.forEach((link) => {
      const section = document.getElementById(link.path);
      if (section) observer.observe(section);
    });

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main id="navbar">
      <nav
        className={`${
          isScrolled ? "bg-[#283a5ae6]" : "bg-transparent"
        } bg-opacity-50 flex items-center justify-between pl-24 pr-24 py-8 z-10 fixed w-full transition-all duration-300`}
      >
        <h1 className="text-3xl font-semibold text-white">ARSHA</h1>
        <ul className="flex gap-x-8 items-center justify-between text-white font-medium text-lg">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.path}`}
                className={`${
                  activeIndex === link.path ? "text-[#47b2e4]" : "text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#47b2e4",
              borderRadius: "50px",
              fontSize: "14px",
              padding: "8px 25px",
              margin: " 0 0 0 30px",
              transition: "0.3s",
            }}
          >
            Get Started
          </Button>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
