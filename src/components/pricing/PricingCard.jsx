import { pricingCards } from "../../constants";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

function PricingCard() {
  return (
    <main>
      <div>
        <div className="flex items-center justify-center gap-16">
          {pricingCards.map((card, indexB) => (
            <motion.div
              key={indexB}
              className={`p-10 shadow-xl rounded-lg bg-white ${
                indexB === 1 && "border-t-4 border-t-[#47b2e4]"
              }`}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 200, opacity: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h1 className=" font-bold text-[#283a5ae6] text-2xl mb-2">
                {card.title}
              </h1>
              <p className="mb-10">
                {" "}
                <span className="text-[#47b2e4] text-5xl font-semibold">
                  ${card.price}
                </span>{" "}
                <span className="text-black/60 text-lg">/month</span>
              </p>
              <div className="flex flex-col gap-4 mb-16">
                {card.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 ${
                      index > 2 && card.title === "Basic" && "line-through"
                    }`}
                  >
                    {index > 2 && card.title === "Basic" ? (
                      <CloseIcon />
                    ) : (
                      <CheckIcon className="text-green-500" />
                    )}
                    <p className="text-black/60 text-xl">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: indexB === 1 ? "#47b2e4" : "#fff",
                  borderRadius: "50px",
                  fontSize: "14px",
                  padding: "10px 28px",
                  margin: " 0 0 0 30px",
                  transition: "0.3s",
                  color: indexB === 1 ? "#fff" : "#47b2e4",
                  borderColor: indexB !== 1 && "#47b2e4",
                  borderWidth: indexB !== 1 && "2px",
                }}
              >
                {" "}
                Buy Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default PricingCard;
