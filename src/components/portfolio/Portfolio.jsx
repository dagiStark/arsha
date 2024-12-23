import { Button } from "@mui/material";
import { useState } from "react";
import { portfolioItems } from "../../constants";
import { motion } from "framer-motion";

function Portfolio() {
  const [activeButton, setActiveButton] = useState("all");
  const buttons = ["all", "app", "card", "web"];
  return (
    <main className="px-24 py-16" id="portfolio">
      <section>
        <motion.div
          className="flex flex-col items-center justify-center"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h1 className="text-4xl uppercase font-bold text-[#283a5ae6]">
            Portfolio
          </h1>
          <p className="text-xl text-black/40 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            magni?
          </p>
        </motion.div>
      </section>

      <section>
        <div className="flex flex-wrap justify-center gap-2 my-10 ">
          {buttons.map((button, index) => (
            <Button
              variant={activeButton === button ? "contained" : "text"}
              key={index}
              onClick={() => setActiveButton(button)}
              sx={{
                borderRadius: "50px",
                padding: "6px 25px",
                color: "#444",
                backgroundColor: activeButton === button ? "#47b2e4" : "#fff",
                borderColor: "#fff",
                ":hover": {
                  backgroundColor: "#47b2e4",
                  color: "#fff",
                  borderColor: "#47b2e4",
                },
              }}
              className="capitalize"
            >
              {button}
            </Button>
          ))}
        </div>

        <div>
          <div className="flex gap-5 flex-wrap justify-center ">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 200, opacity: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {(activeButton === "all" || item.category === activeButton) && (
                  <img
                    src={item.img}
                    alt={"portfolio"}
                    width={400}
                    loading="lazy"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
