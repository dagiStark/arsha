import { navbarLinks } from "../../constants";
import { Button } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import { useState } from "react";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState("hero");
  return (
    <main>
      <nav className="bg-[#283a5ae6] bg-opacity-50 flex items-center justify-between pl-24 pr-24 py-8 z-10 fixed w-full">
        <h1 className="text-3xl font-semibold text-white">ARSHA</h1>
        <ul className="flex gap-x-8 items-center justify-between text-white font-medium text-lg">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.path}`}
                className={`${activeIndex === link.path && "text-[#47b2e4]"}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <Dropdown />
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
            {" "}
            Get Started
          </Button>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
