import PricingCard from "./PricingCard";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <main className="bg-[#f5f6f8] px-24 mt-24 pb-10" id="pricing">
      <motion.section
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl uppercase font-bold text-[#283a5ae6] mt-12">
            Pricing
          </h1>
          <p className="text-xl text-black/40 mt-4 mb-16">
            what we call fair price exchange, try it!
          </p>
        </div>
      </motion.section>

      <section>
        <div>
          <PricingCard />
        </div>
      </section>
    </main>
  );
}

export default Pricing;
