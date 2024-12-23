import { aboutItems } from "../../constants";
import { CircleCheckBig, MoveRight } from "lucide-react";
import { Button } from "@mui/material";
import AccordionUsage from "./Accordion";
import whyUs from "../../assets/img/why-us.png";
import skills from "../../assets/img/skills.png";
import { skillItems } from "../../constants";
import LinearWithValueLabel from "./LinearProgress";
import { motion } from "framer-motion";

function About() {
  return (
    <main className=" mt-14 flex flex-col items-center pb-16" id="about">
      <motion.div
        className="mb-16 px-24"
        whileInView={{ z: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        initial={{ z: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl uppercase font-bold text-[#283a5ae6]">
          ABout Us
        </h1>
      </motion.div>

      <motion.section
        className="flex text-xl text-[#444444] gap-10 px-24"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className=" w-[50%] text-wrap flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            esse! Lorem ipsum dolor sit.
          </p>

          <ul className="flex flex-col gap-2">
            {aboutItems.map((item) => (
              <li key={item.id} className="flex gap-2 items-center">
                <CircleCheckBig color="#47b2e4" />
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-wrap w-[50%] flex flex-col gap-9">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            blanditiis laudantium quidem expedita tempore quis inventore
            temporibus, amet repellendus voluptatibus.
          </p>

          <div>
            <Button
              variant="outlined"
              sx={{ padding: "8px 25px", color: "#47b2e4" }}
            >
              Read more <MoveRight />
            </Button>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="flex mt-16 gap-10 text-wrap bg-[#f5f6f8] px-24 py-10"
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex flex-col gap-4 w-[60%]">
          <h1 className="text-4xl font-semibold text-[#283a5ae6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            <span className="text-[#0f1725c8] font-bold">
              Exercitationem, corrupti?
            </span>{" "}
          </h1>

          <p className="text-lg text-black/40 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
            veniam voluptatibus beatae totam saepe sit! Lorem ipsum dolor sit
            amet.
          </p>
          <AccordionUsage />
        </div>

        <div className="flex flex-col gap-4 w-[40%]">
          <img src={whyUs} alt="why us" loading="lazy" />
        </div>
      </motion.section>

      <motion.section className="px-24 flex justify-between mt-16 gap-4">
        <div>
          <img src={skills} alt="skills" loading="lazy" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-5xl text-[#37517e]">
            Voluptatem dignissimos provident quasi corporis voluptas
          </h3>
          <p className="italic text-xl text-black/40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div>
            {skillItems.map((skill, index) => (
              <motion.div
                key={index}
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <h3 className="font-bold ">{skill.name}</h3>
                <LinearWithValueLabel progress={skill.percentage} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default About;
