import TestimonialAccordion from "./TestimonialAccordion";
import TestimonialCards from "./TestimonialCards";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <main id="testimonials">
      <div className="mt-20">
        <motion.section
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12">
              Testimonials
            </h1>
            <p className="text-xl text-black/40 mt-4 mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              magni?
            </p>
          </div>
        </motion.section>

        <section>
          <TestimonialCards />
        </section>

        <motion.section
          className="mt-24 items-center justify-center text-center bg-[#f5f6f8] px-24 flex flex-col"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12 mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-black/40 mt-4 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              magni Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima, ea. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Error, magni?
            </p>
          </div>
          <TestimonialAccordion />
        </motion.section>
      </div>
    </main>
  );
}

export default Testimonials;
