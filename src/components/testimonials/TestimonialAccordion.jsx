import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { frequentQuestions } from "../../constants";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { motion } from "framer-motion";

export default function TestimonialAccordion() {
  return (
    <div className="flex flex-col gap-4">
      {frequentQuestions.map((question, index) => (
        <motion.div key={index}>
          <Accordion
            className=" text-[17px] leading-[24px]"
            defaultExpanded={index === 0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="text-[#47b2e4] font-[500]">
                <span className="mr-2">
                  <ContactSupportIcon />
                </span>
                {question.title}
              </p>
            </AccordionSummary>
            <AccordionDetails className="text-[#444444]">
              {question.description}
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </div>
  );
}
